import { useMemo, useState } from "react";
import "./OrgChart.css";

export default function OrgChart() {
  const [activeDept, setActiveDept] = useState("Wholesale & Contracts");

  const data = useMemo(
    () => ({
      top: {
        title: "Royal Horizon Holding LLC",
        sub: "Group Overview",
      },
      leadership: [
        { role: "BOD Chairman", name: "Suhail Nekhaira" },
        { role: "CEO", name: "Alaa Mikdadi" },
        { role: "External Auditor", name: "Independent Audit" },
      ],
      departments: [
        {
          name: "Wholesale & Contracts",
          short: "Wholesale",
          desc: "Government contracts, wholesale distribution, key accounts.",
          teams: [
            { title: "Key Accounts", lead: "Account Manager", note: "Gov & corporate clients" },
            { title: "Contracts", lead: "Contracts Lead", note: "Tendering & compliance" },
            { title: "Warehousing", lead: "Warehouse Lead", note: "Storage & fulfillment" },
            { title: "Logistics", lead: "Logistics Lead", note: "Delivery & fleet coordination" },
          ],
        },
        {
          name: "Retail",
          short: "Retail",
          desc: "Retail operations, store performance, customer experience.",
          teams: [
            { title: "Store Operations", lead: "Operations Lead", note: "Daily store performance" },
            { title: "Merchandising", lead: "Merch Lead", note: "Planograms & promotions" },
            { title: "Customer Service", lead: "CS Lead", note: "Service quality & feedback" },
            { title: "Inventory Control", lead: "Inventory Lead", note: "Stock accuracy & shrinkage" },
          ],
        },
        {
          name: "Marketing, Sales & Purchase",
          short: "Marketing",
          desc: "Brand building, sales growth, purchasing & supplier management.",
          teams: [
            { title: "Marketing", lead: "Marketing Lead", note: "Campaigns & brand identity" },
            { title: "Sales", lead: "Sales Lead", note: "B2B/B2C growth strategy" },
            { title: "Purchasing", lead: "Purchase Lead", note: "Suppliers & procurement" },
            { title: "Pricing", lead: "Pricing Analyst", note: "Margin & competitiveness" },
          ],
        },
        {
          name: "Supporting Services",
          short: "Support",
          desc: "Finance, HR, IT, quality, security and internal operations.",
          teams: [
            { title: "HR & Administration", lead: "HR Lead", note: "People & policies" },
            { title: "Finance & Accounting", lead: "Finance Lead", note: "Reporting & audits" },
            { title: "IT", lead: "IT Lead", note: "Systems & support" },
            { title: "Quality", lead: "Quality Lead", note: "Standards & compliance" },
            { title: "Security", lead: "Security Lead", note: "Safety & assets protection" },
          ],
        },
      ],
      teamLeaders: [
        { name: "HR Lead", title: "HR & Administration", desc: "Recruitment, policies, employee services." },
        { name: "IT Lead", title: "IT & Systems", desc: "Business systems, support, security practices." },
        { name: "Finance Lead", title: "Finance & Accounting", desc: "Budgeting, reporting, compliance." },
        { name: "Operations Lead", title: "Retail Operations", desc: "Store performance, service, KPIs." },
        { name: "Purchase Lead", title: "Purchasing", desc: "Suppliers, sourcing, procurement planning." },
        { name: "Logistics Lead", title: "Logistics", desc: "Fleet, delivery execution, routing." },
      ],
    }),
    []
  );

  const currentDept = data.departments.find((d) => d.name === activeDept) || data.departments[0];

  return (
    <section className="org-sec" aria-label="Organizational Chart and Team Leaders">
      <div className="container">
        {/* Header */}
        <div className="org-head">
          <h2 className="org-title">Organizational Chart</h2>
          <p className="org-sub">
            A structured view of our leadership and core departments—built to deliver reliable operations and
            high-quality service across the UAE.
          </p>
        </div>

        {/* Chart */}
        <div className="org-chart">
          {/* Top node */}
          <div className="org-node org-node--top">
            <div className="org-node__kicker">Company Structure</div>
            <div className="org-node__title">{data.top.title}</div>
            <div className="org-node__sub">{data.top.sub}</div>
          </div>

          {/* Lines */}
          <div className="org-lines">
            <span className="org-line org-line--down" />
            <span className="org-line org-line--across" />
          </div>

          {/* Leadership row */}
          <div className="org-row org-row--leaders">
            {data.leadership.map((p) => (
              <div key={p.role} className="org-pill">
                <div className="org-pill__role">{p.role}</div>
                <div className="org-pill__name">{p.name}</div>
              </div>
            ))}
          </div>

          {/* Departments */}
          <div className="org-depts">
            <div className="org-tabs">
              {data.departments.map((d) => (
                <button
                  key={d.name}
                  type="button"
                  className={`org-tab ${activeDept === d.name ? "is-active" : ""}`}
                  onClick={() => setActiveDept(d.name)}
                >
                  <span className="org-tab__dot" />
                  {d.name}
                </button>
              ))}
            </div>

            <div className="org-panel">
              <div className="org-panel__head">
                <div>
                  <h3 className="org-panel__title">{currentDept.name}</h3>
                  <p className="org-panel__desc">{currentDept.desc}</p>
                </div>
                <div className="org-badge">{currentDept.short}</div>
              </div>

              <div className="org-teams">
                {currentDept.teams.map((t) => (
                  <div key={t.title} className="org-team">
                    <div className="org-team__title">{t.title}</div>
                    <div className="org-team__lead">{t.lead}</div>
                    <div className="org-team__note">{t.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team Leaders */}
        <div className="org-head org-head--space">
          <h2 className="org-title">Team Leaders</h2>
          <p className="org-sub">
            Key team leaders across departments supporting growth, operations, and service excellence.
          </p>
        </div>

        <div className="org-leadersGrid">
          {data.teamLeaders.map((m) => (
            <article key={m.name} className="org-leaderCard">
              <div className="org-leaderCard__top">
                <div className="org-avatar" aria-hidden="true">
                  {m.name.split(" ").map((x) => x[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <div className="org-leaderCard__name">{m.name}</div>
                  <div className="org-leaderCard__role">{m.title}</div>
                </div>
              </div>

              <p className="org-leaderCard__desc">{m.desc}</p>

              <div className="org-leaderCard__actions">
                <a className="org-miniBtn" href="/contact">
                  Contact
                </a>
                <a className="org-miniBtn org-miniBtn--ghost" href="/career">
                  Join Team
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
