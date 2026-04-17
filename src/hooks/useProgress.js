import { useCallback, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

/**
 * Hook for reading and writing per-phase progress stored in Supabase.
 *
 * Progress is stored in the `user_progress` table:
 *   user_id   uuid  — from auth.uid()
 *   phase_id  int   — 1-7
 *   task_key  text  — "overview" | "task" | "task-phase1" | "task-phase2" | "task-phase3"
 *   completed bool
 *
 * SQL to run once in your Supabase SQL editor:
 * ──────────────────────────────────────────────
 * create table if not exists user_progress (
 *   id           uuid primary key default gen_random_uuid(),
 *   user_id      uuid not null references auth.users(id) on delete cascade,
 *   phase_id     integer not null,
 *   task_key     text not null,
 *   completed    boolean not null default false,
 *   completed_at timestamptz,
 *   unique (user_id, phase_id, task_key)
 * );
 *
 * alter table user_progress enable row level security;
 *
 * create policy "Users can manage their own progress"
 *   on user_progress for all
 *   using  (user_id = auth.uid())
 *   with check (user_id = auth.uid());
 * ──────────────────────────────────────────────
 */
export function useProgress(userId) {
    const [progress, setProgress] = useState([]); // [{phase_id, task_key, completed}]
    const [loading, setLoading] = useState(true);

    // Fetch all progress rows for the current user
    const fetchProgress = useCallback(async () => {
        if (!userId) {
            setProgress([]);
            setLoading(false);
            return;
        }
        setLoading(true);
        const { data, error } = await supabase
            .from("user_progress")
            .select("phase_id, task_key, completed")
            .eq("user_id", userId);

        if (!error && data) setProgress(data);
        setLoading(false);
    }, [userId]);

    useEffect(() => {
        fetchProgress();
    }, [fetchProgress]);

    /**
     * Toggle a specific (phaseId, taskKey) row.
     * Optimistically updates local state then syncs to Supabase.
     */
    const toggle = useCallback(
        async (phaseId, taskKey, completed) => {
            if (!userId) return;

            // Optimistic update
            setProgress((prev) => {
                const exists = prev.find(
                    (r) => r.phase_id === phaseId && r.task_key === taskKey
                );
                if (exists) {
                    return prev.map((r) =>
                        r.phase_id === phaseId && r.task_key === taskKey
                            ? { ...r, completed }
                            : r
                    );
                }
                return [...prev, { phase_id: phaseId, task_key: taskKey, completed }];
            });

            const row = {
                user_id: userId,
                phase_id: phaseId,
                task_key: taskKey,
                completed,
                completed_at: completed ? new Date().toISOString() : null,
            };

            await supabase.from("user_progress").upsert(row, {
                onConflict: "user_id,phase_id,task_key",
            });
        },
        [userId]
    );

    /** Check whether a specific row is marked complete */
    const isComplete = useCallback(
        (phaseId, taskKey) =>
            progress.some(
                (r) =>
                    r.phase_id === phaseId && r.task_key === taskKey && r.completed
            ),
        [progress]
    );

    return { progress, loading, toggle, isComplete };
}
