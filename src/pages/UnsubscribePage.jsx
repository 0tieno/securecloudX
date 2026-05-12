import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

export default function UnsubscribePage() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const [status, setStatus] = useState("loading"); // "loading" | "success" | "already" | "invalid" | "error"

  useEffect(() => {
    if (!token) {
      setStatus("invalid");
      return;
    }

    const url = `${SUPABASE_URL}/functions/v1/unsubscribe?token=${encodeURIComponent(token)}`;

    fetch(url)
      .then(async (res) => {
        if (res.ok) {
          const text = await res.text();
          // The edge function returns a confirmation page — we just check status codes
          // 200 means either success or already unsubscribed; we differentiate via response text
          if (text.includes("Already unsubscribed")) {
            setStatus("already");
          } else {
            setStatus("success");
          }
        } else if (res.status === 400) {
          setStatus("invalid");
        } else {
          setStatus("error");
        }
      })
      .catch(() => setStatus("error"));
  }, [token]);

  const states = {
    loading: {
      icon: "⏳",
      heading: "Processing…",
      message: "Please wait while we update your email preferences.",
      iconColor: "text-sky-400",
    },
    success: {
      icon: "✓",
      heading: "You've been unsubscribed",
      message:
        "You'll no longer receive weekly progress emails from SecureCloudX. You can re-subscribe any time from your account settings.",
      iconColor: "text-green-400",
    },
    already: {
      icon: "✓",
      heading: "Already unsubscribed",
      message: "You are not currently subscribed to weekly progress emails.",
      iconColor: "text-slate-400",
    },
    invalid: {
      icon: "✕",
      heading: "Invalid link",
      message:
        "This unsubscribe link is invalid or has expired. If you need help, contact us at securecloudx.learn@gmail.com.",
      iconColor: "text-red-400",
    },
    error: {
      icon: "!",
      heading: "Something went wrong",
      message:
        "We couldn't process your request. Please try again or contact us at securecloudx.learn@gmail.com.",
      iconColor: "text-yellow-400",
    },
  };

  const { icon, heading, message, iconColor } = states[status];

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#0f172a] border border-[#1e293b] rounded-xl p-10 text-center">
        {/* Logo */}
        <p className="text-xs font-bold tracking-widest text-sky-400 uppercase mb-6">
          SecureCloudX
        </p>

        {/* Icon */}
        <div
          className={`text-4xl font-bold mb-4 ${iconColor} w-14 h-14 rounded-full border-2 flex items-center justify-center mx-auto`}
          style={{ borderColor: "currentColor" }}
        >
          {icon}
        </div>

        {/* Heading */}
        <h1 className="text-xl font-semibold text-slate-100 mb-3">{heading}</h1>

        {/* Message */}
        <p className="text-sm text-slate-400 leading-relaxed mb-8">{message}</p>

        {/* CTA */}
        {status !== "loading" && (
          <Link
            to="/"
            className="inline-block bg-sky-400 text-[#0f172a] font-bold text-sm px-7 py-2.5 rounded-md hover:bg-sky-300 transition-colors"
          >
            Back to Home
          </Link>
        )}
      </div>
    </div>
  );
}
