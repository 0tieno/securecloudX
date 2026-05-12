// @ts-nocheck — Deno runtime; not checked by VS Code TypeScript
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const RESEND_API_URL = "https://api.resend.com/emails";
const SITE_URL = "https://securecloudx.xyz";
const FROM_EMAIL = "SecureCloudX <progress@securecloudx.xyz>";

// Core learning path in order — mirrors src/data/phases.js
const CORE_MODULES = [
    { id: 1, title: "Identity & Access Management", path: "/module1" },
    { id: 2, title: "Network Security & Perimeter Defense", path: "/module2" },
    { id: 3, title: "Data Security & Encryption", path: "/module3" },
    { id: 4, title: "Application Security in Azure", path: "/module4" },
    { id: 5, title: "Cloud Security Posture Management", path: "/module5" },
    { id: 6, title: "Detection Engineering & Incident Response", path: "/module6" },
    { id: 7, title: "Capstone — Security Architecture Review", path: "/module7" },
];

function escapeHtml(str: string): string {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

/** Returns the monday of the current ISO week as a YYYY-MM-DD string. */
function currentWeekMonday(): string {
    const now = new Date();
    const day = now.getUTCDay(); // 0=Sun … 6=Sat
    const diff = day === 0 ? -6 : 1 - day;
    const monday = new Date(now);
    monday.setUTCDate(now.getUTCDate() + diff);
    return monday.toISOString().split("T")[0];
}

function buildEmailHtml(opts: {
    name: string;
    completedCount: number;
    totalCount: number;
    nextModule: { title: string; path: string } | null;
    blog: { title: string; excerpt: string; slug: string } | null;
    quote: string;
    quoteAuthor: string;
    unsubscribeUrl: string;
    showCertReminder: boolean;
}): string {
    const {
        name,
        completedCount,
        totalCount,
        nextModule,
        blog,
        quote,
        quoteAuthor,
        unsubscribeUrl,
        showCertReminder,
    } = opts;

    const progressPct = Math.round((completedCount / totalCount) * 100);
    const safeName = escapeHtml(name);

    const progressBar = `
    <div style="background:#1e293b;border-radius:8px;overflow:hidden;height:10px;margin:8px 0 4px;">
      <div style="background:#38bdf8;width:${progressPct}%;height:100%;border-radius:8px;"></div>
    </div>
    <p style="margin:0;font-size:13px;color:#94a3b8;">${completedCount} of ${totalCount} core modules complete (${progressPct}%)</p>
  `;

    const nextStepSection = nextModule
        ? `
    <tr>
      <td style="padding:24px 32px;">
        <h2 style="margin:0 0 8px;font-size:16px;font-weight:600;color:#38bdf8;text-transform:uppercase;letter-spacing:0.05em;">
          ▶ Next Up
        </h2>
        <p style="margin:0 0 16px;font-size:15px;color:#e2e8f0;"><strong>${escapeHtml(nextModule.title)}</strong></p>
        <a href="${SITE_URL}${nextModule.path}"
           style="display:inline-block;background:#38bdf8;color:#0f172a;padding:10px 24px;border-radius:6px;text-decoration:none;font-weight:700;font-size:14px;">
          Continue Learning →
        </a>
      </td>
    </tr>`
        : `
    <tr>
      <td style="padding:24px 32px;">
        <h2 style="margin:0 0 8px;font-size:16px;font-weight:600;color:#38bdf8;text-transform:uppercase;letter-spacing:0.05em;">
          ✓ Core Path Complete
        </h2>
        <p style="margin:0;font-size:15px;color:#e2e8f0;">
          You've completed all 7 core modules. Explore the Advanced path or claim your certificate!
        </p>
      </td>
    </tr>`;

    const blogSection = blog
        ? `
    <tr>
      <td style="padding:0 32px 24px;">
        <div style="border-top:1px solid #1e293b;padding-top:24px;">
          <h2 style="margin:0 0 8px;font-size:16px;font-weight:600;color:#38bdf8;text-transform:uppercase;letter-spacing:0.05em;">
            📖 Featured Post This Week
          </h2>
          <p style="margin:0 0 4px;font-size:15px;font-weight:700;color:#f1f5f9;">${escapeHtml(blog.title)}</p>
          <p style="margin:0 0 12px;font-size:14px;color:#94a3b8;">${escapeHtml(blog.excerpt)}</p>
          <a href="${SITE_URL}/posts/${escapeHtml(blog.slug)}"
             style="font-size:14px;color:#38bdf8;text-decoration:none;">
            Read the post →
          </a>
        </div>
      </td>
    </tr>`
        : "";

    const certReminderSection = showCertReminder
        ? `
    <tr>
      <td style="padding:0 32px 24px;">
        <div style="border-top:1px solid #1e293b;padding-top:24px;background:#0c2240;border-radius:8px;padding:20px 24px;">
          <h2 style="margin:0 0 6px;font-size:16px;font-weight:600;color:#facc15;">
            🏆 You're Almost There!
          </h2>
          <p style="margin:0 0 12px;font-size:14px;color:#cbd5e1;">
            You've completed ${completedCount} of 7 core modules. Finish the remaining ${totalCount - completedCount} and claim your SecureCloudX Cloud Security Engineering Certificate.
          </p>
          <a href="${SITE_URL}/certificate"
             style="display:inline-block;background:#facc15;color:#0f172a;padding:10px 24px;border-radius:6px;text-decoration:none;font-weight:700;font-size:14px;">
            View Certificate →
          </a>
        </div>
      </td>
    </tr>`
        : "";

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Your Weekly Progress — SecureCloudX</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0f;font-family:'Segoe UI',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0f;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#0f172a;border-radius:12px;overflow:hidden;border:1px solid #1e293b;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0f172a 0%,#0c2240 100%);padding:32px 32px 24px;border-bottom:2px solid #38bdf8;">
              <p style="margin:0 0 4px;font-size:12px;font-weight:700;color:#38bdf8;letter-spacing:0.12em;text-transform:uppercase;">SecureCloudX</p>
              <h1 style="margin:0;font-size:22px;font-weight:700;color:#f1f5f9;">Your Weekly Progress Update</h1>
              <p style="margin:6px 0 0;font-size:14px;color:#94a3b8;">Hey ${safeName}, here's where you stand this week.</p>
            </td>
          </tr>

          <!-- Progress -->
          <tr>
            <td style="padding:24px 32px 8px;">
              <h2 style="margin:0 0 12px;font-size:16px;font-weight:600;color:#38bdf8;text-transform:uppercase;letter-spacing:0.05em;">
                📊 Your Progress
              </h2>
              ${progressBar}
            </td>
          </tr>

          <!-- Next Step -->
          ${nextStepSection}

          <!-- Featured Blog -->
          ${blogSection}

          <!-- Certificate Reminder -->
          ${certReminderSection}

          <!-- Quote of the Week -->
          <tr>
            <td style="padding:0 32px 24px;">
              <div style="border-top:1px solid #1e293b;padding-top:24px;">
                <h2 style="margin:0 0 12px;font-size:16px;font-weight:600;color:#38bdf8;text-transform:uppercase;letter-spacing:0.05em;">
                  💡 Statement of the Week
                </h2>
                <blockquote style="margin:0;border-left:3px solid #38bdf8;padding:12px 16px;background:#0f2035;border-radius:0 6px 6px 0;">
                  <p style="margin:0 0 8px;font-size:16px;color:#f1f5f9;font-style:italic;line-height:1.6;">"${escapeHtml(quote)}"</p>
                  <cite style="font-size:13px;color:#64748b;font-style:normal;">— ${escapeHtml(quoteAuthor)}</cite>
                </blockquote>
              </div>
            </td>
          </tr>

          <!-- CTA row -->
          <tr>
            <td style="padding:0 32px 32px;">
              <a href="${SITE_URL}/home"
                 style="display:inline-block;background:#0f172a;color:#38bdf8;border:1px solid #38bdf8;padding:10px 24px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:600;">
                Go to Dashboard →
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#070b14;padding:20px 32px;border-top:1px solid #1e293b;">
              <p style="margin:0 0 6px;font-size:12px;color:#475569;">
                You're receiving this because you signed up at
                <a href="${SITE_URL}" style="color:#38bdf8;text-decoration:none;">securecloudx.xyz</a>.
              </p>
              <p style="margin:0;font-size:12px;color:#475569;">
                <a href="${unsubscribeUrl}" style="color:#64748b;text-decoration:underline;">Unsubscribe from weekly emails</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

Deno.serve(async (req) => {
    // Only allow POST (or internal scheduler call)
    if (req.method !== "POST") {
        return new Response("Method not allowed", { status: 405 });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const resendApiKey = Deno.env.get("RESEND_API_KEY")!;

    // ── Test mode — send a preview to a single address, skip all subscribers ─
    let testEmail: string | null = null;
    try {
        const body = await req.json();
        if (typeof body?.test_email === "string" && body.test_email.includes("@")) {
            testEmail = body.test_email;
        }
    } catch { /* no body is fine */ }

    const supabase = createClient(supabaseUrl, serviceRoleKey);

    // ── 1. Load this week's curated content ─────────────────────────────────
    const weekOf = currentWeekMonday();
    const { data: weeklyContent } = await supabase
        .from("weekly_content")
        .select("quote, quote_author, featured_blog_slug")
        .eq("week_of", weekOf)
        .maybeSingle();

    // Fall back to a default if admin hasn't set content for this week yet
    const quote = weeklyContent?.quote ??
        "Security is not a product, but a process.";
    const quoteAuthor = weeklyContent?.quote_author ?? "Bruce Schneier";
    const featuredSlug = weeklyContent?.featured_blog_slug ?? "secure-coding-practices";

    // ── 2. Fetch blog metadata for featured post ─────────────────────────────
    let featuredBlog: { title: string; excerpt: string; slug: string } | null = null;
    try {
        const manifestUrl = `${SITE_URL}/blog/blog-manifest.json`;
        const manifestRes = await fetch(manifestUrl);
        if (manifestRes.ok) {
            const manifest = await manifestRes.json();
            const post = manifest.posts?.find((p: { slug: string }) => p.slug === featuredSlug);
            if (post) {
                featuredBlog = { title: post.title, excerpt: post.excerpt, slug: post.slug };
            }
        }
    } catch {
        // Non-fatal — email still sends without blog section
    }

    // ── 3. Test mode — send preview to a single address and return early ─────
    if (testEmail) {
        const html = buildEmailHtml({
            name: "Test User",
            completedCount: 3,
            totalCount: CORE_MODULES.length,
            nextModule: CORE_MODULES[3],
            blog: featuredBlog,
            quote,
            quoteAuthor,
            unsubscribeUrl: `${SITE_URL}/unsubscribe?token=test-token`,
            showCertReminder: false,
        });

        try {
            const res = await fetch(RESEND_API_URL, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${resendApiKey}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    from: FROM_EMAIL,
                    to: [testEmail],
                    subject: `[TEST] Your week in cloud security — 3/${CORE_MODULES.length} modules done`,
                    html,
                }),
            });
            if (!res.ok) {
                const text = await res.text();
                return new Response(JSON.stringify({ test: true, status: "failed", error: text }), {
                    status: 500,
                    headers: { "Content-Type": "application/json" },
                });
            }
        } catch (err) {
            return new Response(JSON.stringify({ test: true, status: "failed", error: String(err) }), {
                status: 500,
                headers: { "Content-Type": "application/json" },
            });
        }

        return new Response(JSON.stringify({ test: true, status: "sent", to: testEmail }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    }

    // ── 5. Load all subscribed users with their email ────────────────────────
    const { data: prefs, error: prefsErr } = await supabase
        .from("email_preferences")
        .select("user_id, unsubscribe_token")
        .eq("subscribed", true);

    if (prefsErr || !prefs?.length) {
        return new Response(JSON.stringify({ sent: 0, error: prefsErr?.message ?? "no subscribers" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    }

    const results: Array<{ userId: string; status: string }> = [];

    for (const pref of prefs) {
        const { user_id, unsubscribe_token } = pref;

        // Get the user's email from auth.users (service role can access this)
        const { data: authUser } = await supabase.auth.admin.getUserById(user_id);
        const email = authUser?.user?.email;
        const name = authUser?.user?.user_metadata?.name ??
            authUser?.user?.user_metadata?.user_name ??
            "Cloud Security Learner";

        if (!email) {
            await supabase.from("email_log").insert({ user_id, status: "skipped", error_msg: "no email on record" });
            results.push({ userId: user_id, status: "skipped" });
            continue;
        }

        // ── 6. Compute progress for this user ───────────────────────────────
        const { data: progressRows } = await supabase
            .from("user_progress")
            .select("phase_id, completed")
            .eq("user_id", user_id)
            .eq("completed", true);

        const completedPhaseIds = new Set((progressRows ?? []).map((r: { phase_id: number }) => r.phase_id));
        const completedCount = CORE_MODULES.filter((m) => completedPhaseIds.has(m.id)).length;
        const nextModule = CORE_MODULES.find((m) => !completedPhaseIds.has(m.id)) ?? null;
        const showCertReminder = completedCount >= 5 && completedCount < CORE_MODULES.length;

        // ── 7. Build & send email ────────────────────────────────────────────
        const unsubscribeUrl = `${SITE_URL}/unsubscribe?token=${unsubscribe_token}`;
        const html = buildEmailHtml({
            name,
            completedCount,
            totalCount: CORE_MODULES.length,
            nextModule,
            blog: featuredBlog,
            quote,
            quoteAuthor,
            unsubscribeUrl,
            showCertReminder,
        });

        let status = "sent";
        let errorMsg: string | undefined;

        try {
            const res = await fetch(RESEND_API_URL, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${resendApiKey}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    from: FROM_EMAIL,
                    to: [email],
                    subject: `Your week in cloud security — ${completedCount}/${CORE_MODULES.length} modules done`,
                    html,
                }),
            });

            if (!res.ok) {
                const body = await res.text();
                throw new Error(`Resend ${res.status}: ${body}`);
            }
        } catch (err) {
            status = "failed";
            errorMsg = String(err);
        }

        await supabase.from("email_log").insert({
            user_id,
            status,
            error_msg: errorMsg ?? null,
        });

        results.push({ userId: user_id, status });
    }

    const sent = results.filter((r) => r.status === "sent").length;
    const failed = results.filter((r) => r.status === "failed").length;
    const skipped = results.filter((r) => r.status === "skipped").length;

    return new Response(JSON.stringify({ sent, failed, skipped }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
});
