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
    const firstName = escapeHtml(name.split(" ")[0]);
    const remaining = totalCount - completedCount;

    // Progress bar (table-based for broad email client compatibility)
    const progressBar = `
      <p style="margin:0 0 10px;font-size:28px;line-height:1.2;font-weight:700;color:#111827;">${completedCount}<span style="font-size:16px;font-weight:500;color:#6b7280;">/${totalCount}</span></p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:0 0 8px;">
        <tr>
          <td width="${progressPct}%" style="height:4px;background:#111827;font-size:0;line-height:0;">&nbsp;</td>
          <td width="${100 - progressPct}%" style="height:4px;background:#e5e7eb;font-size:0;line-height:0;">&nbsp;</td>
        </tr>
      </table>
      <p style="margin:0;font-size:13px;color:#9ca3af;">${progressPct}% complete</p>`;

    // Next step block
    const nextStepBlock = nextModule
        ? `
      <p style="margin:0 0 4px;font-size:13px;font-weight:600;color:#6b7280;letter-spacing:0.05em;text-transform:uppercase;">Up next</p>
      <p style="margin:0 0 18px;font-size:17px;font-weight:700;color:#111827;">${escapeHtml(nextModule.title)}</p>
      <a href="${SITE_URL}${nextModule.path}"
         style="display:inline-block;background:#111827;color:#ffffff;padding:11px 26px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:600;letter-spacing:0.01em;">
        Continue learning →
      </a>`
        : `
      <p style="margin:0 0 4px;font-size:13px;font-weight:600;color:#6b7280;letter-spacing:0.05em;text-transform:uppercase;">Core path</p>
      <p style="margin:0 0 18px;font-size:17px;font-weight:700;color:#111827;">You've finished all 7 modules.</p>
      <a href="${SITE_URL}/certificate"
         style="display:inline-block;background:#111827;color:#ffffff;padding:11px 26px;border-radius:6px;text-decoration:none;font-size:14px;font-weight:600;">
        Claim your certificate →
      </a>`;

    // Blog block (optional)
    const blogBlock = blog ? `
        <!-- Divider -->
        <tr><td style="padding:0 48px;"><div style="border-top:1px solid #f3f4f6;"></div></td></tr>

        <!-- This week's read -->
        <tr>
          <td style="padding:32px 48px;">
            <p style="margin:0 0 4px;font-size:13px;font-weight:600;color:#6b7280;letter-spacing:0.05em;text-transform:uppercase;">Worth reading this week</p>
            <p style="margin:0 0 6px;font-size:16px;font-weight:700;color:#111827;">${escapeHtml(blog.title)}</p>
            <p style="margin:0 0 14px;font-size:14px;color:#6b7280;line-height:1.65;">${escapeHtml(blog.excerpt)}</p>
            <a href="${SITE_URL}/posts/${escapeHtml(blog.slug)}"
               style="font-size:14px;color:#111827;text-decoration:underline;font-weight:600;">Read article →</a>
          </td>
        </tr>` : "";

    // Certificate reminder (subtle, warm amber)
    const certBlock = showCertReminder ? `
        <!-- Divider -->
        <tr><td style="padding:0 48px;"><div style="border-top:1px solid #f3f4f6;"></div></td></tr>

        <tr>
          <td style="padding:28px 48px;">
            <div style="background:#fffbeb;border-radius:8px;padding:20px 24px;">
              <p style="margin:0 0 6px;font-size:14px;font-weight:700;color:#92400e;">You're ${remaining} module${remaining === 1 ? "" : "s"} away from your certificate.</p>
              <p style="margin:0 0 14px;font-size:14px;color:#78350f;line-height:1.6;">
                Keep going. The Cloud Security Engineering Certificate is yours to earn.
              </p>
              <a href="${SITE_URL}/certificate"
                 style="font-size:14px;color:#b45309;text-decoration:none;font-weight:600;">See certificate →</a>
            </div>
          </td>
        </tr>` : "";

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Your weekly update — SecureCloudX</title>
</head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:48px 0 64px;">
  <tr>
    <td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

        <!-- Brand bar -->
        <tr>
          <td style="padding:0 0 20px;">
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <p style="margin:0;font-size:15px;font-weight:800;color:#111827;letter-spacing:-0.01em;">SecureCloudX</p>
                  <p style="margin:2px 0 0;font-size:11px;color:#9ca3af;letter-spacing:0.04em;text-transform:uppercase;font-weight:500;">Master cloud security. Build secure systems.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Main card -->
        <tr>
          <td style="background:#ffffff;border-radius:10px;border:1px solid #e5e7eb;overflow:hidden;">
            <table width="100%" cellpadding="0" cellspacing="0">

              <!-- Top accent line -->
              <tr><td style="background:#111827;height:3px;font-size:0;line-height:0;">&nbsp;</td></tr>

              <!-- Greeting -->
              <tr>
                <td style="padding:40px 48px 32px;">
                  <p style="margin:0 0 10px;font-size:22px;font-weight:800;color:#111827;line-height:1.3;">
                    Your cloud security update, ${firstName}.
                  </p>
                  <p style="margin:0;font-size:15px;color:#6b7280;line-height:1.7;">
                    Here's where you stand on your learning path — and what's waiting for you next.
                  </p>
                </td>
              </tr>

              <!-- Divider -->
              <tr><td style="padding:0 48px;"><div style="border-top:1px solid #f3f4f6;"></div></td></tr>

              <!-- Progress -->
              <tr>
                <td style="padding:32px 48px;">
                  <p style="margin:0 0 4px;font-size:13px;font-weight:600;color:#6b7280;letter-spacing:0.05em;text-transform:uppercase;">Your progress</p>
                  ${progressBar}
                </td>
              </tr>

              <!-- Divider -->
              <tr><td style="padding:0 48px;"><div style="border-top:1px solid #f3f4f6;"></div></td></tr>

              <!-- Next step -->
              <tr>
                <td style="padding:32px 48px;">
                  ${nextStepBlock}
                </td>
              </tr>

              ${blogBlock}

              ${certBlock}

              <!-- Divider -->
              <tr><td style="padding:0 48px;"><div style="border-top:1px solid #f3f4f6;"></div></td></tr>

              <!-- Statement of the week -->
              <tr>
                <td style="padding:32px 48px 40px;">
                  <p style="margin:0 0 16px;font-size:13px;font-weight:600;color:#6b7280;letter-spacing:0.05em;text-transform:uppercase;">Statement of the week</p>
                  <blockquote style="margin:0;padding-left:18px;border-left:3px solid #111827;">
                    <p style="margin:0 0 10px;font-size:16px;color:#1f2937;font-style:italic;line-height:1.75;font-weight:500;">"${escapeHtml(quote)}"</p>
                    <cite style="font-size:13px;color:#9ca3af;font-style:normal;font-weight:500;">— ${escapeHtml(quoteAuthor)}</cite>
                  </blockquote>
                </td>
              </tr>

            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:28px 0 0;text-align:center;">
            <p style="margin:0 0 6px;font-size:12px;color:#9ca3af;line-height:1.6;">
              You're receiving this because you're a SecureCloudX member.<br />
              <a href="${SITE_URL}" style="color:#9ca3af;text-decoration:underline;">securecloudx.xyz</a>
            </p>
            <p style="margin:0;font-size:12px;">
              <a href="${unsubscribeUrl}" style="color:#d1d5db;text-decoration:underline;">Unsubscribe</a>
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
                    subject: `[TEST] Your weekly cloud security update`,
                    html,
                    headers: {
                        "List-Unsubscribe": `<${SITE_URL}/unsubscribe?token=test-token>`,
                        "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
                    },
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
                    subject: `Your weekly cloud security update, ${name.split(" ")[0]}`,
                    html,
                    headers: {
                        "List-Unsubscribe": `<${SITE_URL}/unsubscribe?token=${unsubscribe_token}>`,
                        "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
                    },
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

        // Throttle — 500ms between sends to avoid triggering spam filters
        // on burst sending from a new domain
        await new Promise((resolve) => setTimeout(resolve, 500));
    }

    const sent = results.filter((r) => r.status === "sent").length;
    const failed = results.filter((r) => r.status === "failed").length;
    const skipped = results.filter((r) => r.status === "skipped").length;

    return new Response(JSON.stringify({ sent, failed, skipped }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
});
