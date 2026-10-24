"use client";

import { useState } from "react";
import { SERVICES } from "@/data/services";
import { WA_NUMBER } from "@/lib/site";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(SERVICES[0].name);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in your name, email and message.");
      return;
    }
    const text =
      `Hi AA Digital Network, my name is ${name.trim()} (${email.trim()}).\n` +
      `Service: ${service}\nMessage: ${message.trim()}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <form className="form" onSubmit={submit}>
      <label>
        Name
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
      </label>
      <label>
        Email
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" type="email" />
      </label>
      <label>
        Service
        <select value={service} onChange={(e) => setService(e.target.value)}>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Message
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} placeholder="Tell us what you need..." />
      </label>
      {error && <p style={{ color: "#b91c1c" }}>{error}</p>}
      <button className="btn btn-wa" type="submit">
        Send via WhatsApp
      </button>
      <p className="small">
        This form opens WhatsApp with your message ready to send — there is no backend
        email delivery on this site. We aim to reply within 24 hours.
      </p>
    </form>
  );
}
