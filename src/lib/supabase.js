import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn(
        "Supabase env vars are missing. Copy .env.example to .env and fill in your values."
    );
}

export const supabase = createClient(supabaseUrl ?? "", supabaseAnonKey ?? "");
