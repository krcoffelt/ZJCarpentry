"use client";

import { useState } from "react";

const serviceOptions = ["Deck Building", "Remodeling", "Interior Carpentry"] as const;
const contactOptions = [
  { value: "call", label: "Call" },
  { value: "text", label: "Text" },
  { value: "email", label: "Email" },
] as const;

const initialState = {
  name: "",
  phone: "",
  email: "",
  serviceType: "Deck Building",
  city: "",
  message: "",
  preferredContactMethod: "call",
};

export function QuoteForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const payload = {
      ...form,
      pageSource: typeof window !== "undefined" ? window.location.pathname : "/contact",
      utmSource: new URLSearchParams(window.location.search).get("utm_source") ?? undefined,
      utmMedium: new URLSearchParams(window.location.search).get("utm_medium") ?? undefined,
      utmCampaign: new URLSearchParams(window.location.search).get("utm_campaign") ?? undefined,
      submittedAt: new Date().toISOString(),
      company: "",
    };

    const response = await fetch("/api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = (await response.json()) as { message: string };

    if (!response.ok) {
      setStatus("error");
      setMessage(result.message || "There was a problem sending your request.");
      return;
    }

    setStatus("success");
    setMessage(result.message || "Thanks. Your quote request has been sent.");
    setForm(initialState);
  }

  return (
    <form className="quote-form" id="quote-form" onSubmit={onSubmit}>
      <div className="quote-form-header">
        <div>
          <p className="quote-form-eyebrow">Fast Quote Request</p>
          <h3>Tell us about the project.</h3>
        </div>
        <p className="quote-form-intro">
          Short details are enough to get started. We&apos;ll follow up to confirm
          scope, timing, and the best next step.
        </p>
      </div>

      <div className="quote-form-trust">
        <span>Kansas City metro</span>
        <span>Fast follow-up</span>
        <span>Decks, remodels, and interior work</span>
      </div>

      <div className="quote-form-section">
        <div className="quote-form-section-heading">
          <p className="quote-form-kicker">Project Type</p>
          <p className="quote-form-helper">Choose the kind of work you need.</p>
        </div>
        <div className="option-grid" role="radiogroup" aria-label="Service Type">
          {serviceOptions.map((option) => (
            <button
              key={option}
              className={`option-pill${form.serviceType === option ? " option-pill-active" : ""}`}
              onClick={() => setForm((current) => ({ ...current, serviceType: option }))}
              type="button"
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="quote-form-section">
        <div className="field-grid">
          <label className="form-field">
            <span>Full Name</span>
            <input
              required
              autoComplete="name"
              placeholder="Your name"
              value={form.name}
              onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
              name="name"
            />
          </label>
          <label className="form-field">
            <span>Phone</span>
            <input
              required
              autoComplete="tel"
              placeholder="(913) 555-1234"
              value={form.phone}
              onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
              name="phone"
              inputMode="tel"
            />
          </label>
          <label className="form-field">
            <span>Email</span>
            <input
              required
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
              name="email"
            />
          </label>
          <label className="form-field">
            <span>City</span>
            <input
              required
              autoComplete="address-level2"
              placeholder="Kansas City, Overland Park, Leawood..."
              value={form.city}
              onChange={(event) => setForm((current) => ({ ...current, city: event.target.value }))}
              name="city"
            />
          </label>
        </div>
      </div>

      <div className="quote-form-section">
        <div className="quote-form-section-heading">
          <p className="quote-form-kicker">Best Way To Reach You</p>
          <p className="quote-form-helper">Pick whichever gets the fastest response.</p>
        </div>
        <div className="option-grid option-grid-compact" role="radiogroup" aria-label="Preferred Contact">
          {contactOptions.map((option) => (
            <button
              key={option.value}
              className={`option-pill${form.preferredContactMethod === option.value ? " option-pill-active" : ""}`}
              onClick={() =>
                setForm((current) => ({
                  ...current,
                  preferredContactMethod: option.value,
                }))
              }
              type="button"
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <label className="form-field form-field-full">
        <span>Project Summary</span>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
          name="message"
          placeholder="Example: Replace our back deck and stairs, or finish a basement room with flooring and trim."
        />
        <small>Include the space, the type of work, and anything important about timing.</small>
      </label>

      <input name="serviceType" type="hidden" value={form.serviceType} />
      <input name="preferredContactMethod" type="hidden" value={form.preferredContactMethod} />
      <input
        autoComplete="off"
        className="honeypot"
        name="company"
        tabIndex={-1}
        onChange={() => undefined}
      />
      <div className="form-actions">
        <button className="btn btn-primary" type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Get Quote"}
        </button>
        <p className="muted">
          Prefer faster contact? Call now and reference the project details you entered here.
        </p>
      </div>
      {message ? (
        <p aria-live="polite" className={status === "success" ? "form-success" : "form-error"}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
