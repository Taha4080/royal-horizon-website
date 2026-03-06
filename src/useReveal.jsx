import { useEffect, useRef, useState } from "react";

export function useReveal(options = { threshold: 0.2, once: true }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (options.once) observer.disconnect();
        } else if (!options.once) {
          setVisible(false);
        }
      },
      { threshold: options.threshold ?? 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold, options.once]);

  return { ref, visible };
}
