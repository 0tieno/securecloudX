import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function RouteScroll() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "instant" });
    } else if (navigationType !== "POP") {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash, navigationType]);

  return null;
}
