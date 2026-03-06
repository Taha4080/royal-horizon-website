import { useEffect, useMemo, useRef, useState } from "react";
import "./OurValue.css";

const VALUE_LOGOS = [
  // ضع 30 صورة هنا (عدّل المسارات حسب مشروعك)
  "/assets/img/ourvalue/1.jpg",
  "/assets/img/ourvalue/2.jpg",
  "/assets/img/ourvalue/3.jpg",
  "/assets/img/ourvalue/4.png",
  "/assets/img/ourvalue/5.png",
  "/assets/img/ourvalue/6.png",
  "/assets/img/ourvalue/7.png",
  "/assets/img/ourvalue/8.png",
  "/assets/img/ourvalue/9.png",
  "/assets/img/ourvalue/10.png",
  "/assets/img/ourvalue/11.png",
  "/assets/img/ourvalue/12.png",
  "/assets/img/ourvalue/13.png",
  "/assets/img/ourvalue/14.png",
  "/assets/img/ourvalue/15.png",
  "/assets/img/ourvalue/16.png",
  "/assets/img/ourvalue/17.png",
  "/assets/img/ourvalue/18.png",
  "/assets/img/ourvalue/19.png",
  "/assets/img/ourvalue/20.png",
  "/assets/img/ourvalue/21.png",
  "/assets/img/ourvalue/22.png",
  "/assets/img/ourvalue/23.png",
  "/assets/img/ourvalue/24.png",
  "/assets/img/ourvalue/25.png",
  "/assets/img/ourvalue/26.png",
  "/assets/img/ourvalue/27.png",
  "/assets/img/ourvalue/28.png",
  "/assets/img/ourvalue/29.png",
  "/assets/img/ourvalue/30.png",
];

// كل “صفحة” = 10 صور (صفين × 5)
const PAGE_SIZE = 10;

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function OurValue() {
  const trackRef = useRef(null);
  const timerRef = useRef(null);

  const pages = useMemo(() => chunk(VALUE_LOGOS, PAGE_SIZE), []);
  // نكرر الصفحات مرتين عشان يعمل Loop بصري سلس
  const loopPages = useMemo(() => [...pages, ...pages], [pages]);

  const [page, setPage] = useState(0);
  const [isHover, setIsHover] = useState(false);

  const total = pages.length; // العدد الحقيقي
  const pageWidthPercent = 100;

  const go = (next) => {
    setPage(next);
  };

  // Auto slide كل 2.5 ثانية (تقدر تغير)
  useEffect(() => {
    if (isHover) return;
    timerRef.current = setInterval(() => {
      setPage((p) => p + 1);
    }, 2500);

    return () => clearInterval(timerRef.current);
  }, [isHover]);

  // Loop logic: إذا تجاوزنا pages.length نرجع بصمت
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // لو وصلنا لنقطة نهاية النسخة الأولى
    if (page === total) {
      // حرّك للنسخة الثانية (نفس المكان) بدون أنيميشن ثم أكمل
      track.style.transition = "none";
      track.style.transform = `translateX(-${total * pageWidthPercent}%)`;

      // force reflow
      track.offsetHeight;

      // رجع بسرعة لأول صفحة (نفسها بصرياً) ثم فعّل transition
      requestAnimationFrame(() => {
        track.style.transition = "transform 700ms cubic-bezier(.2,.9,.2,1)";
        setPage(0);
      });
    }
  }, [page, total]);

  // Apply transform
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transform = `translateX(-${page * pageWidthPercent}%)`;
  }, [page]);

  return (
    <section className="ov-wrap">
      <div className="container">
        <div className="ov-head">
          <h2 className="ov-title">Our Valued Clients</h2>
          <p className="ov-desc">
            With a strong network of over 500 loyal customers across multiple
            channels — including Institutional, Key Accounts, Modern Trade,
            Traditional Trade, and HORECA — Royal Horizon Holding has
            established enduring partnerships built on trust, reliability, and
            service excellence. Our esteemed clientele includes leading
            government institutions, cooperative societies, and major retail
            groups across the UAE, reflecting our proven capability to deliver
            consistent quality and value to every sector we serve.
          </p>
        </div>

        <div
          className="ov-timeline"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {/* خط مثل التايم لاين */}
          <div className="ov-line" />

          <button
            className="ov-nav ov-nav--left"
            onClick={() => go(Math.max(page - 1, 0))}
            aria-label="Prev"
            type="button"
          >
            ‹
          </button>

          <div className="ov-viewport">
            <div className="ov-track" ref={trackRef}>
              {loopPages.map((logoPage, idx) => (
                <div className="ov-page" key={idx}>
                  {logoPage.map((src, i) => (
                    <div className="ov-card" key={`${idx}-${i}`}>
                      {/* <div className="ov-dot" /> */}
                      <div className="ov-logo">
                        <img
                          src={src}
                          alt={`Partner ${idx}-${i}`}
                          loading="lazy"
                          onError={(e) =>
                            (e.currentTarget.style.display = "none")
                          }
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <button
            className="ov-nav ov-nav--right"
            onClick={() => go(page + 1)}
            aria-label="Next"
            type="button"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
