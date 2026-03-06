import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  // حاليا Frontend فقط (الـ Backend عند مديرك)
  const onSubmit = (e) => {
    e.preventDefault();
    
    // هنا لاحقاً: POST للـ API (Backend will handle sending)
    alert("Message prepared ✅ ");   
    console.log("Contact Form:", form);

    setForm({ name: "", email: "", subject: "", message: "" });
  };


  return (
    <main className="ct-page">
      {/* Hero */}
      <section className="ct-hero">
        <div className="container">
          <div className="ct-hero__inner">
            <h1 className="ct-hero__title">Contact Us</h1>
            <p className="ct-hero__sub">
              Let’s connect for partnerships, supply opportunities, or general inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="ct-wrap">
        <div className="container">
          <div className="ct-grid">
            {/* Left: Info */}
            <aside className="ct-info">
              <h2 className="ct-h">Get in touch</h2>
              <p className="ct-p">
                We’ll respond as soon as possible. For urgent inquiries, call us directly.
              </p>

              <div className="ct-cards">
                <div className="ct-card">
                  <div className="ct-ico">📍</div>
                  <div>
                    <div className="ct-label">Address</div>
                    <div className="ct-value">
                      Al Ain, UAE <br />
                      {/* عدّل العنوان هنا */}
                      Khalifa Bin Zayed Street (Example)
                    </div>
                  </div>
                </div>

                <div className="ct-card">
                  <div className="ct-ico">📞</div>
                  <div>
                    <div className="ct-label">Phone</div>
                    <div className="ct-value">+971 3 7610106</div>
                  </div>
                </div>

                <div className="ct-card">
                  <div className="ct-ico">✉️</div>
                  <div>
                    <div className="ct-label">Email</div>
                    <div className="ct-value">info@royalhorizon.group</div>
                  </div>
                </div>

                <div className="ct-card">
                  <div className="ct-ico">🕒</div>
                  <div>
                    <div className="ct-label">Working Hours</div>
                    <div className="ct-value">
                      Mon – Fri : 8:00 AM – 4:00 PM <br />
                    </div>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="ct-social">
                <a className="ct-social__btn" href="https://www.facebook.com/RoyalHorizonFazaaStores/" aria-label="Facebook">
                  f
                </a>
                <a className="ct-social__btn" href="" aria-label="Instagram">
                  ig
                </a>
                <a className="ct-social__btn" href="https://ae.linkedin.com/company/rhholding" aria-label="LinkedIn">
                  in
                </a>
              </div>
            </aside>

            {/* Right: Form */}
            <section className="ct-formBox">
              <div className="ct-formHead">
                <h2 className="ct-h">Send a message</h2>
                <p className="ct-p">Fill the form below and we’ll get back to you.</p>
              </div>

              <form className="ct-form" onSubmit={onSubmit}>
                <div className="ct-row">
                  <div className="ct-field">
                    <label>Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="ct-field">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="ct-field">
                  <label>Subject</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={onChange}
                    placeholder="Business inquiry, partnership..."
                    required
                  />
                </div>

                <div className="ct-field">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    placeholder="Write your message..."
                    rows="6"
                    required
                  />
                </div>
                <button className="ct-btn" type="submit">
                  Send Message
                </button>

                {/* <div className="ct-note">
                  * Backend integration will be handled by your manager (API / Email service).
                </div> */}
              </form>
            </section>
          </div>

          {/* Map */}
          <div className="ct-map">
            <div className="ct-map__head">
              <h3 className="ct-map__title">Our Location</h3>
            </div>

            <div className="ct-map__box">
              <iframe
                title="Royal Horizon Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3638.4856027708242!2d55.759807699999996!3d24.224788999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8ab7898a39b49f%3A0xec392b39a687c1e2!2sRoyal%20Horizon%20Holding!5e0!3m2!1sen!2sae!4v1770357039456!5m2!1sen!2sae"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
