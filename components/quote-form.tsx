"use client";

import { useState } from "react";

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
      <div className="field-grid">
        <label>
          Name
          <input
            required
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            name="name"
          />
        </label>
        <label>
          Phone
          <input
            required
            value={form.phone}
            onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
            name="phone"
            inputMode="tel"
          />
        </label>
        <label>
          Email
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            name="email"
          />
        </label>
        <label>
          Service Type
          <select
            value={form.serviceType}
            onChange={(event) =>
              setForm((current) => ({ ...current, serviceType: event.target.value }))
            }
            name="serviceType"
          >
            <option>Deck Building</option>
            <option>Remodeling</option>
            <option>Interior Carpentry</option>
          </select>
        </label>
        <label>
          City
          <input
            required
            value={form.city}
            onChange={(event) => setForm((current) => ({ ...current, city: event.target.value }))}
            name="city"
          />
        </label>
        <label>
          Preferred Contact
          <select
            value={form.preferredContactMethod}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                preferredContactMethod: event.target.value,
              }))
            }
            name="preferredContactMethod"
          >
            <option value="call">Call</option>
            <option value="text">Text</option>
            <option value="email">Email</option>
          </select>
        </label>
      </div>
      <label>
        Project Summary
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
          name="message"
          placeholder="Tell us what you want built, repaired, or updated."
        />
      </label>
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
        <p className="muted">Prefer faster contact? Call now and reference your project details.</p>
      </div>
      {message ? (
        <p className={status === "success" ? "form-success" : "form-error"}>{message}</p>
      ) : null}
    </form>
  );
}
