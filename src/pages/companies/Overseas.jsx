import { useEffect, useState } from "react";
import "./Company.css";
import "./overseas.css";
import { useReveal } from "../../useReveal"; // ✅ عدّل المسار حسب مكان الملف عندك

/* =========================
   DATA (with details)
========================= */
const PRODUCTS = [
  {
    name: "Product 1",
    type: "Premium FMCG Item",
    img: "/assets/img/products-over/makrona1.jpg",
    // desc: "A premium FMCG selection designed for consistent quality and reliable supply across UAE distribution channels.",
    // features: ["Quality-controlled sourcing", "Wholesale-ready supply", "Reliable packaging & storage"],
    origin: "UAE / Import",
    pack: "Assorted Packs",
  },
  {
    name: "Product 2",
    type: "Trusted Quality Item",
    img: "/assets/img/products-over/trust food.jpg",
    // desc: "Trusted foodstuff product with stable quality and strong demand in retail and wholesale markets.",
    // features: ["Trusted quality", "Retail & wholesale fit", "Consistent availability"],
    origin: "UAE / Import",
    pack: "Assorted Packs",
  },
  {
    name: "Product 3",
    type: "Wholesale Supply",
    img: "/assets/img/products-over/بوني.jpg",
    // desc: "Selected wholesale supply item for bulk buyers with dependable distribution performance.",
    // features: ["Bulk supply", "Strong logistics support", "Suitable for contracts"],
    origin: "Import",
    pack: "Bulk",
  },
  {
    name: "Product 4",
    type: "Retail & Distribution",
    img: "/assets/img/products-over/تونا.jpg",
    // desc: "Retail-ready product with consistent taste and packaging, ideal for supermarkets and grocery distribution.",
    // features: ["Retail-ready packaging", "Consistent quality", "High market demand"],
    origin: "Import",
    pack: "Multiple Sizes",
  },
  {
    name: "Product 5",
    type: "Market-leading Brand",
    img: "/assets/img/products-over/حمص حب.jpg",
    // desc: "Market-leading brand item packed for freshness and shelf stability across UAE retailers.",
    // features: ["Shelf-stable", "Freshness maintained", "High repeat purchase"],
    origin: "Import",
    pack: "Multiple Sizes",
  },
  {
    name: "Product 6",
    type: "Fast Moving Goods",
    img: "/assets/img/products-over/حمص.jpg",
    // desc: "Fast-moving foodstuff item with strong demand and consistent restocking for wholesale customers.",
    // features: ["Fast-moving item", "Reliable restocking", "Wholesale friendly"],
    origin: "Import",
    pack: "Multiple Sizes",
  },
  {
    name: "Product 7",
    type: "Fast Moving Goods",
    img: "/assets/img/products-over/خلطات.jpg",
    // desc: "High turnover FMCG selection ideal for retail shelves and wholesale distribution.",
    // features: ["High turnover", "Retail & wholesale use", "Consistent supply"],
    origin: "Import",
    pack: "Assorted Packs",
  },
  {
    name: "Product 8",
    type: "Fast Moving Goods",
    img: "/assets/img/products-over/زتجبيل.jpg",
    // desc: "Popular FMCG product suitable for daily use and broad distribution channels.",
    // features: ["Popular item", "Daily use", "Stable logistics support"],
    origin: "Import",
    pack: "Multiple Sizes",
  },
  {
    name: "Product 9",
    type: "Fast Moving Goods",
    img: "/assets/img/products-over/سباغتي.jpg",
    // desc: "A fast-moving grocery item built for consistent availability and customer satisfaction.",
    // features: ["Consistent availability", "Retail-ready", "Great for wholesale orders"],
    origin: "Import",
    pack: "Multiple Sizes",
  },
  {
    name: "Product 10",
    type: "Fast Moving Goods",
    img: "/assets/img/products-over/سكر اوفر سيز 2.jpg",
    // desc: "High-demand grocery product with stable supply for UAE wholesale and retail channels.",
    // features: ["High demand", "Stable supply", "Wholesale & retail ready"],
    origin: "Import",
    pack: "Multiple Sizes",
  },
  {
    name: "Product 11",
    type: "Fast Moving Goods",
    img: "/assets/img/products-over/سكر اوفر سيز.jpg",
    // desc: "Trusted grocery essential suitable for large distribution networks and store supply.",
    // features: ["Grocery essential", "Reliable distribution", "Shelf stability"],
    origin: "Import",
    pack: "Multiple Sizes",
  },
  {
    name: "Product 12",
    type: "Fast Moving Goods",
    img: "/assets/img/products-over/سكر.jpg",
    // desc: "Daily essential product with consistent quality and strong market movement.",
    // features: ["Daily essential", "Strong market movement", "Contract-friendly supply"],
    origin: "Import",
    pack: "Multiple Sizes",
  },
  {
    name: "Product 13",
    type: "Fast Moving Goods",
    img: "/assets/img/products-over/عدس ا.jpg",
    // desc: "Nutritious foodstuff product with reliable packaging and consistent supply for wholesale.",
    // features: ["Quality packaging", "Wholesale suitable", "Consistent sourcing"],
    origin: "Import",
    pack: "Multiple Sizes",
  },
  {
    name: "Product 14",
    type: "Fast Moving Goods",
    img: "/assets/img/products-over/عدس.jpg",
   // desc: "High-quality lentil product designed for steady distribution and customer satisfaction.",
   // features: ["Steady distribution", "Consistent quality", "Retail/wholesale ready"],
    origin: "Import",
    pack: "Multiple Sizes",
  },
  {
    name: "Product 15",
    type: "Fast Moving Goods",
    img: "/assets/img/products-over/عسل.jpg",
   // desc: "Popular grocery product packed for freshness and reliable shelf performance.",
  //  features: ["Freshness preserved", "Retail-ready packaging", "High customer demand"],
    origin: "Import",
    pack: "Multiple Sizes",
  },
  {
    name: "Product 16",
    type: "Fast Moving Goods",
    img: "/assets/img/products-over/فاصوليا.jpg",
   // desc: "Foodstuff selection ideal for bulk purchasing and continuous stock replenishment.",
   // features: ["Bulk purchasing", "Continuous replenishment", "Quality controlled"],
    origin: "Import",
    pack: "Multiple Sizes",
  },
  {
    name: "Product 17",
    type: "Fast Moving Goods",
    img: "/assets/img/products-over/فلفل اسود.jpg",
   // desc: "Spice product with strong demand and consistent quality for retail and wholesale channels.",
   // features: ["Strong demand", "Consistent quality", "Good shelf stability"],
    origin: "Import",
    pack: "Multiple Sizes",
  },
  {
    name: "Product 18",
    type: "Fast Moving Goods",
    img: "/assets/img/products-over/فول مدمس.jpg",
  //  desc: "Reliable foodstuff product optimized for distribution, packaging, and storage.",
  //  features: ["Distribution optimized", "Reliable packaging", "Contract-friendly"],
    origin: "Import",
    pack: "Multiple Sizes",
  },
  {
    name: "Product 19",
    type: "Fast Moving Goods",
    img: "/assets/img/products-over/كركم.jpg",
    //desc: "High-demand spice item suitable for wholesale orders and retail placement.",
   // features: ["Wholesale suitable", "Retail-ready", "Consistent supply"],
    origin: "Import",
    pack: "Multiple Sizes",
  },
  {
    name: "Product 20",
    type: "Fast Moving Goods",
    img: "/assets/img/products-over/كزبرة.jpg",
   // desc: "Spice selection packed for freshness and stable quality across the UAE market.",
   // features: ["Freshness maintained", "Stable quality", "High turnover product"],
    origin: "Import",
    pack: "Multiple Sizes",
  },
  {
    name: "Product 21",
    type: "Fast Moving Goods",
    img: "/assets/img/products-over/كمون.jpg",
   // desc: "Popular spice product with reliable sourcing and strong market movement.",
   // features: ["Reliable sourcing", "Strong movement", "Wholesale-friendly"],
    origin: "Import",
    pack: "Multiple Sizes",
  },
  {
    name: "Product 22",
    type: "Fast Moving Goods",
    img: "/assets/img/products-over/مشروم.jpg",
   // desc: "Grocery product designed for consistent supply and broad distribution channels.",
   // features: ["Broad distribution", "Consistent supply", "Retail/wholesale fit"],
    origin: "Import",
    pack: "Multiple Sizes",
  },
  {
    name: "Product 23",
    type: "Fast Moving Goods",
    img: "/assets/img/products-over/هيل.jpg",
    // desc: "Premium spice product packed for aroma and freshness, suitable for retail and wholesale.",
    // features: ["Aroma preserved", "Fresh packaging", "High demand"],
    origin: "Import",
    pack: "Multiple Sizes",
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
            A selection of key FMCG and foodstuff items delivered with consistent quality.
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
   PRODUCTS GRID + MODAL + TOGGLE
========================= */
function ProductsGridToggle({ products, initialCount = 6 }) {
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState(null);

  // ✅ Reveal للسكشن
  const grid = useReveal({ threshold: 0.15, once: true });

  // ESC close
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    if (selected) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  if (!products?.length) return null;

  const visible = showAll ? products : products.slice(0, initialCount);
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
              A selection of our key FMCG and foodstuff products. Click any item to view details.
            </p>
          </div>

          <div className="prod-grid">
            {visible.map((p) => (
              <article
                key={p.name}
                className="prod-card"
                onClick={() => setSelected(p)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setSelected(p);
                }}
              >
                <div className="prod-card__img">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                </div>

                <div className="prod-card__body">
                  <h4 className="prod-card__name">{p.name}</h4>
                  <p className="prod-card__type">{p.type}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Toggle button */}
          {products.length > initialCount && (
            <div className="prod-toggle">
              <button
                className="about-cta__btn"
                type="button"
                onClick={() => setShowAll((v) => !v)}
              >
                {showAll ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ===== Modal (Split Layout) ===== */}
      {selected && (
        <div className="prod-modal ov-modal" onClick={close}>
          <div
            className="prod-modal__content prod-modal__content--split ov-modal__content"
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

            {/* LEFT */}
            <div className="prod-modal__left ov-modal__left">
              <img src={selected.img} alt={selected.name} />
            </div>

            {/* RIGHT */}
            <div className="prod-modal__right ov-modal__right">
              <h3 className="prod-modal__title">{selected.name}</h3>
              <p className="prod-modal__sub">{selected.type}</p>

              <div className="prod-modal__meta">
                {selected.origin && (
                  <span className="prod-modal__pill ov-modal__pill">
                    Origin: {selected.origin}
                  </span>
                )}
                {selected.pack && (
                  <span className="prod-modal__pill ov-modal__pill">
                    Pack: {selected.pack}
                  </span>
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
export default function Overseas() {
  // ✅ Reveal لكل سكشن
  const hero = useReveal({ threshold: 0.15, once: true });
  const about = useReveal({ threshold: 0.15, once: true });
  const cta = useReveal({ threshold: 0.15, once: true });

  return (
    <main className="co-page">
      {/* ===== HERO ===== */}
      <section
        ref={hero.ref}
        className={`ov-hero reveal ${hero.visible ? "is-visible" : ""}`}
      >
        <div
          className="ov-hero__bg"
          style={{
            backgroundImage: "url(/assets/img/companies/pr2.jpg)",
          }}
        />
        <div className="ov-hero__overlay" />

        <div className="container ov-hero__content">
          <div className="ov-hero__badge">Overseas Foodstuff Trading</div>

          <h1 className="ov-hero__title">Overseas Foodstuff Trading L.L.C.</h1>

          <p className="ov-hero__desc">
            Delivering trusted foodstuff and fast-moving consumer goods with a focus on quality,
            consistency, and reliable distribution across the UAE.
          </p>

          <div className="ov-hero__actions">
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
            <img
              className="logo-overseas"
              src="/assets/img/companies/logo-overseas.jpg"
              alt="logo"
            />
            <h2 className="co-h2">About the Company</h2>

            <p className="co-p">
              Overseas Foodstuff Trading L.L.C. provides dependable supply and distribution for
              foodstuff and consumer goods, serving wholesale partners and key market channels
              across the UAE.
            </p>

            <p className="co-p">
              We prioritize consistent quality, strong sourcing, and efficient logistics to ensure
              customer satisfaction and long-term trust.
            </p>

            <div className="co-highlights">
              <div className="ov-chip">Foodstuff Supply</div>
              <div className="ov-chip">UAE Distribution</div>
              <div className="ov-chip">Reliable Logistics</div>
              <div className="ov-chip">Quality Assurance</div>
            </div>
          </div>

          <div className="ov-media">
            <img
              src="/assets/img/companies/about-overseas.jpg"
              alt="About Overseas"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <ProductsRing products={PRODUCTS} />
      <ProductsGridToggle products={PRODUCTS} initialCount={6} />

      {/* ===== CTA ===== */}
      <section
        ref={cta.ref}
        className={`about-cta reveal ${cta.visible ? "is-visible" : ""}`}
      >
        <div className="container about-cta__inner">
          <div>
            <h2 className="about-cta__title">Want to work with us?</h2>
            <p className="about-cta__text">
              Reach out to our team to explore partnerships, wholesale opportunities, or retail collaborations.
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