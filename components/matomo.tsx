"use client";

import { useEffect } from "react";

export default function Matomo() {
  useEffect(() => {
    function load() {
      if ((window as any)._paq) return;
      const _paq = ((window as any)._paq = (window as any)._paq || []);
      _paq.push(["trackPageView"]);
      _paq.push(["enableLinkTracking"]);
      const u = "https://counter.ixan.org/";
      _paq.push(["setTrackerUrl", u + "matomo.php"]);
      _paq.push(["setSiteId", "102"]);
      const d = document,
        g = d.createElement("script"),
        s = d.getElementsByTagName("script")[0];
      g.async = true;
      g.src = u + "matomo.js";
      s.parentNode?.insertBefore(g, s);
    }

    if (localStorage.getItem("chi_cookie_consent") === "accepted") {
      load();
    }
    window.addEventListener("chi-cookie-consent", load);
    return () => window.removeEventListener("chi-cookie-consent", load);
  }, []);

  return null;
}
