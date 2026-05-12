-- ─────────────────────────────────────────────────────────────
-- Weekly email automation tables
-- Run this once in the Supabase SQL editor.
-- ─────────────────────────────────────────────────────────────

-- 1. Email preferences per user (opt-in by default on sign-up)
create table if not exists email_preferences (
  id               uuid primary key default gen_random_uuid(),
  user_id          uuid not null references auth.users(id) on delete cascade,
  subscribed       boolean not null default true,
  unsubscribe_token uuid not null default gen_random_uuid(),
  created_at       timestamptz not null default now(),
  unique (user_id)
);

alter table email_preferences enable row level security;

-- Users can only read/update their own row
create policy "Users can read own email prefs"
  on email_preferences for select
  using (auth.uid() = user_id);

create policy "Users can update own email prefs"
  on email_preferences for update
  using (auth.uid() = user_id);

-- Service role (edge function) bypasses RLS — no extra policy needed

-- ─────────────────────────────────────────────────────────────
-- 2. Weekly content — one row per week, curated manually
-- ─────────────────────────────────────────────────────────────
create table if not exists weekly_content (
  id                  uuid primary key default gen_random_uuid(),
  week_of             date not null unique,
  quote               text not null,
  quote_author        text not null default 'Unknown',
  featured_blog_slug  text not null,
  created_at          timestamptz not null default now()
);

alter table weekly_content enable row level security;

-- Public read so the edge function can query without service role if needed
create policy "Public can read weekly content"
  on weekly_content for select
  using (true);

-- ─────────────────────────────────────────────────────────────
-- 3. Email send log — audit trail
-- ─────────────────────────────────────────────────────────────
create table if not exists email_log (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users(id) on delete cascade,
  sent_at    timestamptz not null default now(),
  status     text not null check (status in ('sent', 'failed', 'skipped')),
  error_msg  text
);

alter table email_log enable row level security;

-- Users can read their own log
create policy "Users can read own email log"
  on email_log for select
  using (auth.uid() = user_id);

-- ─────────────────────────────────────────────────────────────
-- 4. pg_cron schedule — fires every Monday at 08:00 UTC
--    Requires the pg_cron and pg_net extensions to be enabled
--    in the Supabase dashboard (Database → Extensions).
--
--    Replace <PROJECT_REF> with your Supabase project reference
--    and <ANON_KEY> with your project's anon/service key.
-- ─────────────────────────────────────────────────────────────

-- Enable extensions (idempotent)
-- create extension if not exists pg_cron;
-- create extension if not exists pg_net;

-- Schedule (uncomment after enabling extensions):
-- select cron.schedule(
--   'weekly-email-digest',
--   '0 8 * * 1',   -- every Monday 08:00 UTC
--   $$
--     select net.http_post(
--       url     => 'https://<PROJECT_REF>.supabase.co/functions/v1/send-weekly-email',
--       headers => '{"Authorization": "Bearer <SERVICE_ROLE_KEY>", "Content-Type": "application/json"}'::jsonb,
--       body    => '{}'::jsonb
--     );
--   $$
-- );
