// Career.jsx
import { useEffect, useMemo, useState } from "react";
import "./Career.css";

const JOBS = [
  {
    id: "RHJP0039",
    title: "Purchase Manager",
    dept: "Purchases",
    type: "Full-time",
    location: "Al Ain, UAE",
    level: "Mid",
    desc: " Execute all purchasing operations for the group as per approved policies and contracts.",
    requirements: [
      "5–8 years of relevant industry experience.",
      "Bachelor's degree in Supply Chain or Business Administration.",
      "Valid UAE Driving License.",
    ],
  },
  {
    id: "RHJP0041",
    title: "Driver",
    dept: "Logistics",
    type: "Full-time",
    location: "Abu Dhabi, UAE",
    level: "Mid",
    desc: [ "  Map out driving routes ahead of time to determine the most expedient trip.",
          "Transport finished goods and raw materials over land to and from manufacturing plants or retail and distribution centers.",
        ],
    requirements: [
      "School / high school certificate.",
      "A minimum of 2 years of heavy vehicle driving experience.",
      "Valid manual UAE driving license.",
      "Strong verbal and written communication skills.",
      "Ability to meet tight deadlines and work for extended hours.",
    ],
  },
  {
    id: "rh-003",
    title: "Procurement Officer",
    dept: "Procurement",
    type: "Full-time",
    location: "Al Ain, UAE",
    level: "Mid",
    desc: "Handle sourcing, vendor management, purchase orders, and coordination with finance and warehouses.",
    requirements: [
      "Strong vendor communication skills",
      "Experience with ERP is a plus (Odoo/Gravity)",
      "Good Excel skills",
    ],
  },
  {
    id: "rh-004",
    title: "Procurement Officer",
    dept: "Procurement",
    type: "Full-time",
    location: "Al Ain, UAE",
    level: "Mid",
    desc: "Handle sourcing, vendor management, purchase orders, and coordination with finance and warehouses.",
    requirements: [
      "Strong vendor communication skills",
      "Experience with ERP is a plus (Odoo/Gravity)",
      "Good Excel skills",
    ],
  },
  {
    id: "rh-005",
    title: "Procurement Officer",
    dept: "Procurement",
    type: "Full-time",
    location: "Al Ain, UAE",
    level: "Mid",
    desc: "Handle sourcing, vendor management, purchase orders, and coordination with finance and warehouses.",
    requirements: [
      "Strong vendor communication skills",
      "Experience with ERP is a plus (Odoo/Gravity)",
      "Good Excel skills",
    ],
  },
  {
    id: "rh-006",
    title: "Procurement Officer",
    dept: "Procurement",
    type: "Full-time",
    location: "Al Ain, UAE",
    level: "Mid",
    desc: "Handle sourcing, vendor management, purchase orders, and coordination with finance and warehouses.",
    requirements: [
      "Strong vendor communication skills",
      "Experience with ERP is a plus (Odoo/Gravity)",
      "Good Excel skills",
    ],
  },
  {
    id: "rh-007",
    title: "Accountant",
    dept: "Finance",
    type: "Full-time",
    location: "Al Ain, UAE",
    level: "Junior",
    desc: "Manage day-to-day accounting entries, reconciliations, and support monthly closing activities.",
    requirements: [
      "Bachelor’s degree in Accounting/Finance",
      "Attention to detail",
      "ERP experience is a plus",
    ],
  },
];

// ✅ ضع رابط الـ Apps Script Web App هنا
const SCRIPT_URL = "#";

export default function Career() {
  const [query, setQuery] = useState("");
  const [dept, setDept] = useState("All");
  const [type, setType] = useState("All");
  const [location, setLocation] = useState("All");

  const [openJob, setOpenJob] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const [app, setApp] = useState({
    name: "",
    email: "",
    phone: "",
    cvFile: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const filters = useMemo(() => {
    const depts = ["All", ...Array.from(new Set(JOBS.map((j) => j.dept)))];
    const types = ["All", ...Array.from(new Set(JOBS.map((j) => j.type)))];
    const locs = ["All", ...Array.from(new Set(JOBS.map((j) => j.location)))];
    return { depts, types, locs };
  }, []);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return JOBS.filter((j) => {
      const matchQuery =
        !q ||
        j.title.toLowerCase().includes(q) ||
        j.dept.toLowerCase().includes(q) ||
        j.location.toLowerCase().includes(q) ||
        j.desc.toLowerCase().includes(q);

      const matchDept = dept === "All" || j.dept === dept;
      const matchType = type === "All" || j.type === type;
      const matchLoc = location === "All" || j.location === location;

      return matchQuery && matchDept && matchType && matchLoc;
    });
  }, [query, dept, type, location]);

  useEffect(() => setShowAll(false), [query, dept, type, location]);

  const visibleList = useMemo(() => (showAll ? list : list.slice(0, 6)), [list, showAll]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpenJob(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (openJob) {
      setApp({ name: "", email: "", phone: "", cvFile: null });
      setIsSubmitting(false);
      setSuccessMsg("");
    }
  }, [openJob]);

  const resetFilters = () => {
    setQuery("");
    setDept("All");
    setType("All");
    setLocation("All");
    setShowAll(false);
  };

  const onAppChange = (e) => {
    const { name, value } = e.target;
    setApp((p) => ({ ...p, [name]: value }));
  };

  const onCvChange = (e) => {
    const file = e.target.files?.[0] || null;
    setApp((p) => ({ ...p, cvFile: file }));
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result).split(",")[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!openJob) return;

    if (!app.name || !app.email || !app.phone) {
      alert("Please fill in Name, Email, and Phone.");
      return;
    }
    if (!app.cvFile) {
      alert("Please upload your CV file.");
      return;
    }
    if (!SCRIPT_URL || SCRIPT_URL === "SCRIPT_URL_HERE") {
      alert("Please set SCRIPT_URL in Career.jsx (Apps Script Web App URL).");
      return;
    }

    try {
      setIsSubmitting(true);
      setSuccessMsg("");

      const fileBase64 = await toBase64(app.cvFile);

      const payload = {
        jobId: openJob.id,
        jobTitle: openJob.title,
        dept: openJob.dept,
        location: openJob.location,
        type: openJob.type,

        name: app.name,
        email: app.email,
        phone: app.phone,

        fileName: app.cvFile.name,
        fileType: app.cvFile.type || "application/octet-stream",
        fileBase64,
      };

      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error("Upload failed");

      setSuccessMsg("✅ Application submitted successfully! Your CV has been uploaded.");
      setApp({ name: "", email: "", phone: "", cvFile: null });
    } catch (err) {
      console.error(err);
      alert("Something went wrong while submitting. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="cr-page">
      {/* HERO */}
      <section className="cr-hero">
        <div className="container">
          <div className="cr-hero__inner">
            <h1 className="cr-hero__title">Careers</h1>
            <p className="cr-hero__sub">
              Join our team and grow with Royal Horizon. Explore current openings and apply today.
            </p>

            <a
              className="cr-linkedin"
              href="https://ae.linkedin.com/company/rhholding"
              target="_blank"
              rel="noreferrer"
              aria-label="Open LinkedIn company page"
            >
              View Company on LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Filters */}
          <div className="cr-tools">
            <div className="cr-search">
              <span className="cr-search__ico">🔎</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search job title, department, location..."
              />
            </div>

            <div className="cr-filters">
              <select value={dept} onChange={(e) => setDept(e.target.value)}>
                {filters.depts.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>

              <select value={type} onChange={(e) => setType(e.target.value)}>
                {filters.types.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>

              <select value={location} onChange={(e) => setLocation(e.target.value)}>
                {filters.locs.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>

              <button className="cr-btn cr-btn--ghost" onClick={resetFilters} type="button">
                Reset
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="cr-wrap">
        <div className="container">
          <div className="cr-head">
            <h2 className="cr-title">Open Positions</h2>
            <div className="cr-count">
              {list.length} job{list.length === 1 ? "" : "s"} found
            </div>
          </div>

          {list.length === 0 ? (
            <div className="cr-empty">
              <h3>No jobs match your search.</h3>
              <p>Try clearing filters or searching with different keywords.</p>
              <button className="cr-btn cr-btn--ghost" onClick={resetFilters} type="button">
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              <div className="cr-grid">
                {visibleList.map((job) => (
                  <article key={job.id} className="cr-card">
                    <div className="cr-card__top">
                      <div>
                        <h3 className="cr-card__title">{job.title}</h3>
                        <div className="cr-tags">
                          <span className="cr-tag">{job.dept}</span>
                          <span className="cr-tag">{job.type}</span>
                          <span className="cr-tag">{job.location}</span>
                          <span className="cr-tag cr-tag--light">{job.level}</span>
                        </div>
                      </div>

                      <button className="cr-btn" onClick={() => setOpenJob(job)} type="button">
                        View & Apply
                      </button>
                    </div>

                    <p className="cr-card__desc">{job.desc}</p>

                    <ul className="cr-req">
                      {job.requirements.slice(0, 2).map((r, idx) => (
                        <li key={idx}>{r}</li>
                      ))}
                    </ul>

                    <div className="cr-card__foot">
                      <span className="cr-id">Job ID: {job.id}</span>
                      <button className="cr-link" onClick={() => setOpenJob(job)} type="button">
                        Details <span aria-hidden="true">→</span>
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              {list.length > 6 && (
                <div className="cr-moreWrap">
                  {!showAll ? (
                    <button className="cr-btn" onClick={() => setShowAll(true)} type="button">
                      Show More Jobs
                    </button>
                  ) : (
                    <button className="cr-btn" onClick={() => setShowAll(false)} type="button">
                      Show Less
                    </button>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="cr-cta">
        <div className="container">
          <div className="cr-cta__box">
            <div>
              <h3>Didn’t find a match?</h3>
              <p>Send your CV and we’ll reach out when a suitable role becomes available.</p>
            </div>
            <a className="cr-btn" href="mailto:hr@royal-horizon.com">
              Send CV
            </a>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {openJob && (
        <div className="cr-modal" role="dialog" aria-modal="true">
          <div className="cr-modal__backdrop" onClick={() => setOpenJob(null)} />
          <div className="cr-modal__card">
            <div className="cr-modal__head">
              <div>
                <h3 className="cr-modal__title">{openJob.title}</h3>
                <div className="cr-tags">
                  <span className="cr-tag">{openJob.dept}</span>
                  <span className="cr-tag">{openJob.type}</span>
                  <span className="cr-tag">{openJob.location}</span>
                  <span className="cr-tag cr-tag--light">{openJob.level}</span>
                </div>
              </div>

              <button className="cr-x" onClick={() => setOpenJob(null)} aria-label="Close" type="button">
                ✕
              </button>
            </div>

            <div className="cr-modal__body">
              <p className="cr-modal__desc">{openJob.desc}</p>

              <div className="cr-modal__meta">
                <div className="cr-id">Job ID: {openJob.id}</div>
              </div>

              <h4 className="cr-modal__h">Requirements</h4>
              <ul className="cr-modal__list">
                {openJob.requirements.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>

              <h4 className="cr-modal__h">Apply Now</h4>

              <form className="cr-form" onSubmit={onSubmit}>
                <div className="cr-form__row">
                  <div className="cr-field">
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      value={app.name}
                      onChange={onAppChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="cr-field">
                    <label htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      value={app.phone}
                      onChange={onAppChange}
                      placeholder="e.g. +971 50 000 0000"
                      required
                    />
                  </div>
                </div>

                <div className="cr-form__row">
                  <div className="cr-field">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={app.email}
                      onChange={onAppChange}
                      placeholder="you@email.com"
                      required
                    />
                  </div>

                  <div className="cr-field">
                    <label htmlFor="cv">Upload CV</label>
                    <input id="cv" type="file" accept=".pdf,.doc,.docx" onChange={onCvChange} required />
                    {app.cvFile && <small className="cr-file">Selected: {app.cvFile.name}</small>}
                  </div>
                </div>

                {successMsg && <div className="cr-success">{successMsg}</div>}

                <div className="cr-form__actions">
                  <button className="cr-btn" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>

                  <button className="cr-btn cr-btn--ghost" type="button" onClick={() => setOpenJob(null)}>
                    Close
                  </button>
                </div>

                <p className="cr-note">
                  By submitting, your CV will be uploaded to our HR drive for review.
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
