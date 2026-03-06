import { useState } from "react";
import "./About.css";
import CorporateTimeline from "./CorporateTimeline.jsx";
import KeyPlayers from "./KeyPlayers.jsx";
import { useReveal } from "../useReveal";
// import OrgChart from "./OrgChart.jsx";

const CERTS = [
  { img: "/assets/img/companies/royaltest3.jpeg", title: "Certificate 1" },
  { img: "/assets/img/companies/royaltest4.jpeg", title: "Certificate 2" },
  { img: "/assets/img/companies/royaltest6.jpeg", title: "Certificate 3" },
  { img: "/assets/img/companies/royaltest7.jpeg", title: "Certificate 4" },
  { img: "/assets/img/companies/royaltest8.jpeg", title: "Certificate 5" },
  { img: "/assets/img/companies/crystal1.jpeg", title: "Certificate 6" },
  { img: "/assets/img/companies/crystal2.jpeg", title: "Certificate 7" },
  { img: "/assets/img/companies/crystal3.jpeg", title: "Certificate 8" },
  { img: "/assets/img/companies/crystal4.jpeg", title: "Certificate 9" },
  { img: "/assets/img/companies/crystal5.jpeg", title: "Certificate 10" },
  { img: "/assets/img/companies/crystal6.jpeg", title: "Certificate 11" },
  { img: "/assets/img/companies/crystal7.jpeg", title: "Certificate 12" },
  { img: "/assets/img/companies/crystal8.jpeg", title: "Certificate 13" },
  { img: "/assets/img/companies/crystal9.jpeg", title: "Certificate 14" },
  { img: "/assets/img/companies/crystal10.jpeg", title: "Certificate 15" },
  { img: "/assets/img/companies/crystal11.jpeg", title: "Certificate 16" },
  { img: "/assets/img/companies/crystal12.jpeg", title: "Certificate 17" },
];

function CertificatesGallery({ certs }) {
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeImg, setActiveImg] = useState(null);

  // ✅ Reveal للسكشن
  const { ref, visible } = useReveal({ threshold: 0.2, once: true });

  return (
    <section
      ref={ref}
      className={`co-sec reveal ${visible ? "is-visible" : ""}`}
    >
      <div className="container">
        <div className="co-head">
          <h2 className="co-h2">Certificates & Recognition</h2>
          <p className="co-sub">
            Our certifications reflect our commitment to quality, compliance,
            and trusted operations.
          </p>
        </div>

        {/* Thumbnails */}
        <div className="hz-certs">
          {certs.slice(0, visibleCount).map((c, idx) => (
            <button
              key={idx}
              type="button"
              className="hz-cert-thumb"
              onClick={() => setActiveImg(c.img)}
              aria-label={`Open ${c.title}`}
            >
              <img src={c.img} alt={c.title} />
            </button>
          ))}
        </div>

        {/* Show More / Show Less */}
        {certs.length > 6 && (
          <div className="hz-certsActions">
            {visibleCount < certs.length ? (
              <button
                type="button"
                className="hz-btn hz-btn--ghost"
                onClick={() => setVisibleCount(certs.length)}
              >
                Show More
                <span className="hz-btn__icon" aria-hidden="true">
                  ▾
                </span>
              </button>
            ) : (
              <button
                type="button"
                className="hz-btn hz-btn--ghost"
                onClick={() => setVisibleCount(6)}
              >
                Show Less
                <span
                  className="hz-btn__icon hz-btn__icon--up"
                  aria-hidden="true"
                >
                  ▴
                </span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {activeImg && (
        <div className="hz-lightbox" onClick={() => setActiveImg(null)}>
          <img src={activeImg} alt="Certificate Preview" />
        </div>
      )}
    </section>
  );
}

export default function About() {
  // ✅ Reveal لكل سكشن (بشكل مستقل)
  const hero = useReveal({ threshold: 0.15, once: true });
  const who = useReveal({ threshold: 0.2, once: true });
  const org = useReveal({ threshold: 0.2, once: true });
  const direction = useReveal({ threshold: 0.2, once: true });
  const cta = useReveal({ threshold: 0.2, once: true });

  return (
    <main className="about-page">
      {/* ===== HERO ===== */}
      <section
        ref={hero.ref}
        className={`about-hero reveal ${hero.visible ? "is-visible" : ""}`}
      >
        <div className="about-hero__overlay" />

        <div className="container about-hero__content">
          <div className="about-hero__grid">
            {/* Left Content */}
            <div className="about-hero__text">
              {/* <h1 className="about-hero__title">About Royal Horizon Holding</h1> */}

              <p className="about-hero__subtitle">
                <span>About:</span> <br />
                A group of companies based in the UAE, operating across
                wholesale, contracts, and retail—built on trust, quality
                standards, and long-term partnerships.
              </p>
            </div>

            {/* Right Image */}
            <div className="about-hero__image">
              <img src="/assets/img/about/about-us.png" alt="Royal Horizon" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHO WE ARE ===== */}
      <section
        ref={who.ref}
        className={`about-section reveal ${who.visible ? "is-visible" : ""}`}
      >
        <div className="container about-grid">
          <div className="about-left">
            <h2 className="about-h2">Who We Are?</h2>
            <p className="about-p">
              We are a group of companies established in UAE that specialized in
              fast moving consumer goods and retail sectors. We are known for
              well executed projects with government entities by distributing
              dry food products. Our conscious endeavors to learn and understand
              the requirements of our customers, specially UAE citizens, has
              given us an upper hand in providing the quality products and
              services to achieve our customers’ satisfaction.
            </p>
            <a
              href="./assets/profile/profie.pdf"
              download
              className="about-download-btn"
            >
              Download Company Profile ⬇
            </a>
          </div>

          <div className="about-right">
            <div className="about-media">
              <img
                src="/assets/img/about/about-1.png"
                alt="Royal Horizon"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <div className="about-media__placeholder">
                <img src="/assets/img/about/about-us.jpg" alt="about us" />
              </div>
            </div>
          </div>
        </div>
      </section>
<section
  ref={direction.ref}
  className={`about-section about-section--alt reveal ${
    direction.visible ? "is-visible" : ""
  }`}
>
  <div className="container">
    <h2 className="about-h2 text-center">Our Direction</h2>

    <div className="dir-stack">
      {/* SLIDE 1 */}
      <article className="dir-slide" style={{ zIndex: 10 }}>
        <div className="dir-card">
          <div className="dir-media">
            <img src="./assets/img/about/mission-img2.jpg" alt="mission" />
          </div>

          <div className="dir-content">
            <div className="dir-tag">Mission</div>
            <h3 className="dir-title">Our Mission</h3>
            <p className="dir-text">
              To ensure a consistent, varied, and superior selection of food
              products that meet the rising demands of the region. We achieve
              this by utilizing innovative and sustainable practices, promoting
              self-reliance, and driving economic growth. Our commitment to
              excellence, integrity, and social responsibility drives us to
              provide long-lasting and resilient solutions that contribute to
              the food security and prosperity of United Arab Emirates.
            </p>
          </div>
        </div>

        {/* مساحة للسكروول عشان السلايد اللي بعده يطلع فوق */}
        <div className="dir-spacer" />
      </article>

      {/* SLIDE 2 */}
      <article className="dir-slide" style={{ zIndex: 11 }}>
        <div className="dir-card">
          <div className="dir-media">
            <img src="./assets/img/about/our-vistion2.jpg" alt="Vision" />
          </div>

          <div className="dir-content">
            <div className="dir-tag">Vision</div>
            <h3 className="dir-title">Our Vision</h3>
            <p className="dir-text">
              To be the strategic partner in the food security of United Arab
              Emirates.
            </p>
          </div>
        </div>

        <div className="dir-spacer" />
      </article>

      {/* SLIDE 3 */}
      <article className="dir-slide" style={{ zIndex: 12 }}>
        <div className="dir-card">
          <div className="dir-media">
            <img src="./assets/img/about/our-values2.jpg" alt="Values" />
          </div>

          <div className="dir-content">
            <div className="dir-tag">Values</div>
            <h3 className="dir-title">Our Values</h3>

            <div className="dir-text">
              <ul className="dir-values">
                <li>Reliability</li>
                <li>Quality</li>
                <li>Efficiency</li>
                <li>Social Responsibility</li>
                <li>Accessibility</li>
              </ul>
            </div>
          </div>
        </div>

        {/* آخر سلايد: نخلي Spacer أكبر شوي عشان يعطي نهاية مريحة */}
        <div className="dir-spacer dir-spacer--last" />
      </article>
    </div>
  </div>
   
</section>
<CorporateTimeline />
      <KeyPlayers />  
      {/* <OrgChart /> */}

      {/* ===== ORG CHART (simple) ===== */}
      {/* <section
        ref={org.ref}
        className={`org-chart reveal ${org.visible ? "is-visible" : ""}`}
      >
        <div className="container">
          <div className="org-chart__head">
            <h2 className="org-chart__title">Organizational Chart</h2>
          </div>

          <div className="org-chart__wrap">
            <img src="/assets/img/about/or1.jpg" alt="organization" />
            <img src="/assets/img/about/or2.jpg" alt="organization" />
            <img
              className="image3"
              src="/assets/img/about/or3.jpg"
              alt="organization"
            />
          </div>
        </div>
      </section> */}
      <CertificatesGallery certs={CERTS} />

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
