import { useRef, useState, useEffect } from "react";
import html2canvas from "html2canvas";
import { supabase } from "../lib/supabase";

const CERT_ID_PREFIX = "SCX";

function generateCertId(userId) {
  const hash = userId.replace(/-/g, "").slice(0, 8).toUpperCase();
  const ts = Date.now().toString(36).toUpperCase();
  return `${CERT_ID_PREFIX}-${hash}-${ts}`;
}

function formatDate(date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Certificate({ userName, userId, completedDate }) {
  const certRef = useRef(null);
  const [downloading, setDownloading] = useState(false);
  const [certId, setCertId] = useState(null);
  const [saving, setSaving] = useState(true);
  const issueDate = completedDate ?? new Date();
  const dateStr = formatDate(issueDate);
  const verifyUrl = certId ? `${window.location.origin}/verify/${certId}` : null;
  const shareUrl = certId ? `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/cert-share?certId=${certId}` : null;

  // On mount, check for existing cert or create one
  useEffect(() => {
    if (!userId) return;
    (async () => {
      // Check if user already has a certificate
      const { data: existing } = await supabase
        .from("certificates")
        .select("cert_id")
        .eq("user_id", userId)
        .maybeSingle();

      if (existing?.cert_id) {
        setCertId(existing.cert_id);
        setSaving(false);
        return;
      }

      // Generate and save new certificate
      const newCertId = generateCertId(userId);
      const { error } = await supabase.from("certificates").insert({
        cert_id: newCertId,
        user_id: userId,
        user_name: userName,
        issued_at: (completedDate ?? new Date()).toISOString(),
      });

      if (!error) {
        setCertId(newCertId);
      }
      setSaving(false);
    })();
  }, [userId, userName, completedDate]);

  // Upload certificate image to Supabase Storage for social sharing previews
  useEffect(() => {
    if (!certId || saving || !certRef.current) return;
    let cancelled = false;
    (async () => {
      try {
        await new Promise(r => setTimeout(r, 800));
        if (cancelled || !certRef.current) return;
        const canvas = await html2canvas(certRef.current, { scale: 2, useCORS: true, backgroundColor: null });
        if (cancelled) return;
        const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
        if (!blob || cancelled) return;
        await supabase.storage.from('certificates').upload(`${certId}.png`, blob, { contentType: 'image/png', upsert: true });
      } catch { /* silent — image upload is best-effort for social previews */ }
    })();
    return () => { cancelled = true; };
  }, [certId, saving]);

  const handleDownload = async () => {
    if (!certRef.current) return;
    setDownloading(true);
    try {
      const canvas = await html2canvas(certRef.current, {
        scale: 3,
        useCORS: true,
        backgroundColor: null,
      });
      const link = document.createElement("a");
      link.download = `securecloudX-certificate-${userName.replace(/\s+/g, "-").toLowerCase()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Certificate — uses inline hex colors so html2canvas can render it */}
      <div
        ref={certRef}
        className="relative w-[820px] overflow-hidden"
        style={{ aspectRatio: "1.414/1", background: "#030712", border: "2px solid #374151" }}
      >
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-24 h-24" style={{ borderTop: "2px solid #ef4444", borderLeft: "2px solid #ef4444" }} />
        <div className="absolute top-0 right-0 w-24 h-24" style={{ borderTop: "2px solid #ef4444", borderRight: "2px solid #ef4444" }} />
        <div className="absolute bottom-0 left-0 w-24 h-24" style={{ borderBottom: "2px solid #ef4444", borderLeft: "2px solid #ef4444" }} />
        <div className="absolute bottom-0 right-0 w-24 h-24" style={{ borderBottom: "2px solid #ef4444", borderRight: "2px solid #ef4444" }} />

        {/* Inner border */}
        <div className="absolute inset-4" style={{ border: "1px solid #1f2937" }} />

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center h-full px-16 py-12 text-center">

          {/* Top accent line */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-px" style={{ background: "#ef4444" }} />
            <div className="w-2 h-2 rotate-45" style={{ background: "#ef4444" }} />
            <div className="w-16 h-px" style={{ background: "#ef4444" }} />
          </div>

          {/* Logo / Title */}
          <div className="mb-2">
            <span className="text-sm font-mono tracking-[0.3em] uppercase" style={{ color: "#ef4444" }}>
              securecloudX
            </span>
          </div>

          <h1 className="text-lg font-mono tracking-[0.25em] uppercase mb-8" style={{ color: "#9ca3af" }}>
            Certificate of Completion
          </h1>

          {/* Divider */}
          <div className="w-48 h-px mb-8" style={{ background: "linear-gradient(to right, transparent, #4b5563, transparent)" }} />

          {/* Subtitle */}
          <p className="text-xs font-mono tracking-wider uppercase mb-4" style={{ color: "#6b7280" }}>
            This certifies that
          </p>

          {/* Name */}
          <h2 className="text-3xl font-mono font-bold tracking-wide mb-2" style={{ color: "#f3f4f6" }}>
            {userName}
          </h2>

          {/* Name underline */}
          <div className="w-64 h-px mb-8" style={{ background: "linear-gradient(to right, transparent, #ef4444, transparent)" }} />

          {/* Achievement text */}
          <p className="text-sm font-mono leading-relaxed max-w-lg mb-2" style={{ color: "#9ca3af" }}>
            has successfully completed all eight phases of the
          </p>
          <p className="text-base font-mono font-semibold tracking-wide mb-2" style={{ color: "#f87171" }}>
            Cloud Security Engineering Program
          </p>
          <p className="text-xs font-mono leading-relaxed max-w-md mb-8" style={{ color: "#6b7280" }}>
            demonstrating fundamental proficiency in IAM, network security, data security,
            application security, monitoring, incident response, DevSecOps, and secure cloud deployment.
          </p>

          {/* Divider */}
          <div className="w-48 h-px mb-8" style={{ background: "linear-gradient(to right, transparent, #4b5563, transparent)" }} />

          {/* Footer section */}
          <div className="flex items-end justify-between w-full max-w-md">
            {/* Date */}
            <div className="text-left">
              <div className="w-32 h-px mb-2" style={{ background: "#374151" }} />
              <p className="text-xs font-mono" style={{ color: "#6b7280" }}>{dateStr}</p>
              <p className="text-[10px] font-mono uppercase tracking-wider" style={{ color: "#4b5563" }}>Date Issued</p>
            </div>

            {/* Seal */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-1" style={{ border: "2px solid rgba(239,68,68,0.4)" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ border: "1px solid rgba(239,68,68,0.3)" }}>
                  <span className="text-[10px] font-mono font-bold tracking-wider" style={{ color: "#ef4444" }}>SCX</span>
                </div>
              </div>
              <p className="text-[9px] font-mono" style={{ color: "#4b5563" }}>VERIFIED</p>
            </div>

            {/* Signature */}
            <div className="text-right">
              <div className="w-32 h-px mb-2" style={{ background: "#374151" }} />
              <p className="text-xs font-mono" style={{ color: "#6b7280" }}>s!rr0nn3y</p>
              <p className="text-[10px] font-mono uppercase tracking-wider" style={{ color: "#4b5563" }}>program lead</p>
            </div>
          </div>

          {/* Certificate ID + Verify URL */}
          <div className="mt-6">
            <p className="text-[10px] font-mono tracking-wider" style={{ color: "#374151" }}>
              CERT ID: {certId ?? "..."}
            </p>
            {verifyUrl && (
              <p className="text-[9px] font-mono mt-1" style={{ color: "#374151" }}>
                verify: {verifyUrl}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={handleDownload}
          disabled={downloading || saving}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-700 disabled:text-gray-500 text-white font-mono text-sm px-6 py-2.5 transition-colors"
        >
          {downloading ? (
            <span className="animate-pulse">generating...</span>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download Certificate
            </>
          )}
        </button>
        {verifyUrl && (
          <a
            href={`https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${encodeURIComponent('Cloud Security Engineering')}&organizationName=${encodeURIComponent('securecloudX')}&issueYear=${issueDate.getFullYear()}&issueMonth=${issueDate.getMonth() + 1}&certUrl=${encodeURIComponent(verifyUrl)}&certId=${encodeURIComponent(certId)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white font-mono text-sm px-6 py-2.5 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            Add to LinkedIn Profile
          </a>
        )}
        {shareUrl && (
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-blue-600 hover:border-blue-400 text-blue-400 hover:text-blue-300 font-mono text-sm px-6 py-2.5 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            Share on LinkedIn
          </a>
        )}
      </div>
      {verifyUrl && (
        <p className="text-gray-600 text-xs font-mono text-center">
          verify: <a href={verifyUrl} className="text-gray-500 hover:text-gray-300 underline underline-offset-2">{verifyUrl}</a>
        </p>
      )}
    </div>
  );
}
