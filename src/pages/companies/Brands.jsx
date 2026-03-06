import "./Brands.css";

export default function Brands() {
  const logos = Array.from({ length: 16 }, (_, i) => i + 1);

  return (
    <section className="brands-wrap">
      <div className="container">
        <h2 className="brands-title text-center">
          16 <span>RECOGNIZED</span> BRANDS
        </h2>

        <div className="brands-grid">
          {logos.map((n) => (
            <div key={n} className="brand-card">
              {/* ضع لوجو رقم {n} هنا */}
              <img src={`/assets/img/brands/brand-${n}.jpg`} alt={`brand-${n}`} />
              {/* <div className="brand-placeholder">LOGO {n}</div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
