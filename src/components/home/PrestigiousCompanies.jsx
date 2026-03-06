import { useState } from "react";
import "./PrestigiousCompanies.css";

const data = [
  {
    sector: "wholesale",
    title: "Royal Horizon General Trading L.L.C.",
    img: "/assets/img/companies/pr1.jpg ",
    desc: "General trading and wholesale operations focused on quality-driven sourcing and long-term partnerships.",
  },
  {
    sector: "wholesale",
    title: "Overseas Foodstuff Trading L.L.C.",
    img: "/assets/img/companies/pr2.jpg",
    desc: "Wholesale FMCG partner delivering consistent quality and reliable supply solutions across the UAE.",
  },
  {
    sector: "retail",
    title: "Fazaa Stores - Ras Al Khaima",
    img: "/assets/img/companies/fazaa-ras-al-khaima.jpg",
    desc: "Ras Al Khaima branch serving customers with trusted products and friendly in-store service.",
  },
  {
    sector: "retail",
    title: "Fazaa Stores - Ajman",
    img: "/assets/img/companies/FazaaStores-Ajman.jpg",
    desc: "Retail branch in Ajman offering everyday essentials with a quality-first shopping experience.",
  },
  {
    sector: "retail",
    title: "Fazaa Stores - Al Ain (Branch)",
    img: "/assets/img/companies/fazaa-al-ain-branch.jpg",
    desc: "Al Ain branch providing a wide selection of quality goods and convenient daily shopping.",
  },
  {
    sector: "retail",
    title: "Fazaa Stores - Shamkha",
    img: "/assets/img/companies/fazaa-shamkha.jpg",
    desc: "Shamkha branch with a curated range of FMCG items—quality, value, and availability.",
  },
  {
    sector: "retail",
    title: "Fazaa Stores - Bani Yas",
    img: "/assets/img/companies/fazaa-baniyas.jpg",
    desc: "Bani Yas branch delivering trusted products and a smooth retail experience for families.",
  },
  {
    sector: "retail",
    title: "Fazaa Stores - Musaffah",
    img: "/assets/img/companies/fazaa-store-musafffah.jpg",
    desc: "Musaffah branch supporting the local community with reliable stock and quality service.",
  },
   {
    sector: "retail",
    title: "RH-Cafe",
    img: "/assets/img/companies/rhcafe.jpg",
    desc: "Musaffah branch supporting the local community with reliable stock and quality service.",
  },
   {
    sector:"E-com",
    title: "Fazaa Store ",
    img: "/assets/img/companies/fazaa-website.jpg",
    desc: "Online presence showcasing Fazaa Stores—branches, highlights, and updates across the UAE.",
  },
  {
    sector: "E-com",
    title: "RHe-s",
    img: "/assets/img/companies/RHe.jpg",
    desc: "Visit the RH website to shop and get the best discounts",
  },

];

export default function PrestigiousCompanies() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? data : data.filter((x) => x.sector === filter);

  return (
    <section className="pc-wrap">
      <div className="container">
        <h2 className="pc-title text-center">
          PRESTIGIOUS <span>COMPANIES</span>
        </h2>

        <div className="pc-filters">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={filter === "wholesale" ? "active" : ""}
            onClick={() => setFilter("wholesale")}
          >
            Wholesale & Contracts
          </button>
          <button
            className={filter === "retail" ? "active" : ""}
            onClick={() => setFilter("retail")}
          >
            Retail
          </button>
          <button
            className={filter === "E-com" ? "active" : ""}
            onClick={() => setFilter("E-com")}
          >
            E-com
          </button>
        </div>

        <div className="pc-grid">
          {filtered.map((c) => (
            <div key={c.title} className="pc-card">
              <div className="pc-img">
                <img src={c.img} alt={c.title} />

                {/* ✅ Hover Overlay */}
                <div className="pc-overlay">
                  <div className="pc-overlay__content">
                    <div className="pc-overlay__tag">
                      {c.sector === "wholesale" ? "Wholesale" : "Retail Branch"}
                    </div>
                    <h4 className="pc-overlay__title">{c.title}</h4>
                    <p className="pc-overlay__desc">{c.desc}</p>
                  </div>
                  
                </div>
              </div>

              <div className="pc-label">{c.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
