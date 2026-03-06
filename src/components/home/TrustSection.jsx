import "./TrustSection.css";

export default function TrustSection() {
  return (
    <section className="trust-wrap">
      <div className="trust-overlay" />

      <div className="container text-center trust-content">
        <span className="trust-badge">ROYAL HORIZON HOLDING</span>

        <h2 className="trust-ar">الثقة بالجودة</h2>
        <h6 className="trust-en">TRUST BY QUALITY</h6>

        <p className="trust-text">
          We are a group of companies established in the UAE, delivering trusted FMCG and retail solutions through
          consistent quality standards, reliable supply chains, and long-term partnerships that put customer
          satisfaction first.
        </p>

        <div className="trust-actions">
          <a className="trust-btn" href="/about">
            Learn More
          </a>
          {/* <a className="trust-btn trust-btn--ghost" href="/contact">
            Contact Us
          </a> */}
        </div>
      </div>
    </section>
  );
}
