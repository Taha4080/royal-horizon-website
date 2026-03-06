import { useEffect, useRef } from "react";

/**
 * Injects an HTML fragment.
 *
 * Note: this keeps the original template HTML to speed up the React migration.
 * Some jQuery plugins may only initialize on full page load; if you notice
 * a specific widget not working after navigation, you can trigger its init
 * inside the useEffect below.
 */
export function HtmlPage({ html }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Scroll to top on navigation
    window.scrollTo(0, 0);

    // If the template's JS exposes an init function, you can call it here.
    // Example (if needed): window?.initTemplate?.();
  }, [html]);

  return (
    <div
      ref={containerRef}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
