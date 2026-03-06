// import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import "./Company.css";
import "./Fazaa.css";
import { useReveal } from "../../useReveal"; // ✅ عدّل المسار حسب مكان الملف عندك

const BRANCHES = [
  {
    location:
      "https://www.google.com/maps/place/Fazaa+Stores+%D9%85%D8%AA%D8%A7%D8%AC%D8%B1+%D9%81%D8%B2%D8%B9%D9%87+%D8%A7%D9%84%D8%B9%D9%8A%D9%86%E2%80%AD/data=!4m2!3m1!1s0x0:0x7156761843e343e?sa=X&ved=1t:2428&ictx=111",
    name: "Fazaa Stores - Al Ain",
    city: "Al Ain",
    img: "/assets/img/companies/fazaa-al-ain-branch.jpg",
    desc: "A modern retail branch serving the community with daily essentials and trusted quality.",
  },
  {
    location:
      "https://www.google.com/maps/place/Fazaa+Stores/@25.4052007,55.5362205,10.95z/data=!4m6!3m5!1s0x3ef5f75d54d78a19:0xc7b164ff2af4760f!8m2!3d25.4184907!4d55.5450987!16s%2Fg%2F11f60zg39t?entry=ttu&g_ep=EgoyMDI2MDIwOS4wIKXMDSoASAFQAw%3D%3D",
    name: "Fazaa Stores - Ajman",
    city: "Ajman",
    img: "/assets/img/companies/FazaaStores-Ajman.jpg",
    desc: "Convenient shopping experience with curated products and consistent service standards.",
  },
  {
    location:
      "https://www.google.com/maps/place/Fazaa+Stores+%D9%85%D8%AA%D8%A7%D8%AC%D8%B1+%D9%81%D8%B2%D8%B9%D8%A9+%D8%B1%D8%A7%D8%B3+%D8%A7%D9%84%D8%AE%D9%8A%D9%85%D8%A9%E2%80%AD/data=!4m2!3m1!1s0x0:0xeabe5bf902356dbb?sa=X&ved=1t:2428&ictx=111",
    name: "Fazaa Stores - Ras Al Khaimah",
    city: "Ras Al Khaimah",
    img: "/assets/img/companies/fazaa-ras-al-khaima.jpg",
    desc: "Retail destination offering a reliable selection of FMCG and household goods.",
  },
  {
    location:
      "https://www.google.com/maps/place/Fazaa+Stores+Shamkha/@24.4027102,54.691434,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5e49fbc3570721:0xcd2d081d5fda3603!8m2!3d24.4027102!4d54.691434!16s%2Fg%2F11rvdglvj9?entry=ttu&g_ep=EgoyMDI2MDIwOS4wIKXMDSoASAFQAw%3D%3D",
    name: "Fazaa Stores - Shamkha",
    city: "Abu Dhabi",
    img: "/assets/img/companies/fazaa-shamkha.jpg",
    desc: "Community-focused store with quality products, great value, and smooth checkout experience.",
  },
  {
    location:
      "https://www.google.com/maps/place/Fazaa+Stores+Baniyas+%D9%85%D8%AA%D8%A7%D8%AC%D8%B1+%D9%81%D8%B2%D8%B9%D8%A9+%D8%A7%D8%A8%D9%88%D8%B8%D8%A8%D9%8A+%D8%A8%D9%8E%D9%86%D9%90%D9%8A+%D9%8A%D9%8E%D8%A7%D8%B3-+%D8%A3%D8%A8%D9%88+%D8%B8%D8%A8%D9%8A%E2%80%AD/data=!4m2!3m1!1s0x0:0x731f6a3587e43b38?sa=X&ved=1t:2428&ictx=111",
    name: "Fazaa Stores - Bani Yas",
    city: "Abu Dhabi",
    img: "/assets/img/companies/fazaa-baniyas.jpg",
    desc: "Fast shopping, everyday needs, and a trusted experience in a prime location.",
  },
  {
    location:
      "https://www.google.com/maps/place/Fazaa+Store+Musaffah-+%D9%85%D8%AA%D8%A7%D8%AC%D8%B1+%D9%81%D8%B2%D8%B9%D8%A9+%D9%85%D8%B5%D9%81%D8%AD%E2%80%AD/@24.3807298,54.4801645,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5e41007088743b:0x8faeea7ce847bb75!8m2!3d24.3807298!4d54.4801645!16s%2Fg%2F11x0p0t60b?entry=ttu&g_ep=EgoyMDI2MDIwOS4wIKXMDSoASAFQAw%3D%3D",
    name: "Fazaa Stores - Musaffah",
    city: "Abu Dhabi",
    img: "/assets/img/companies/fazaa-store-musafffah.jpg",
    desc: "Retail hub designed for convenience and consistent quality across key product categories.",
  },
  {
    location: "https://fazaastores.com/",
    name: "Our Website",
    city: "Fazaa Stores - Website",
    img: "/assets/img/companies/fazaa-website.jpg",
    desc: "Online presence showcasing Fazaa Stores—branches, highlights, and updates across the UAE.",
  },
];

const FEATURES = [
  {
    title: "Retail Excellence",
    text: "A consistent in-store experience with high standards across all branches.",
  },
  {
    title: "Trusted Products",
    text: "Carefully selected goods with a focus on quality, freshness, and value.",
  },
  {
    title: "Customer First",
    text: "Friendly service and smooth operations built for convenience and reliability.",
  },
];

export default function Fazaa() {
  // ✅ Reveal لكل سكشن
  const hero = useReveal({ threshold: 0.15, once: true });
  const quick = useReveal({ threshold: 0.15, once: true });
  const about = useReveal({ threshold: 0.15, once: true });
  const branches = useReveal({ threshold: 0.15, once: true });
  const cta = useReveal({ threshold: 0.15, once: true });

  return (
    <main className="co-page">
      {/* ===== HERO ===== */}
      <section
        ref={hero.ref}
        className={`fz-hero reveal ${hero.visible ? "is-visible" : ""}`}
      >
        <div className="fz-hero__bg" />
        <div className="fz-hero__overlay" />

        <div className="container fz-hero__content">
          <div className="fz-hero__badge">Retail Sector</div>

          <h1 className="fz-hero__title">Fazaa Stores</h1>

          <p className="fz-hero__desc">
            A growing retail network delivering everyday essentials, trusted
            quality, and a smooth shopping experience across multiple UAE
            locations.
          </p>

          <div className="fz-hero__actions">
            <a className="co-btn" href="/companies">
              Back to Companies
            </a>
            <a className="co-btn co-btn--ghost" href="/contact">
              Contact Now
            </a>
          </div>
        </div>
      </section>

      {/* ===== QUICK FEATURES ===== */}
      <section
        ref={quick.ref}
        className={`fz-features reveal ${quick.visible ? "is-visible" : ""}`}
      >
        <div className="container fz-features__grid">
          {FEATURES.map((f) => (
            <div key={f.title} className="fz-feature">
              <div className="fz-feature__icon" aria-hidden="true">
                ✓
              </div>
              <div>
                <div className="fz-feature__t">{f.title}</div>
                <div className="fz-feature__p">{f.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section
        ref={about.ref}
        className={`co-sec reveal ${about.visible ? "is-visible" : ""}`}
      >
        <div className="container fz-split">
          <div>
            <img
              className="logo-overseas"
              src="/assets/img/companies/logo-fazaa.jpg"
              alt="logo"
            />
            <h2 className="co-h2">About Fazaa Stores</h2>

            <p className="co-p">
              Fazaa Stores operates across key UAE locations, offering a modern
              retail environment with a wide range of FMCG and household
              essentials.
            </p>

            <p className="co-p">
              Our focus is on consistent quality, accessible pricing, and a
              convenient in-store experience that meets everyday customer needs.
            </p>

            <div className="fz-chips">
              <div className="fz-chip">Multiple Branches</div>
              <div className="fz-chip">Daily Essentials</div>
              <div className="fz-chip">FMCG</div>
              <div className="fz-chip">Customer Care</div>
            </div>
          </div>

          <div className="fz-media">
            <img
              src="/assets/img/companies/p3.jpg"
              alt="About Fazaa"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
            <div className="fz-media__ph"></div>
          </div>
        </div>
      </section>

      {/* ===== BRANCHES ===== */}
      <section
        ref={branches.ref}
        className={`co-sec co-sec--alt reveal ${branches.visible ? "is-visible" : ""}`}
      >
        <div className="container">
          <div className="co-head">
            <h2 className="co-h2 co-h2--light">Our Branches</h2>
            <p className="co-sub co-sub--light">
              A retail network built around convenience, consistent quality, and accessible locations.
            </p>
          </div>

          <div className="fz-branches">
            {BRANCHES.map((b) => (
              <article key={b.name} className="fz-branch">
                <div className="fz-branch__img">
                  <img
                    src={b.img}
                    alt={b.name}
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                  <div className="fz-branch__ph"></div>
                </div>

                <div className="fz-branch__body">
                  <div className="fz-branch__meta">
                    <a href={b.location} target="_blank" rel="noreferrer">
                      <div className="location-item">
                        <FaLocationDot className="location-icon" />
                        <span>{b.city}</span>
                      </div>
                    </a>
                  </div>
                  <h3 className="fz-branch__t">{b.name}</h3>
                  <p className="fz-branch__p">{b.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section
        ref={cta.ref}
        className={`about-cta reveal ${cta.visible ? "is-visible" : ""}`}
      >
        <div className="container about-cta__inner">
          <div>
            <h2 className="about-cta__title">Want to work with us?</h2>
            <p className="about-cta__text">
              Reach out to our team to explore partnerships, wholesale
              opportunities, or retail collaborations.
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