# Weekly Email Digest — Implementation Guide

Built and deployed: 12th May 2026.

---

## Overview

Every Tuesday at 3pm EAT (12:00 UTC), SecureCloudX automatically sends a personalised progress email to every subscribed user. The email shows their module completion, points them to their next step, features a curated blog post, and closes with a statement of the week.

---

## Architecture

```
pg_cron (Supabase)
  └─ fires every Tuesday 12:00 UTC
       └─ net.http_post → send-weekly-email (Edge Function)
            ├─ reads email_preferences (subscribed users)
            ├─ reads weekly_content (quote + blog slug)
            ├─ fetches blog-manifest.json from site
            ├─ reads user_progress per user
            └─ sends via Resend API → logs to email_log
```

---

## Database tables

### `email_preferences`
| Column | Type | Notes |
|---|---|---|
| `user_id` | uuid (FK auth.users) | primary key |
| `subscribed` | bool | default true |
| `unsubscribe_token` | uuid | auto-generated, used in unsubscribe URL |
| `created_at` | timestamptz | |

### `weekly_content`
| Column | Type | Notes |
|---|---|---|
| `id` | serial | |
| `week_of` | date | Monday of the target week (YYYY-MM-DD) |
| `quote` | text | Statement of the week |
| `quote_author` | quote_author | Attribution |
| `featured_blog_slug` | text | Must match a slug in `blog-manifest.json` |

### `email_log`
| Column | Type | Notes |
|---|---|---|
| `id` | serial | |
| `user_id` | uuid | |
| `sent_at` | timestamptz | default now() |
| `status` | text | `sent` / `failed` / `skipped` |
| `error_msg` | text | nullable |

---

## Edge Functions

### `send-weekly-email`

Located at `supabase/functions/send-weekly-email/index.ts`.

**Test mode** — POST with `{"test_email":"you@example.com"}` to send a preview to a single address without touching real subscribers. The progress bar shows 3/7 as a sample.

**Production mode** — POST with empty body `{}`. Iterates all `subscribed=true` rows, looks up each user's email and name via `auth.admin.getUserById`, computes progress from `user_progress`, builds and sends the HTML email via Resend, and writes a row to `email_log`.

Key constants in the file:
- `CORE_MODULES` — must stay in sync with `src/data/phases.js`
- `FROM_EMAIL` — `SecureCloudX <progress@securecloudx.xyz>`
- `SITE_URL` — `https://securecloudx.xyz`

**Fallbacks** — if no `weekly_content` row exists for the current week, the function falls back to Bruce Schneier's "Security is not a product, but a process." and the `secure-coding-practices` blog slug. The email still sends.

### `unsubscribe`

Located at `supabase/functions/unsubscribe/index.ts`.

GET `?token=<uuid>` — validates the UUID format, sets `subscribed=false` in `email_preferences`, returns a branded HTML confirmation page. Handles already-unsubscribed, invalid token, and error states.

---

## Frontend

### `src/pages/UnsubscribePage.jsx`

Calls the `unsubscribe` edge function client-side using `VITE_SUPABASE_URL`. Shows loading / success / already-unsubscribed / invalid-token / error states with a "Back to Home" CTA.

### `src/routes/routeConfig.jsx`

Added `{ path: "/unsubscribe", Component: UnsubscribePage }` to `standaloneRoutes` (outside the auth shell so unauthenticated users can unsubscribe).

### `src/contexts/AuthContext.jsx`

On every `SIGNED_IN` event, upserts a row into `email_preferences` with `ignoreDuplicates: true`. This means every new user is automatically subscribed on first sign-in with no extra action needed.

---

## Cron schedule

```sql
select cron.schedule(
  'weekly-email-digest',
  '0 12 * * 2',   -- every Tuesday 12:00 UTC = 3pm EAT
  $$
    select net.http_post(
      url     => 'https://fudtismhzeqyisalxsga.supabase.co/functions/v1/send-weekly-email',
      headers => '{"Authorization": "Bearer <SERVICE_ROLE_KEY>", "Content-Type": "application/json"}'::jsonb,
      body    => '{}'::jsonb
    );
  $$
);
```

Verify it is registered:
```sql
select * from cron.job;
```

---

## Weekly maintenance

Each week before Tuesday, insert a content row:

```sql
insert into weekly_content (week_of, quote, quote_author, featured_blog_slug)
values (
  '2026-05-18',        -- Monday of target week
  'Your quote here',
  'Author',
  'blog-slug-here'     -- must exist in public/blog/blog-manifest.json
);
```

If you forget, the fallback quote + blog fires automatically — no emails are skipped.

---

## Deliverability checklist

- [x] `List-Unsubscribe` and `List-Unsubscribe-Post` headers on every send
- [x] Neutral subject line (no re-engagement phrases)
- [ ] SPF + DKIM records added in DNS via Resend dashboard (Domains → securecloudx.xyz)
- [ ] DMARC TXT record: `_dmarc` → `v=DMARC1; p=none; rua=mailto:progress@securecloudx.xyz`
- [ ] Domain registered in Google Postmaster Tools (`securecloudx.xyz`, not the full email address)
- [ ] Resend API key rotated after exposure in session

---

## Deploying changes

```bash
npx supabase functions deploy send-weekly-email --project-ref fudtismhzeqyisalxsga
npx supabase functions deploy unsubscribe --project-ref fudtismhzeqyisalxsga
```

## Backfilling existing users

Run once in the Supabase SQL editor to enrol users who signed up before this feature was deployed:

```sql
insert into email_preferences (user_id)
select id from auth.users
on conflict (user_id) do nothing;
```
