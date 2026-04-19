import { useState, useEffect, useRef, useCallback } from "react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../contexts/AuthContext";

/**
 * Persists per-page step checkbox state to Supabase (source of truth),
 * with localStorage as an optimistic cache for instant UI feedback.
 *
 * @param {string} storageKey  — unique key, e.g. "scx_steps_1_task"
 * @param {number} _total      — total steps (kept for call-site clarity)
 * @returns {[Set<number>, (i: number) => void]}
 */
export function useStepProgress(storageKey, _total) {
    const { user } = useAuth();
    const userId = user?.id;

    // Initialise from localStorage immediately — instant paint, no flash
    const [checked, setChecked] = useState(() => {
        try {
            const saved = localStorage.getItem(storageKey);
            return saved ? new Set(JSON.parse(saved)) : new Set();
        } catch {
            return new Set();
        }
    });

    // On mount (or user change) fetch from Supabase and reconcile
    useEffect(() => {
        if (!userId) return;
        supabase
            .from("user_step_progress")
            .select("checked_indices")
            .eq("user_id", userId)
            .eq("storage_key", storageKey)
            .maybeSingle()
            .then(({ data }) => {
                if (data?.checked_indices) {
                    const s = new Set(data.checked_indices);
                    setChecked(s);
                    try {
                        localStorage.setItem(storageKey, JSON.stringify([...s]));
                    } catch { /* quota */ }
                }
            });
    }, [userId, storageKey]);

    const debounceRef = useRef(null);

    const toggleChecked = useCallback((i) => {
        setChecked((prev) => {
            const s = new Set(prev);
            s.has(i) ? s.delete(i) : s.add(i);
            const arr = [...s];

            // Update localStorage immediately for instant feedback
            try {
                localStorage.setItem(storageKey, JSON.stringify(arr));
            } catch { /* quota */ }

            // Debounced upsert to Supabase (800 ms)
            if (debounceRef.current) clearTimeout(debounceRef.current);
            debounceRef.current = setTimeout(() => {
                if (!userId) return;
                supabase
                    .from("user_step_progress")
                    .upsert(
                        {
                            user_id: userId,
                            storage_key: storageKey,
                            checked_indices: arr,
                            updated_at: new Date().toISOString(),
                        },
                        { onConflict: "user_id,storage_key" }
                    )
                    .then(({ error }) => {
                        if (error) console.error("Step progress sync:", error.message);
                    });
            }, 800);

            return s;
        });
    }, [userId, storageKey]);

    return [checked, toggleChecked];
}

/**
 * Fetches all step progress rows for the current user from Supabase.
 * Returns a map of storageKey → checkedCount, used by the dashboard.
 */
export function useAllStepCounts() {
    const { user } = useAuth();
    const userId = user?.id;
    const [counts, setCounts] = useState({});

    useEffect(() => {
        if (!userId) return;
        supabase
            .from("user_step_progress")
            .select("storage_key, checked_indices")
            .eq("user_id", userId)
            .then(({ data }) => {
                if (data) {
                    const map = {};
                    data.forEach((row) => {
                        map[row.storage_key] = row.checked_indices?.length ?? 0;
                    });
                    setCounts(map);
                }
            });
    }, [userId]);

    return counts;
}
