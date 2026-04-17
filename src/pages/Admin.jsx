import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Users, RefreshCw, ShieldAlert } from "lucide-react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../contexts/AuthContext";

const ADMIN_UID = "c3bd4833-fa78-41ff-9bc9-de30c59115e9";
const TOTAL_STEPS = 61; // 7+7+20+5+7+7+8

export default function Admin() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isAdmin = user?.id === ADMIN_UID;

  useEffect(() => {
    if (!authLoading && !isAdmin) {
      navigate("/home", { replace: true });
    }
  }, [authLoading, isAdmin, navigate]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    const { data, error } = await supabase.rpc("get_admin_dashboard");
    if (error) {
      setError(error.message);
    } else {
      setRows(data ?? []);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (isAdmin) fetchData();
  }, [isAdmin]);

  if (authLoading || (!isAdmin && !authLoading)) return null;

  return (
    <div className="min-h-screen bg-gray-900 font-mono pb-20">
      <div className="w-full max-w-5xl mx-auto px-4 py-10">

        {/* Header */}
        <div className="mb-8 bg-gray-800 border border-gray-700 p-4">
          <div className="flex items-center space-x-2 text-gray-500 text-xs mb-2">
            <div className="w-2.5 h-2.5 bg-red-500 rounded-full" />
            <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full" />
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
            <span className="ml-2">securecloudX — admin panel</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-400 text-sm">
                root@securecloudX:~$ <span className="text-gray-300">./admin --dashboard</span>
              </p>
              <p className="text-gray-500 text-xs mt-1">
                → logged in as <span className="text-red-400">{user?.user_metadata?.user_name ?? user?.email}</span>
              </p>
            </div>
            <button
              onClick={fetchData}
              className="flex items-center gap-2 text-xs text-gray-400 hover:text-gray-200 border border-gray-600 hover:border-gray-400 px-3 py-1.5 transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
              refresh
            </button>
          </div>
        </div>

        {/* Stats bar */}
        {!loading && !error && (
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-800 border border-gray-700 p-4">
              <p className="text-xs text-gray-500 mb-1">total users</p>
              <p className="text-2xl text-gray-200">{rows.length}</p>
            </div>
            <div className="bg-gray-800 border border-gray-700 p-4">
              <p className="text-xs text-gray-500 mb-1">active (signed in)</p>
              <p className="text-2xl text-gray-200">
                {rows.filter((r) => r.last_sign_in_at).length}
              </p>
            </div>
            <div className="bg-gray-800 border border-gray-700 p-4">
              <p className="text-xs text-gray-500 mb-1">avg steps done</p>
              <p className="text-2xl text-gray-200">
                {rows.length
                  ? Math.round(
                      rows.reduce((a, r) => a + Number(r.total_steps), 0) / rows.length
                    )
                  : 0}
                <span className="text-sm text-gray-600">/{TOTAL_STEPS}</span>
              </p>
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="flex items-center gap-3 bg-red-900/30 border border-red-500/40 p-4 text-red-400 text-sm mb-6">
            <ShieldAlert className="w-4 h-4 shrink-0" />
            {error}
          </div>
        )}

        {/* Table */}
        <div className="bg-gray-800 border border-gray-700">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-700 text-gray-500 text-xs">
            <Users className="w-3.5 h-3.5" />
            <span>users — {rows.length} total</span>
          </div>

          {loading ? (
            <div className="p-8 text-center text-gray-500 text-sm">
              <span className="animate-pulse">fetching data...</span>
            </div>
          ) : rows.length === 0 ? (
            <div className="p-8 text-center text-gray-600 text-sm">no users found</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-500 text-xs border-b border-gray-700">
                    <th className="text-left px-4 py-2 font-normal">#</th>
                    <th className="text-left px-4 py-2 font-normal">user</th>
                    <th className="text-left px-4 py-2 font-normal">email</th>
                    <th className="text-left px-4 py-2 font-normal">signed up</th>
                    <th className="text-left px-4 py-2 font-normal">last login</th>
                    <th className="text-right px-4 py-2 font-normal">phases done</th>
                    <th className="text-right px-4 py-2 font-normal">steps done / {TOTAL_STEPS}</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr
                      key={row.user_id}
                      className="border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors"
                    >
                      <td className="px-4 py-3 text-gray-600">{i + 1}</td>
                      <td className="px-4 py-3 text-gray-300">
                        {row.username ?? <span className="text-gray-600">—</span>}
                      </td>
                      <td className="px-4 py-3 text-gray-400 text-xs">{row.email}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs">
                        {new Date(row.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3 text-gray-500 text-xs">
                        {row.last_sign_in_at
                          ? new Date(row.last_sign_in_at).toLocaleDateString()
                          : <span className="text-gray-600">—</span>}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <span className={Number(row.phases_completed) > 0 ? "text-green-400" : "text-gray-600"}>
                          {row.phases_completed}<span className="text-gray-600">/7</span>
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <span className={Number(row.total_steps) > 0 ? "text-red-400" : "text-gray-600"}>
                          {row.total_steps}<span className="text-gray-600">/{TOTAL_STEPS}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
