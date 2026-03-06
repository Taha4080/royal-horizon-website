
import "./Food.css";

const FOOD_IMAGES = [
  "/assets/img/Food/f1.png",
  "/assets/img/Food/f2.png",
  "/assets/img/Food/f3.png",
  "/assets/img/Food/f4.png",
  "/assets/img/Food/f5.png",
  "/assets/img/Food/f6.png",
  "/assets/img/Food/f7.png",
  "/assets/img/Food/f8.png",
  "/assets/img/Food/f9.png",
  "/assets/img/Food/f10.png",
  "/assets/img/Food/f11.png",
  "/assets/img/Food/f12.png",
  "/assets/img/Food/f13.png",
  "/assets/img/Food/f14.png",
];

const NONFOOD_IMAGES = [
  "/assets/img/Food/fn1.png",
  "/assets/img/Food/fn2.png",
  "/assets/img/Food/fn3.png",
  "/assets/img/Food/fn4.png",
  "/assets/img/Food/fn5.png",
];

function BrandCard({ src, alt }) {
  return (
    <div className="fb-card">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={(e) => (e.currentTarget.style.display = "none")}
      />
    </div>
  );
}

export default function Food() {
  return (
    <section className="fb-wrap">
      <div className="container">
        <div className="fb-head">
          <h3 className="fb-title">
            Our Brands – A Legacy of Quality and Trust
          </h3>
          <p className="fb-desc">
            At Royal Horizon Holding, our diverse portfolio features over 25,000
            FMCG SKUs, reflecting our commitment to serving every household need
            with excellence. We proudly own 11 distinguished private labels and
            represent 8 globally recognized third-party brands under exclusive
            distribution rights. From essential food staples to premium non-food
            products, our brands stand as a testament to quality, innovation,
            and customer trust — making Royal Horizon Holding a leading name in
            the region’s FMCG landscape.
          </p>
        </div>

        {/* Food */}
        <div className="fb-section">
          <div className="fb-section__left">
            <h4 className="fb-section__title">Food</h4>
          </div>

          <div className="fb-grid">
            {FOOD_IMAGES.map((src, i) => (
              <BrandCard key={src} src={src} alt={`Food brand ${i + 1}`} />
            ))}
          </div>
        </div>

        {/* Non-Food */}
        <div className="fb-section fb-section--spaced">
          <div className="fb-section__left">
            <h4 className="fb-section__title">Non-Food</h4>
          </div>

          <div className="fb-grid fb-grid--nonfood">
            {NONFOOD_IMAGES.map((src, i) => (
              <BrandCard key={src} src={src} alt={`Non-food brand ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
}
