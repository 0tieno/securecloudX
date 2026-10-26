import { createContext, useContext, useEffect, useRef, useState } from "react";
import { supabase } from "../lib/supabase";
import { collectKeverdEvent } from "../lib/keverd";

const AuthContext = createContext(null);

const ACTION_MESSAGES = {
  soft_challenge:
    "Keverd requires an additional verification step. This app does not support challenges yet, so sign-in was stopped.",
  hard_challenge:
    "Keverd requires a stronger verification step. This app does not support challenges yet, so sign-in was stopped.",
  block: "Keverd blocked this sign-in for your security.",
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [signInPending, setSignInPending] = useState(false);
  const [signInError, setSignInError] = useState("");
  const signInInProgress = useRef(false);

  useEffect(() => {
    // Load the initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth state changes (login, logout, token refresh)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      setUser(session?.user ?? null);

      // On first sign-in, create an email_preferences row (ignored if already exists)
      if (event === "SIGNED_IN" && session?.user?.id) {
        supabase
          .from("email_preferences")
          .upsert({ user_id: session.user.id }, { onConflict: "user_id", ignoreDuplicates: true })
          .then(() => {});
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async () => {
    if (signInInProgress.current) {
      return { error: new Error("A sign-in security check is already in progress.") };
    }

    signInInProgress.current = true;
    setSignInPending(true);
    setSignInError("");

    try {
      let eventId;
      try {
        eventId = await collectKeverdEvent();
      } catch (error) {
        console.error("Unable to collect Keverd device data:", error);
        throw new Error("We couldn't complete the device security check. Please try again.");
      }

      const { data, error: verificationError } = await supabase.functions.invoke(
        "keverd-verify",
        { body: { eventId } }
      );

      if (verificationError) {
        console.error("Keverd verification request failed:", verificationError);
        throw new Error("We couldn't verify this sign-in. Please try again later.");
      }

      if (data?.action !== "allow") {
        throw new Error(
          ACTION_MESSAGES[data?.action] ??
            "This sign-in could not be verified. Please try again later."
        );
      }

      const result = await supabase.auth.signInWithOAuth({
        provider: "github",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (result.error) {
        throw result.error;
      }

      return result;
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "We couldn't start sign-in. Please try again.";
      setSignInError(message);
      return { error };
    } finally {
      signInInProgress.current = false;
      setSignInPending(false);
    }
  };

  const signOut = () => supabase.auth.signOut();

  return (
    <AuthContext.Provider
      value={{ user, session, loading, signIn, signOut, signInPending }}
    >
      {children}
      {signInError && (
        <div
          role="alert"
          className="fixed bottom-6 left-1/2 z-[60] flex w-[min(28rem,calc(100vw-2rem))] -translate-x-1/2 items-start justify-between gap-4 border border-red-700 bg-gray-950 px-4 py-3 font-mono text-sm text-red-200 shadow-2xl"
        >
          <span>{signInError}</span>
          <button
            type="button"
            onClick={() => setSignInError("")}
            className="shrink-0 text-red-300 hover:text-white"
            aria-label="Dismiss sign-in message"
          >
            Dismiss
          </button>
        </div>
      )}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
  return ctx;
};
