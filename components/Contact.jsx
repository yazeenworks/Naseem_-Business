"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, ArrowUpRight, Copy } from "lucide-react";
import { email, services, phones } from "../lib/content";
export default function Contact({ service, setService }) {
  const [draft, setDraft] = useState("");
  const [feedback, setFeedback] = useState("");
  function prepare(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body =
      "Hello Naseem Business Services,\n\n" +
      f.get("message").trim() +
      "\n\nService: " +
      service +
      "\nName: " +
      f.get("name").trim() +
      "\nEmail: " +
      f.get("email");
    setDraft(body);
    setFeedback(
      "Your email draft is ready. Review it in your email app and press Send.",
    );
    window.location.href =
      "mailto:" +
      email +
      "?subject=" +
      encodeURIComponent("Consultation inquiry — " + service) +
      "&body=" +
      encodeURIComponent(body);
  }
  return (
    <section id="contact" className="section wrap contact">
      <div>
        <div className="eyebrow">
          <i />
          CONTACT & LOCATION
        </div>
        <h2>
          Let’s talk
          <br />
          <em>business.</em>
        </h2>
        <p>
          Tell us what you’re planning. Our team in New Rayyan can help you take
          the next step.
        </p>
        <div className="contact-row">
          <MapPin />
          <div>
            <small>VISIT OUR OFFICE</small>
            <a
              href="https://www.google.com/maps/search/?api=1&query=New+Rayyan+Al+Shafi+Qatar"
              target="_blank"
              rel="noreferrer"
            >
              New Rayyan Al Shafi, Qatar <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        <div className="contact-row">
          <Phone />
          <div>
            <small>CALL OUR TEAM</small>
            {phones.map((n) => (
              <a key={n} href={"tel:" + n.replaceAll(" ", "")}>
                {n}
              </a>
            ))}
          </div>
        </div>
        <div className="contact-row">
          <Mail />
          <div>
            <small>EMAIL US</small>
            <a href={"mailto:" + email}>{email}</a>
          </div>
        </div>
      </div>
      <form
        id="inquiry"
        onSubmit={prepare}
        onChange={() => {
          setDraft("");
          setFeedback("");
        }}
      >
        <h3>Request a free consultation</h3>
        <label>
          Your name
          <input
            name="name"
            placeholder="Full name"
            autoComplete="name"
            required
            maxLength="100"
            pattern=".*\S.*"
          />
        </label>
        <label>
          Email address
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            required
            maxLength="150"
          />
        </label>
        <label>
          Service of interest
          <select
            required
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="" disabled>
              Select a service
            </option>
            {[...services.map((s) => s.name), "General inquiry"].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label>
          How can we help?
          <textarea
            name="message"
            required
            maxLength="1200"
            placeholder="Tell us a little about your requirements"
            rows="3"
          />
        </label>
        <button className="btn primary" type="submit">
          Prepare email inquiry <ArrowUpRight size={17} />
        </button>
        <p className="form-note">
          Opens your email app with your inquiry filled in.
        </p>
        <p role="status">{feedback}</p>
        {draft && (
          <button
            type="button"
            className="copy"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(draft);
                setFeedback(
                  "Inquiry copied. Paste it into an email to " + email + ".",
                );
              } catch {
                setFeedback("Select and copy the draft below.");
              }
            }}
          >
            <Copy size={15} /> Copy inquiry
          </button>
        )}
        {draft && (
          <details>
            <summary>View email draft</summary>
            <pre>{draft}</pre>
          </details>
        )}
      </form>
    </section>
  );
}
