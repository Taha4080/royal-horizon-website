import { useState } from "react";
import "./GetInTouch.css";

export default function GetInTouch() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function onChange(e) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    // لاحقاً: هنا تربط API مع Backend المدير
    alert("Submitted (Frontend only)");
  }

  return (
    <section className="git-wrap">
      <div className="container">
        <div className="git-grid">
          <div className="git-form">
            <h3>GET IN TOUCH</h3>
            <form onSubmit={onSubmit}>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Name"
              />
              <input
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="Email"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Comments"
                rows="5"
              />
              <button type="submit">SEND</button>
            </form>
          </div>

          <div className="git-map">
            {/* ضع Google Map iframe هنا */}

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3638.4856027708242!2d55.759807699999996!3d24.224788999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8ab7898a39b49f%3A0xec392b39a687c1e2!2sRoyal%20Horizon%20Holding!5e0!3m2!1sen!2sae!4v1770357039456!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map-placeholder">MAP HERE</div>
          </div>
        </div>
      </div>
    </section>
  );
}
