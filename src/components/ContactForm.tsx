"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — connect to your preferred form backend (Formspree, etc.)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-primary/10 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-4">&#10003;</div>
        <h3 className="text-xl font-bold text-text-dark mb-2 font-[family-name:var(--font-heading)]">
          Thank you!
        </h3>
        <p className="text-text-muted">
          We&apos;ve received your message and will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-text-dark mb-1.5"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
          placeholder="Your name"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-text-dark mb-1.5"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-text-dark mb-1.5"
        >
          Phone (optional)
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
          placeholder="(555) 000-0000"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-text-dark mb-1.5"
        >
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
          placeholder="Tell us about your bookkeeping needs..."
        />
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white py-3 rounded-full font-semibold text-sm hover:bg-primary-dark transition-all hover:shadow-lg hover:-translate-y-0.5"
      >
        Send Message
      </button>
    </form>
  );
}
