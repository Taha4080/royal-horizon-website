import { Link } from "react-router-dom";
import "./Company.css";
import { useReveal } from "../../useReveal";

export default function Companies() {
  // ===== Links Data (Update URLs) =====
  const retailBranches = [
    { name: "RHFS, Ajman", url: "#" },
    { name: "RHFS, Al Ain", url: "#" },
    { name: "RHFS, AUH (Shamkhah)", url: "#" },
    { name: "RHFS, AUH (Bani Yas)", url: "#" },
    { name: "RHFS, AUH (Mussafah)", url: "#" },
  ];

  const retailSpecial = [
    { name: "FES, Seh Al Mahab, Sharjah", url: "#" },
    { name: "FES, Abu Dhabi Police Collage Premises", url: "#" },
    { name: "FES, Al Wathba Sadr Jail Premises", url: "#" },
    { name: "FES, Sharjah Police Academy Premises", url: "#" },
  ];

  const generalTrading = [
    { name: "RH General Trading, Dubai Br", url: "#" },
    { name: "RH General Trading, Mazyad", url: "#" },
  ];

  const overseas = [{ name: "OverSeas General Trading, Mazyad", url: "#" }];

  const ecommerce = [
    { name: "FazaaStore", url: "https://fazaa.ae" }, // مثال
    { name: "RHe-s - Royal Horizon Store", url: "#" },
  ];

  // ✅ Reveal for sections
  const structure = useReveal({ threshold: 0.15, once: true });
  const companies = useReveal({ threshold: 0.15, once: true });
  const fleet = useReveal({ threshold: 0.15, once: true });
  const storage = useReveal({ threshold: 0.15, once: true });
  const team = useReveal({ threshold: 0.15, once: true });

  return (
    <section className="company-wrap">
      {/* =========================
          Company Structure (NEW)
      ========================= */}
      <section
        ref={structure.ref}
        className={`cs-container reveal ${structure.visible ? "is-visible" : ""}`}
      >
        <h3 className="cs-title">Company Structure</h3>

        {/* Top Header */}
        <div className="cs-top">
          <div className="cs-holding">
            <div className="cs-holdingTitle">Royal Horizon Holding LLC</div>
            <div className="cs-holdingSub">Group Structure Overview</div>
          </div>

          <div className="cs-level1">
            <div className="cs-cat">
              <div className="cs-catTitle">Retail</div>
              <p className="cs-catSub">B to C</p>
            </div>

            <div className="cs-cat">
              <div className="cs-catTitle">Wholesale & Contracts</div>
              <p className="cs-catSub">B to B</p>
            </div>

            <div className="cs-cat">
              <div className="cs-catTitle">E-Commerce</div>
              <p className="cs-catSub">Online</p>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="cs-grid">
          {/* Retail */}
          <div className="cs-col">
            <div className="cs-colHead">
              <h4 className="cs-colTitle">Royal Horizon FS, RAK</h4>
            </div>

            <div className="cs-colBody">
              <div className="cs-label">BRANCHES</div>

              <div className="cs-links">
                {retailBranches.map((b) => (
                  <a
                    key={b.name}
                    className="cs-link"
                    href={b.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {b.name}
                    <span className="cs-linkArrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                ))}
              </div>

              <div className="cs-mt">
                <div className="cs-label">SPECIAL LOCATIONS</div>

                <div className="cs-links">
                  {retailSpecial.map((b) => (
                    <a
                      key={b.name}
                      className="cs-link cs-link--special"
                      href={b.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {b.name}
                      <span className="cs-linkArrow" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Wholesale */}
          <div className="cs-col">
            <div className="cs-colHead">
              <h4 className="cs-colTitle">Wholesale & Contracts</h4>
            </div>

            <div className="cs-colBody">
              <div className="cs-label">RH General Trading</div>

              <div className="cs-links">
                {generalTrading.map((b) => (
                  <a
                    key={b.name}
                    className="cs-link"
                    href={b.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {b.name}
                    <span className="cs-linkArrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                ))}
              </div>

              <div className="cs-mt">
                <div className="cs-label">Overseas Foodstuff Trading</div>

                <div className="cs-links">
                  {overseas.map((b) => (
                    <a
                      key={b.name}
                      className="cs-link"
                      href={b.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {b.name}
                      <span className="cs-linkArrow" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* E-Commerce */}
          <div className="cs-col">
            <div className="cs-colHead">
              <h4 className="cs-colTitle">E-Commerce</h4>
            </div>

            <div className="cs-colBody">
              <div className="cs-label">Online Platforms</div>

              <div className="cs-links">
                {ecommerce.map((b) => (
                  <a
                    key={b.name}
                    className="cs-link"
                    href={b.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {b.name}
                    <span className="cs-linkArrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          Our Companies
      ========================= */}
      <section
        ref={companies.ref}
        className={`container reveal ${companies.visible ? "is-visible" : ""}`}
      >
        <h1 className="company-title">Our Companies</h1>
        <p className="company-sub">
          Explore the diversified companies under Royal Horizon Holding.
        </p>

        <div className="company-grid">
          <Link to="/companies/horizon" className="company-card">
            <div
              className="company-img"
              style={{ backgroundImage: "url(/assets/img/companies/pr2.jpg)" }}
            />
            <h3>Royal Horizon General Trading</h3>
            <p>Wholesale & Government Contracts</p>
          </Link>

          <Link to="/companies/overseas" className="company-card">
            <div
              className="company-img"
              style={{ backgroundImage: "url(/assets/img/companies/pr1.jpg)" }}
            />
            <h3>Overseas Foodstuff Trading</h3>
            <p>FMCG & Foodstuff Supply</p>
          </Link>

          <Link to="/companies/fazaa" className="company-card">
            <div
              className="company-img"
              style={{ backgroundImage: "url(/assets/img/companies/p3.jpg)" }}
            />
            <h3>Fazaa Stores</h3>
            <p>Retail Chain Across UAE</p>
          </Link>
        </div>
      </section>

      {/* =========================
          Fleet
      ========================= */}
      <section
        ref={fleet.ref}
        className={`fleet__container reveal ${fleet.visible ? "is-visible" : ""}`}
      >
        <header className="fleet__head">
          <h2 className="fleet__title">Our Fleet – Driving Efficiency and Reach</h2>

          <div className="fleet__text">
            <p>
              Royal Horizon Holding operates a robust fleet of 72 vehicles,
              including trailers, trucks, and pick-ups, strategically deployed
              across the UAE to ensure seamless distribution and timely delivery.
            </p>
            <p>
              Vehicles are equipped with freezer, chiller, and ambient
              compartments, enabling us to maintain the highest standards of
              quality and safety for all product categories — from frozen goods
              to dry commodities.
            </p>
            <p>
              Our modern and well-maintained fleet symbolizes reliability, speed,
              and our unwavering commitment to serving customers with excellence
              across every channel.
            </p>
          </div>
        </header>

        <figure className="fleet__media">
          <img src="/assets/img/about/fleet.jpg" alt="Royal Horizon fleet" loading="lazy" />
        </figure>
      </section>

      {/* =========================
          Storage & Processing
      ========================= */}
      <section
        ref={storage.ref}
        className={`sp reveal ${storage.visible ? "is-visible" : ""}`}
      >
        <div className="sp__container">
          <header className="sp__head">
            <h2 className="sp__title">
              Our Storage & Processing – <br />
              Scalable, Secure, and Strategically Equipped
            </h2>

            <div className="sp__text">
              <p>
                Royal Horizon Holding operates over 170,000 CBM of modern storage
                facilities, including 13,000 CBM of temperature-controlled cold
                storage, ensuring optimal preservation and handling of diverse FMCG
                products.
              </p>
              <p>
                We also operate a dedicated rice packing unit with a daily capacity
                of 270 metric tons, enabling large-scale processing, packaging, and
                timely distribution of high-quality rice varieties across our network.
              </p>
              <p>
                To support future expansion, an additional 44,000 CBM of storage space
                construction project is in pipeline.
              </p>
            </div>
          </header>

          <div className="sp__grid">
            <div className="sp__card sp__card--wide">
              <img src="/assets/img/storage/s1.jpg" alt="Storage facility" loading="lazy" />
            </div>
            <div className="sp__card">
              <img src="/assets/img/storage/s2.jpg" alt="Processing area" loading="lazy" />
            </div>
            <div className="sp__card">
              <img src="/assets/img/storage/s3.jpg" alt="Warehouse operations" loading="lazy" />
            </div>
            <div className="sp__card">
              <img src="/assets/img/storage/s4.jpg" alt="Packing unit" loading="lazy" />
            </div>
            <div className="sp__card">
              <img src="/assets/img/storage/s6.jpg" alt="Cold storage" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section
        ref={team.ref}
        className={`co-sec reveal ${team.visible ? "is-visible" : ""}`}
      >
        <div className="container">
          <div className="co-head">
            <h2 className="co-h2">Our Team</h2>
            <p className="co-sub">
              Store teams focused on service excellence, product availability, and customer care.
            </p>
          </div>

          <div className="fz-team">
            <img
              src="/assets/img/companies/team.jpg"
              alt="Fazaa Team"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </div>
        </div>
      </section>
    </section>
  );
}