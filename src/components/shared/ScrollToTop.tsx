import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component that scrolls to the top of the page when navigating between routes
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash in the URL (anchor link), scroll to that element
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }, 100);
    } else {
      // Otherwise scroll to top of the page immediately when route changes
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' // Use instant instead of smooth for immediate scrolling
      });
    }
  }, [pathname, hash]);

  return null; // This component doesn't render anything
}
