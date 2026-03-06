import { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "idle", message: "" });

  function onChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending..." });

    try {
      // TODO: مديرك سيضع الـ Backend endpoint هنا
      // مثال:
      // const res = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });
      // if (!res.ok) throw new Error("Failed");

      await new Promise((r) => setTimeout(r, 600)); // mock

      setStatus({ type: "success", message: "Message sent successfully." });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", message: "Failed to send. Please try again." });
    }
  }

  return (
    <div className="rh-contact">
      <h3 className="rh-contact__title">Get in Touch</h3>

      <form onSubmit={onSubmit} className="rh-contact__form">
        <input
          className="rh-input"
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="Name"
          required
        />

        <input
          className="rh-input"
          type="email"
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder="Email"
          required
        />

        <textarea
          className="rh-textarea"
          name="message"
          value={form.message}
          onChange={onChange}
          placeholder="Message"
          rows={5}
          required
        />

        <button className="btn header-btn rh-submit" disabled={status.type === "loading"}>
          {status.type === "loading" ? "Sending..." : "Send"}
        </button>

        {status.type !== "idle" && (
          <p className={`rh-status rh-status--${status.type}`}>{status.message}</p>
        )}
      </form>
    </div>
  );
}
