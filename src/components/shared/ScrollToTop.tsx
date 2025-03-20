
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component that scrolls to the top of the page when navigating between routes
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small timeout to ensure navigation completes first
    setTimeout(() => {
      // Scroll to top of the page when route changes
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  }, [pathname]);

  return null; // This component doesn't render anything
}
