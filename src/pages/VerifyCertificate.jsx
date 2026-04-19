import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ShieldCheck, ShieldX } from "lucide-react";
import { supabase } from "../lib/supabase";

export default function VerifyCertificate() {
  const { certId } = useParams();
  const [cert, setCert] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!certId) return;
    supabase
      .from("certificates")
      .select("cert_id, user_name, issued_at")
      .eq("cert_id", certId)
      .maybeSingle()
      .then(({ data }) => {
        if (data) {
          setCert(data);
        } else {
          setNotFound(true);
        }
        setLoading(false);
      });
  }, [certId]);

  return (
    <div className="min-h-screen bg-gray-900 font-mono flex items-center justify-center px-4">
      <div className="w-full max-w-lg">
        {/* Terminal header */}
        <div className="bg-gray-800 border border-gray-700 p-4">
          <div className="flex items-center space-x-2 text-gray-500 text-xs mb-4">
            <div className="w-2.5 h-2.5 bg-red-500 rounded-full" />
            <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full" />
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
            <span className="ml-2">securecloudX — certificate verification</span>
          </div>

          <p className="text-green-400 text-sm mb-4">
            root@securecloudX:~$ <span className="text-gray-300">./verify --cert {certId}</span>
          </p>

          {loading && (
            <div className="text-gray-500 text-sm animate-pulse py-8 text-center">
              verifying...
            </div>
          )}

          {!loading && notFound && (
            <div className="py-8 text-center">
              <ShieldX className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <p className="text-red-400 text-lg mb-2">Verification Failed</p>
              <p className="text-gray-500 text-sm mb-1">
                No certificate found with ID:
              </p>
              <p className="text-gray-400 text-xs bg-gray-900 inline-block px-3 py-1 mt-1">
                {certId}
              </p>
              <p className="text-gray-600 text-xs mt-4">
                The certificate ID may be incorrect or has not been issued.
              </p>
            </div>
          )}

          {!loading && cert && (
            <div className="py-6">
              <div className="text-center mb-6">
                <ShieldCheck className="w-12 h-12 text-green-400 mx-auto mb-3" />
                <p className="text-green-400 text-lg font-semibold">Certificate Verified</p>
              </div>

              <div className="bg-gray-900 border border-gray-700 p-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">holder</span>
                  <span className="text-gray-200">{cert.user_name}</span>
                </div>
                <div className="w-full h-px bg-gray-800" />
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">program</span>
                  <span className="text-red-400">Cloud Security Engineering</span>
                </div>
                <div className="w-full h-px bg-gray-800" />
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">issued</span>
                  <span className="text-gray-300">
                    {new Date(cert.issued_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="w-full h-px bg-gray-800" />
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">cert id</span>
                  <span className="text-gray-400 text-xs">{cert.cert_id}</span>
                </div>
                <div className="w-full h-px bg-gray-800" />
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">status</span>
                  <span className="text-green-400">✓ valid</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-400 text-xs font-mono transition-colors"
          >
            securecloudX — cloud security learning platform
          </Link>
        </div>
      </div>
    </div>
  );
}
