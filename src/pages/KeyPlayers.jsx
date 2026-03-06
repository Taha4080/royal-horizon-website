import { useEffect, useState } from "react";
import "./KeyPlayers.css";

export default function KeyPlayers() {
  const PLAYERS = [
    {
      id: 1,
      img: "/assets/img/team/Suhail.jpg",
      name: "SUHAIL NEKHAIRA",
      role: "CHAIRMAN",
      desc:
        "We are proud to contribute to national growth by supporting the country’s infrastructural development through impactful projects that have positively transformed the lives of people and strengthened the nation. We remain committed to delivering high-quality services to our clients through continuous dedication to strong business principles, professionalism, and ethics .",
    },
    // {
    //   id: 2,
    //   img: "/assets/img/team/Musa.jpg",
    //   name: "Musa Musallam",
    //   role: "Managing Director",
    //   desc:"Royal Horizon has earned the trust of numerous government and non-government entities through the delivery of high-quality products and exceptional services across the food, retail, and service sectors. We believe that our mission, guided by strong values, enables us to achieve our vision and make a meaningful contribution to society.",
    // },
    {
      id: 3,
      img: "/assets/img/team/Ala.jpg",
      name: "ALA MIKDADI",
      role: "Group CEO",
      desc:"As a customer-centric group of companies, Royal Horizon is committed to maintaining and strengthening its position as a strategic partner for both public and private sectors. By placing the customer at the center of everything we do, we continuously strive to meet customer needs and exceed expectations." ,   },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((i) => (i + 1) % PLAYERS.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const player = PLAYERS[active];

  return (
    <section className="kp-wrap">
      <div className="kp-container">
        <div className="kp-head">
          <h2 className="kp-title">OUR KEY PLAYERS</h2>
          <p className="kp-sub">
            The leadership team driving quality, trust, and sustainable growth.
          </p>
        </div>

        <div className="kp-slider">
          <button
            className="kp-arrow"
            onClick={() => setActive((i) => (i - 1 + PLAYERS.length) % PLAYERS.length)}
            aria-label="Previous"
          >
            ‹
          </button>

          <div className="kp-card">
            <div className="kp-photo">
              <img src={player.img} alt={player.name} />
            </div>

            <div className="kp-name">{player.name}</div>
            <div className="kp-role">{player.role}</div>
            <p className="kp-desc">{player.desc}</p>

            <div className="kp-dots">
              {PLAYERS.map((p, idx) => (
                <button
                  key={p.id}
                  className={idx === active ? "kp-dot kp-dot--active" : "kp-dot"}
                  onClick={() => setActive(idx)}
                  aria-label={`Go to ${p.name}`}
                />
              ))}
            </div>
          </div>

          <button
            className="kp-arrow"
            onClick={() => setActive((i) => (i + 1) % PLAYERS.length)}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
