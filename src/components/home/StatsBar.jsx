import { useEffect, useMemo, useRef, useState } from "react";
import {
  FaBoxOpen,
  FaUsers,
  FaCalendarAlt,
  FaTags,
  FaBuilding,
  FaProjectDiagram,
} from "react-icons/fa";

import "./StatsBar.css";

/* ✅ تنسيق أرقام مثل 15,000 */
function formatNumber(n) {
  return new Intl.NumberFormat("en-US").format(Math.round(n));
}

/* ✅ Hook: عداد من 0 إلى target (يعيد التشغيل كل ما startKey يتغير) */
function useCountUp(target, startKey, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const to = Number(target);
    if (!Number.isFinite(to)) return;

    setValue(0);

    const start = performance.now();
    let rafId;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setValue(to * eased);
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [target, startKey, duration]);

  return value;
}

function StatItem({ value, label, startKey, icon, visible, index }) {
  const counted = useCountUp(value, startKey, 1300);

  return (
    <div
      className={`stats-item ${visible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="start-icon">{icon}</div>
      <div className="stats-value">{formatNumber(counted)}</div>
      <div className="stats-label">{label}</div>
    </div>
  );
}

export default function StatsBar() {
  const stats = useMemo(
    () => [
      { value: 15000, label: "Products", icon: <FaBoxOpen /> },
      { value: 10000, label: "Customers", icon: <FaUsers /> },
      { value: 17, label: "Years Experience", icon: <FaCalendarAlt /> },
      { value: 17, label: "Brands", icon: <FaTags /> },
      { value: 16, label: "Govt Supply Contracts", icon: <FaBuilding /> },
      { value: 100, label: "Projects Completed", icon: <FaProjectDiagram /> },
    ],
    []
  );

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [startKey, setStartKey] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setStartKey((k) => k + 1); // يعيد العد كل مرة
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.35 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  // ✅ ضع فيديوك هنا (لو في public):
  const videoSrc = "/assets/img/hero/pannar2.mp4";

  return (
    <section ref={sectionRef} className="stats-wrap">
      {/* Video Background */}
      <video
        className="stats-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Overlay dark for readability */}
      <div className="stats-overlay" />

      {/* Content */}
      <div className="container stats-content">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <StatItem
              key={s.label}
              value={s.value}
              label={s.label}
              icon={s.icon}
              startKey={startKey}
              visible={visible}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}