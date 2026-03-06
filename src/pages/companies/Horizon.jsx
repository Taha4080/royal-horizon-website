import { useEffect, useState } from "react";
import "./Company.css";
import "./Horizon.css";
import { useReveal } from "../../useReveal"; // ✅ عدّل المسار حسب مكان الملف عندك

/* =========================
   DATA
========================= */
const PRODUCTS = [
  {
    name: "Thimar",
    type: "Long Grain Basmati Rice",
    img: "/assets/img/products/p1.jpg",
    desc: "Premium long grain basmati rice, known for its aroma and fluffy texture—ideal for daily cooking and bulk supply.",
    origin: "India/Pakistan",
    pack: "5kg / 10kg",
  },
  {
    name: "Three Princesses",
    type: "Egyptian Grain Rice",
    img: "/assets/img/products/p2.jpg",
    desc: "Premium long grain basmati rice, known for its aroma and fluffy texture—ideal for daily cooking and bulk supply.",
    origin: "Egypt",
    pack: "5kg",
  },
  {
    name: "Abu Bint",
    type: "American Rice",
    img: "/assets/img/products/p3.jpg",
    desc: "Premium long grain basmati rice, known for its aroma and fluffy texture—ideal for daily cooking and bulk supply.",
    origin: "USA",
    pack: "5kg / 10kg",
  },
  {
    name: "Al Bassam",
    type: "Long Grain Steam Rice",
    img: "/assets/img/products/p4.jpg",
    desc: "Premium long grain basmati rice, known for its aroma and fluffy texture—ideal for daily cooking and bulk supply.",
    origin: "India",
    pack: "5kg / 10kg",
  },
  {
    name: "Hayyak",
    type: "Long Grain Steam Rice",
    img: "/assets/img/products/p5.jpg",
    desc: "Premium long grain basmati rice, known for its aroma and fluffy texture—ideal for daily cooking and bulk supply.",
    origin: "India",
    pack: "5kg / 10kg",
  },
  {
    name: "Melyaa",
    type: "Basmati Rice",
    img: "/assets/img/products/p7.jpg",
    desc: "Premium long grain basmati rice, known for its aroma and fluffy texture—ideal for daily cooking and bulk supply.",
    origin: "India/Pakistan",
    pack: "5kg",
  },
  {
    name: "Sanapl Alwatan",
    type: "Long Grain Steam Rice",
    img: "/assets/img/products/p6.jpg",
    desc: "Premium long grain basmati rice, known for its aroma and fluffy texture—ideal for daily cooking and bulk supply.",
    origin: "India",
    pack: "5kg / 10kg",
  },
  {
    name: "Sanapl Alwatan2",
    type: "Long Grain Steam Rice",
    img: "/assets/img/products/p8.jpg",
    desc: "Premium long grain basmati rice, known for its aroma and fluffy texture—ideal for daily cooking and bulk supply.",
    origin: "India",
    pack: "5kg",
  },
  {
    name: "Najm Suhai",
    type: "Basmati Rice",
    img: "/assets/img/products/p9.jpg",
    desc: "Premium long grain basmati rice, known for its aroma and fluffy texture—ideal for daily cooking and bulk supply.",
    origin: "India/Pakistan",
    pack: "5kg / 10kg",
  },
];

/* =========================
   PRODUCTS RING
========================= */
function ProductsRing({ products }) {
  const [index, setIndex] = useState(0);
  const total = products?.length || 0;

  // ✅ Reveal للسكشن
  const ring = useReveal({ threshold: 0.15, once: true });

  const loop = (i) => {
    if (total === 0) return 0;
    return (i + total) % total;
  };

  useEffect(() => {
    if (total <= 1) return;

    const timer = setInterval(() => {
      setIndex((i) => loop(i + 1));
    }, 2000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  if (!products || total === 0) return null;

  return (
    <section
      ref={ring.ref}
      className={`co-sec co-sec--alt reveal ${ring.visible ? "is-visible" : ""}`}
    >
      <div className="container">
        <div className="co-head">
          <h2 className="co-h2 co-h2--light">Our Products</h2>
          <p className="co-sub co-sub--light">
            Premium rice brands delivered with consistent quality and reliable supply.
          </p>
        </div>

        <div className="hz-ring">
          {products.map((p, i) => {
            let pos = "far";
            if (i === index) pos = "active";
            else if (i === loop(index - 1)) pos = "left";
            else if (i === loop(index + 1)) pos = "right";

            return (
              <div key={p.name} className={`hz-ring__item ${pos}`}>
                <div className="hz-ring__img">
                  <img
                    src={p.img}
                    alt={p.name}
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                </div>
                <div className="hz-ring__body">
                  <h4 className="hz-ring__name">{p.name}</h4>
                  <p className="hz-ring__type">{p.type}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================
   PRODUCTS GRID + MODAL
========================= */
function ProductsGrid({ products }) {
  const [selected, setSelected] = useState(null);

  // ✅ Reveal للسكشن
  const grid = useReveal({ threshold: 0.15, once: true });

  // إغلاق بالـ ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    if (selected) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  if (!products?.length) return null;

  const close = () => setSelected(null);

  return (
    <>
      <section
        ref={grid.ref}
        className={`co-sec reveal ${grid.visible ? "is-visible" : ""}`}
      >
        <div className="container">
          <div className="co-head">
            <h2 className="co-h2">All Products</h2>
            <p className="co-sub">
              Explore our full range of premium rice brands and product lines.
            </p>
          </div>

          <div className="prod-grid">
            {products.map((p) => (
              <article
                key={p.name}
                className="prod-card"
                role="button"
                tabIndex={0}
                onClick={() => setSelected(p)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setSelected(p);
                }}
              >
                <div className="prod-card__img">
                  <img src={p.img} alt={p.name} />
                </div>

                <div className="prod-card__body">
                  <h4 className="prod-card__name">{p.name}</h4>
                  <p className="prod-card__type">{p.type}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Modal ===== */}
      {selected && (
        <div className="prod-modal" onClick={close}>
          <div
            className="prod-modal__content prod-modal__content--split"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.name} details`}
          >
            <button
              className="prod-modal__close"
              onClick={close}
              aria-label="Close"
              type="button"
            >
              ✕
            </button>

            {/* LEFT: Image */}
            <div className="prod-modal__left">
              <img src={selected.img} alt={selected.name} />
            </div>

            {/* RIGHT: Details */}
            <div className="prod-modal__right">
              <h3 className="prod-modal__title">{selected.name}</h3>
              <p className="prod-modal__sub">{selected.type}</p>

              <div className="prod-modal__meta">
                {selected.origin && (
                  <span className="prod-modal__pill">Origin: {selected.origin}</span>
                )}
                {selected.pack && (
                  <span className="prod-modal__pill">Pack: {selected.pack}</span>
                )}
              </div>

              {selected.desc && <p className="prod-modal__desc">{selected.desc}</p>}

              {!!selected.features?.length && (
                <ul className="prod-modal__list">
                  {selected.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* =========================
   PAGE
========================= */
export default function Horizon() {
  // ✅ Reveal لكل سكشن بالصفحة
  const hero = useReveal({ threshold: 0.15, once: true });
  const about = useReveal({ threshold: 0.15, once: true });
  const cta = useReveal({ threshold: 0.15, once: true });

  return (
    <main className="co-page">
      {/* ===== HERO ===== */}
      <section
        ref={hero.ref}
        className={`hz-hero reveal ${hero.visible ? "is-visible" : ""}`}
      >
        <div
          className="hz-hero__bg"
          style={{
            backgroundImage: "url(/assets/img/companies/Royalhorizon-hero3.png)",
          }}
        />
        <div className="hz-hero__overlay" />

        <div className="container hz-hero__content">
          <div className="hz-hero__badge">Royal Horizon Holding</div>

          <h1 className="hz-hero__title">Royal Horizon General Trading L.L.C.</h1>

          <p className="hz-hero__desc">
            Wholesale distribution and trusted supply of premium consumer goods across
            the UAE—built on quality, reliability, and long-term partnerships.
          </p>

          <div className="hz-hero__actions">
            <a className="co-btn" href="/companies">
              Back to Companies
            </a>
            <a className="co-btn co-btn--ghost" href="/contact">
              Contact Now
            </a>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section
        ref={about.ref}
        className={`co-sec reveal ${about.visible ? "is-visible" : ""}`}
      >
        <div className="container co-split">
          <div>
            <img className="logo-overseas" src="/assets/img/companies/logo-RH.jpg" alt="logo" />
            <h2 className="co-h2">About the Company</h2>

            <p className="co-p">
              We are specialized in wholesale and distribution of quality rice and FMCG
              products in the UAE, serving government entities and private sector
              partners with consistent quality standards.
            </p>

            <p className="co-p">
              Our portfolio includes premium rice brands and reliable supply operations
              designed for long-term performance and customer satisfaction.
            </p>

            <div className="co-highlights">
              <div className="co-chip">Wholesale & Distribution</div>
              <div className="co-chip">Quality Standards</div>
              <div className="co-chip">UAE Market</div>
              <div className="co-chip">Trusted Partners</div>
            </div>
          </div>

          <div className="hz-media">
            <img
              src="/assets/img/companies/Royalhorizon-hero5.png"
              alt="About Royal Horizon General Trading"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <ProductsRing products={PRODUCTS} />
      <ProductsGrid products={PRODUCTS} />

      {/* ===== CTA ===== */}
      <section
        ref={cta.ref}
        className={`about-cta reveal ${cta.visible ? "is-visible" : ""}`}
      >
        <div className="container about-cta__inner">
          <div>
            <h2 className="about-cta__title">Want to work with us?</h2>
            <p className="about-cta__text">
              Reach out to our team to explore partnerships, wholesale opportunities,
              or retail collaborations.
            </p>
          </div>

          <a className="about-cta__btn" href="/contact">
            Contact Now
          </a>
        </div>
      </section>
    </main>
  );
}