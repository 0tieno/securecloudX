// @ts-nocheck — Deno runtime; not checked by VS Code's TypeScript
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

function escapeHtml(str: string): string {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

Deno.serve(async (req) => {
    const url = new URL(req.url);
    const certId = url.searchParams.get("certId");

    if (!certId || !/^SCX-[A-Z0-9]+-[A-Z0-9]+$/i.test(certId)) {
        return new Response("Invalid or missing certificate ID", { status: 400 });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data: cert } = await supabase
        .from("certificates")
        .select("cert_id, user_name, issued_at")
        .eq("cert_id", certId)
        .maybeSingle();

    if (!cert) {
        return new Response("Certificate not found", { status: 404 });
    }

    const siteUrl = "https://securecloudx.xyz";
    const verifyUrl = `${siteUrl}/verify/${cert.cert_id}`;
    const imageUrl = `${supabaseUrl}/storage/v1/object/public/certificates/${cert.cert_id}.png`;
    const safeName = escapeHtml(cert.user_name);
    const title = "Cloud Security Engineering Certificate &mdash; securecloudX";
    const description = `Verified certificate for ${safeName} &mdash; completed all 8 phases of the Cloud Security Engineering Program.`;

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>${escapeHtml(title)}</title>
  <meta property="og:title" content="${escapeHtml(title)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:image" content="${imageUrl}" />
  <meta property="og:image:width" content="1640" />
  <meta property="og:image:height" content="1160" />
  <meta property="og:url" content="${verifyUrl}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="securecloudX" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(title)}" />
  <meta name="twitter:description" content="${escapeHtml(description)}" />
  <meta name="twitter:image" content="${imageUrl}" />
  <link rel="canonical" href="${verifyUrl}" />
  <meta http-equiv="refresh" content="0;url=${verifyUrl}" />
</head>
<body>
  <p>Redirecting to certificate verification...</p>
</body>
</html>`;

    return new Response(html, {
        status: 200,
        headers: {
            "content-type": "text/html; charset=utf-8",
            "cache-control": "public, max-age=86400",
        },
    });
});
