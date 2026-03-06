import { useEffect, useMemo, useRef, useState } from "react";
import "./BusinessSectors.css";

export default function BusinessSectors() {
  const sections = useMemo(
    () => [
      {
        key: "retail",
        title: "RETAIL",
        subtitle: "Retail Stores",
        desc:
          " retail operations, branches, supply strength, and customer service excellence.",
        image: "/assets/img/hero/related.jpg",
      },
      {
        key: "wholesale",
        title: "WHOLESALE & CONTRACTS",
        subtitle: "FMCG Distribution",
        desc:
          "Write your wholesale and contracts description here. Explain your government supply, logistics power, and large-scale FMCG distribution.",
          image: "/assets/img/hero/contract.jpg",
      },
      {
        key: "ecommerce",
        title: "E-COMMERCE",
        subtitle: "Online Platform",
        desc:
          "Write your e-commerce description here. Highlight your digital transformation, delivery systems, and scalable online platform.",
        image: "/assets/img/hero/Ecom.jpg",
      },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    const elements = refs.current.filter(Boolean);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActive(index);
          }
        });
      },
      {
        root: null,
        threshold: 0.6, // يتغير لما يدخل منتصف الشاشة تقريبًا
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const current = sections[active];

  return (
    <section className="bs-story">
      <div className="container">
        <div className="bs-layout">

          {/* LEFT SIDE (SCROLL TEXT) */}
          <div className="bs-left">
            {sections.map((section, index) => (
              <div
                key={section.key}
                className={`bs-step ${active === index ? "is-active" : ""}`}
                ref={(el) => (refs.current[index] = el)}
                data-index={index}
              >
                <div className="bs-kicker">
                  0{index + 1}. Business Sector
                </div>

                <h2 className="bs-title">{section.title}</h2>

                <div className="bs-subtitle">
                  {section.subtitle}
                </div>

                <p className="bs-description">
                  {section.desc}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE (STICKY IMAGE) */}
          <div className="bs-right">
            <div className="bs-sticky">
              <div className="bs-image-wrapper">
                <img
                  key={current.image}
                  src={current.image}
                  alt={current.title}
                  className="bs-image"
                />

                <div className="bs-overlay">
                  {/* <h3>{current.title}</h3>
                  <span>{current.subtitle}</span> */}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}