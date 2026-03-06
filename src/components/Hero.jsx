import { useEffect, useMemo, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  const slides = useMemo(
    () => [
      {
        id: 1,
        img: "/assets/img/hero/slide5.png",
        kicker: "ROYAL HORIZON HOLDING",
        title: "QUALITY CONSUMER GOODS",
        subtitle: "From trustworthy hands, built on long-term partnerships.",
      },
      {
        id: 2,
        img: "/assets/img/hero/slide8.png",
        kicker: "ROYAL HORIZON HOLDING",
        title: "QUALITY YOU CAN TRUST",
        subtitle:
          "Reliable supply, consistent standards, and customer-first service.",
      },
      {
        id: 3,
        img: "/assets/img/hero/slide9.png",
        kicker: "ROYAL HORIZON HOLDING",
        title: "WHOLESALE & RETAIL EXCELLENCE",
        subtitle:
          "Delivering value across FMCG and retail operations in the UAE.",
      },
    ],
    [],
  );

  // ✅ المرحلة الأولى: عرض الفيديو
  const [showVideo, setShowVideo] = useState(true);

  // ✅ السلايدر يبدأ بعد الفيديو
  const [active, setActive] = useState(0);

  // auto-play للصور (يشتغل فقط بعد انتهاء الفيديو)
  useEffect(() => {
    if (showVideo) return;
    const t = setInterval(
      () => setActive((i) => (i + 1) % slides.length),
      6000,
    );
    return () => clearInterval(t);
  }, [showVideo, slides.length]);

  const next = () => setActive((i) => (i + 1) % slides.length);
  const prev = () => setActive((i) => (i - 1 + slides.length) % slides.length);

  const slide = slides[active];
  const videoRef = useRef(null);

  const skipVideo = () => {
    // وقف الفيديو
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    // أظهر السلايدر
    setShowVideo(false);
  };
  const showwVideo = () => {
    if (videoRef.current) {
      videoRef.current.autoPlay();
      videoRef.current.currentTime = 1;
    }
    setShowVideo(true);
  };

  return (
    <section className="rh-heroX">
      <div
        className={`rh-heroX__shell ${showVideo ? "rh-heroX__shell--video" : ""}`}
      >
        {/* LEFT */}
        <div
          className={`rh-heroX__left ${showVideo ? "rh-heroX__left--video" : ""}`}
        >
          <div className="rh-heroX__imgWrap">
            {showVideo ? (
              <video
                ref={videoRef}
                className="rh-heroX__video"
                src="/assets/img/hero/panar-video.mp4"
                autoPlay
                muted
                playsInline
                preload="auto"
                onEnded={() => setShowVideo(false)}
              />
            ) : (
              <img
                className="rh-heroX__img"
                src={slide.img}
                alt={slide.title}
              />
            )}

            <div className="rh-heroX__imgOverlay" />
            <div className="rh-heroX__imgVignette" />

            {!showVideo && (
              <>
                <button
                  className="rh-heroX__arrow rh-heroX__arrow--left"
                  onClick={prev}
                  aria-label="Previous slide"
                >
                  ‹
                </button>
                <button
                  className="rh-heroX__arrow rh-heroX__arrow--right"
                  onClick={next}
                  aria-label="Next slide"
                >
                  ›
                </button>
              </>
            )}
          </div>
          {showVideo && (
            <button
              type="button"
              className="rh-heroX__skip"
              onClick={skipVideo}
              aria-label="Skip video"
            >
              Skip Video
            </button>
          )}
        </div>

        {/* RIGHT (يظهر فقط مع الصور) */}
        {!showVideo && (
          <div className="rh-heroX__right">
            <div className="rh-heroX__divider" />

            <div className="rh-heroX__content">
              <div key={slide.id} className="rh-heroX__card rh-anim">
                <div className="rh-heroX__kicker">{slide.kicker}</div>
                <h1 className="rh-heroX__title">{slide.title}</h1>
                <p className="rh-heroX__subtitle">{slide.subtitle}</p>

                <div className="rh-heroX__actions">
                  <Link to="/companies" className="rh-heroX__btn">
                    Explore Companies
                  </Link>
                  <Link
                    to="/about"
                    className="rh-heroX__btn rh-heroX__btn--ghost"
                  >
                    About Us
                  </Link>
                  
                    <button
                      type="button"
                      className="rh-heroX__btn rh-heroX__btn--ghost"
                      onClick={showwVideo}
                      aria-label="Show video"
                    >
                      Show Video
                    </button>
                  
                </div>

                <div className="rh-heroX__dots">
                  {slides.map((s, idx) => (
                    <button
                      key={s.id}
                      className={
                        idx === active ? "rh-dot rh-dot--active" : "rh-dot"
                      }
                      onClick={() => setActive(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="rh-heroX__glow" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
