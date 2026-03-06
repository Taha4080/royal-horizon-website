import { useEffect, useMemo, useRef, useState } from "react";
import "./CorporateTimeline.css";

export default function CorporateTimeline() {
  const EVENTS = [
    {
      year: 2008,
      text: "• Established as Emirates Dawn General Trading L.L.C,Dubai.",
      color: "#bcc232",
    },
    {
      year: 2009,
      text: "• Relocated to Al Ain with new brand name Royal Horizon Foodstuff Trading L.L.C",
      color: "#36c2d6",
    },
    {
      year: 2010,
      text: "• Established Overseas Foodstuff Trading L.L.C.",
      color: "#589FD6",
    },
    {
      year: 2018,
      text: "• Established 1st Retail Outlet.\n• FazaaStores in Ajman on behalf of \nMinistry of Interiors.(Floor area 9000 Sf)",
      color: "#EB417B",
    },
    {
      year: 2019,
      text: "• Established 2nd Outlet of FazaaStores in Ras Al Khaima (Floor area 8000 Sf) .",
      color: "#654A9E",
    },
    {
      year: 2020,
      text: "• Royal Horizon Holding L.L.C has been formed . \n• Established 3rd outlet of FazaaStores in Al Ain.(Floor area 26000 Sf) ",
      color: "#bcc232",
    },
    {
      year: 2021,
      text: "• IHC has been acquired 60% of ownership in RHH through Zee Stores.(Ghitha Holding PJSC) .",
      color: "#654A9E",
    },
    {
      year: 2022,
      text: "• Established 4th Outlet of FazaaStores in Shamkha, Abu Dhabi.(Floor area 25000 Sq ) \n• Launched Ecommerce of FazaaStores.Packing rice processing  Established in DIC.",
      color: "#36c2d6",
    },
    {
      year: 2023,
      text: "• Started FMCG division focusing Private Sector. \n• Established 5th Outlet of FazaaStores in Bani Yas, Abu Dhabi. (Floor area 10000 Sq).",
      color: "#589FD6",
    },
    {
      year: 2024,
      text: "• Established Outlet of Seh Al Mahab, Sharjah. \n• Established Outlet of Abu Dhabi Police Collage Premises.\n• Established Outlet of Al Wathba - Sadr Jail Permises. \n• Established Outlet of Sharjah Police Academy Premises.",
      color: "#EB417B",
    },
     {
      year: 2025,
      text: "• Established RH Cafe Al Ain. \n• Established FazaaStores, Branch Mussafah Abu Dhabi.",
      color: "#654A9E",
    },
  ];
  // ✅ نرتب من 2026 إلى 2018
  const ordered = useMemo(() => {
    return [...EVENTS].sort((a, b) => b.year - a.year);
  }, []);

  // ✅ يبدأ الأنيميشن فقط عند دخول السكشن
  const sectionRef = useRef(null);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setRunning(true);
        else setRunning(false);
      },
      { threshold: 0.25 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="ct-wrap">
      <div className="ct-container">
        <div className="ct-head">
          <h2 className="ct-title">Corporate Milestones</h2>
          <p className="ct-sub">
            Since our inception in 2008, Royal Horizon Holding has evolved
            through a remarkable journey of growth, diversification, and
            strategic expansion. From our humble beginnings as a trading company
            to becoming a recognized multi-division entity serving government
            and private sectors alike, every milestone reflects our commitment
            to innovation, quality, and customer trust.
          </p>
        </div>

        {/* ✅ Infinite loop: نكرر المحتوى مرتين */}
        <div className={`ct-marquee ${running ? "is-running" : ""}`}>
          <div className="ct-marquee__track">
            {/* النسخة الأولى */}
            <div className="ct-marquee__group">
              {ordered.map((e) => (
                <article key={e.year} className="ct-item">
                  <div className="ct-top">
                    <span className="ct-pin" style={{backgroundColor : e.color}} aria-hidden="true" />
                    <div className="ct-year">{e.year}</div>
                  </div>
                  <p className="ct-text">{e.text}</p>
                </article>
              ))}
            </div>

            {/* النسخة الثانية (مطابقة) */}
            <div className="ct-marquee__group" aria-hidden="true">
              {ordered.map((e) => (
                <article key={`dup-${e.year}`} className="ct-item">
                  <div className="ct-top">
                    <span className="ct-pin" style={{backgroundColor : e.color}} aria-hidden="true" />
                    <div className="ct-year">{e.year}</div>
                  </div>
                  <p className="ct-text">{e.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
