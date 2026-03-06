import { useMemo, useState, useRef, useEffect } from "react";
import heroImg from "/assets/img/gallery/panner.jpg";
import "./Gallery.css";

/* =========================
   DATA
========================= */
const GALLERY_DATA = [
  { id: 1, tag: "Corporate Office", subTag: "Head Office", type: "photo", src: "/assets/img/gallery/cop1.jpeg" },
  { id: 2, tag: "Corporate Office", subTag: "Head Office", type: "photo", src: "/assets/img/gallery/cop2.jpeg" },
  { id: 3, tag: "Corporate Office", subTag: "Branches", type: "photo", src: "/assets/img/gallery/cop3.jpeg" },
  { id: 4, tag: "Corporate Office", subTag: "Branches", type: "photo", src: "/assets/img/gallery/cop4.jpeg" },
  { id: 5, tag: "Corporate Office", subTag: "Branches", type: "photo", src: "/assets/img/gallery/cop5.jpeg" },
  { id: 6, tag: "Corporate Office", subTag: "Branches", type: "photo", src: "/assets/img/gallery/cop6.jpeg" },
  { id: 7, tag: "Corporate Office", type: "photo", subTag: "Branches", src: "/assets/img/gallery/cop7.jpeg", },
  { id: 8, tag: "Corporate Office", type: "photo", subTag: "Branches", src: "/assets/img/gallery/cop8.jpeg", },
  { id: 9, tag: "Corporate Office", type: "photo", subTag: "2026", src: "/assets/img/gallery/cop9.jpeg", },
  { id: 10, tag: "Horizon Lead", subTag: "Warehouses", type: "photo", src: "/assets/img/gallery/gal1.jpg" },
  { id: 11, tag: "Horizon Lead", subTag: "Distribution", type: "photo", src: "/assets/img/gallery/gal2.jpg" },
  { id: 12, tag: "Horizon Lead", subTag: "Retail", type: "photo", src: "/assets/img/gallery/gal3.jpg" },
  { id: 14, tag: "Horizon Lead", subTag: "Warehouses", type: "photo", src: "/assets/img/gallery/gal5.jpg", },
  { id: 15, tag: "Horizon Lead", subTag: "Distribution", type: "photo", src: "/assets/img/gallery/gal6.jpg", },
  { id: 16, tag: "Horizon Lead", type: "photo", src: "/assets/img/gallery/gal8.jpg", },
  { id: 17, tag: "Horizon Lead",subTag: "Warehouses", type: "photo", src: "/assets/img/gallery/gal9.jpg", },
  { id: 18, tag: "Horizon Lead", subTag: "Distribution", type: "photo", src: "/assets/img/gallery/gal11.jpg", },
  { id: 19, tag: "Horizon Lead", type: "photo", src: "/assets/img/gallery/gal12.jpg", },
  { id: 20, tag: "Horizon Lead",subTag: "Warehouses", type: "photo", src: "/assets/img/gallery/gal13.jpg", },
  { id: 21, tag: "Videos", subTag: "2026", type: "video", src: "/assets/img/gallery/video/Ajman.mp4" },
  { id: 22, tag: "Videos", subTag: "2025", type: "video", src: "/assets/img/gallery/video/Fazaa_alain.mp4" },
  { id: 23, tag: "Videos", subTag: "2024", type: "video", src: "/assets/img/gallery/video/foodEx.mp4" },
{ id: 24, tag: "Videos", subTag: "2023", type: "video", src: "/assets/img/gallery/video/Jood.mp4" },
{ id: 25, tag: "Videos", subTag: "2026", type: "video", src: "/assets/img/gallery/video/Najm_AD.mp4", },
{ id: 26, tag: "Videos", subTag: "2026" , type: "video", src: "/assets/img/gallery/video/open2.mp4", },
{ id: 27, tag: "Videos",subTag: "2025", type: "video", src: "/assets/img/gallery/video/open2.mp4", },
{ id: 28, tag: "Videos",subTag: "2025", type: "video", src: "/assets/img/gallery/video/open3.mp4", },
{ id: 29, tag: "Videos", subTag: "2024", type: "video", src: "/assets/img/gallery/video/OPENING_VIDEO.mp4", },

];

/* =========================
   FILTERS
========================= */
const FILTERS = ["All", "Corporate Office", "Horizon Lead", "Videos"];

const SUB_FILTERS = {
  "Corporate Office": ["All", "Head Office", "Branches"],
  "Horizon Lead": ["All", "Warehouses", "Distribution", "Retail"],
  "Videos": ["All", "2026", "2025", "2024", "2023"],
};

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [activeSub, setActiveSub] = useState("All");
  const [index, setIndex] = useState(0);

  /* =========================
     FILTER LOGIC
  ========================= */
  const filtered = useMemo(() => {
    let list =
      active === "All"
        ? GALLERY_DATA
        : GALLERY_DATA.filter((x) => x.tag === active);

    if (active !== "All" && activeSub !== "All") {
      list = list.filter((x) => x.subTag === activeSub);
    }

    return list.length ? list : GALLERY_DATA;
  }, [active, activeSub]);

  const prev = () => setIndex((v) => (v - 1 + filtered.length) % filtered.length);
  const next = () => setIndex((v) => (v + 1) % filtered.length);

  const getAt = (offset) =>
    filtered[(index + offset + filtered.length) % filtered.length];

  const cards = [
    { pos: "farLeft", item: getAt(-2) },
    { pos: "left", item: getAt(-1) },
    { pos: "center", item: getAt(0) },
    { pos: "right", item: getAt(1) },
    { pos: "farRight", item: getAt(2) },
  ];

  /* =========================
     VIDEO CONTROL
  ========================= */
  const centerVideoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const v = centerVideoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
    setIsPlaying(false);
  }, [index, active, activeSub]);

  const togglePlay = async (e) => {
    e.stopPropagation();
    const v = centerVideoRef.current;
    if (!v) return;

    if (v.paused) {
      await v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };
  const stageRef = useRef(null);

  return (
    <main className="gal-page">
      {/* ===== HERO ===== */}
      <section className="ct-hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="container">
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="gal-section">
        <div className="container">
          <h2 className="gal-title">GALLERY</h2>

          {/* Primary Filters */}
          <div className="gal-filters">
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`gal-chip ${active === f ? "is-active" : ""}`}
                onClick={() => {
                  setActive(f);
                  setActiveSub("All");
                  setIndex(0);
                }}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Sub Filters */}
          {SUB_FILTERS[active] && (
            <div className="gal-filters gal-filters--sub">
              {SUB_FILTERS[active].map((sf) => (
                <button
                  key={sf}
                  className={`gal-chip ${activeSub === sf ? "is-active" : ""}`}
                  onClick={() => {
                    setActiveSub(sf);
                    setIndex(0);
                  }}
                >
                  {sf}
                </button>
              ))}
            </div>
          )}

          {/* Carousel */}
          <div className="gal-stage" ref={stageRef}>
            <button className="gal-nav gal-nav--left" onClick={prev}>‹</button>

            <div className="gal-cards">
              {cards.map(({ pos, item }) => (
                <article
                  key={`${pos}-${item.id}`}
                  className={`gal-card gal-card--${pos}`}
                  onClick={() =>
                    setIndex(filtered.findIndex((x) => x.id === item.id))
                  }
                >
                  {item.type === "video" ? (
                    <video
                      ref={pos === "center" ? centerVideoRef : null}
                      className="gal-card__img"
                      src={item.src}
                      playsInline
                      preload="metadata"
                      controls={pos === "center"}
                    />
                  ) : (
                    <img src={item.src} className="gal-card__img" alt="" />
                  )}

                  <div className="gal-card__overlay" />
                  <div className="gal-card__meta">
                    <div className="gal-card__tag">{item.subTag}</div>
                  </div>

                  {/* {pos === "center" && item.type === "video" && (
                    <button className="gal-play" onClick={togglePlay}>
                      {isPlaying ? "❚❚" : "▶"}
                    </button>
                  )} */}
                </article>
              ))}
            </div>

            <button className="gal-nav gal-nav--right" onClick={next}>›</button>
          </div>
          {/* Images Grid */}
<div className="gal-grid">
  {filtered.map((item, i) => (
    <div
      key={item.id}
      className={`gal-grid-item ${i === index ? "is-active" : ""}`}
      onClick={() => {
  setIndex(i);

  stageRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}}
    >
      {item.type === "video" ? (
        <video
          src={item.src}
          className="gal-grid-img"
          muted
          playsInline
          preload="metadata"
        />
      ) : (
        <img
          src={item.src}
          className="gal-grid-img"
          alt=""
        />
      )}
    </div>
  ))}
</div>


          
        </div>
      </section>
    </main>
  );
}
