import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Agar link mein #quote jaisa hash hai, to us section tak scroll karo
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    // Warna naye page par hamesha upar se shuru karo
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;