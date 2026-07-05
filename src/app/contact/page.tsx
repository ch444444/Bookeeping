"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

const CARD = "bg-[#2b5a58]";

function ContactCardForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — connect to your preferred form backend (Formspree, etc.)
    setSubmitted(true);
  };

  const field =
    "w-full px-4 py-3 rounded-lg bg-white text-text-dark placeholder-gray-400 text-sm outline-none focus:ring-2 focus:ring-white/50 transition-all";

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="text-4xl mb-4 text-white">&#10003;</div>
        <h3 className="text-xl font-bold text-white mb-2 font-[family-name:var(--font-heading)]">
          Thank you!
        </h3>
        <p className="text-white/80">
          We&apos;ve received your message and will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="text"
          required
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
          className={field}
          placeholder="First Name"
        />
        <input
          type="text"
          required
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
          className={field}
          placeholder="Last Name"
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={field}
          placeholder="Phone"
        />
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={field}
          placeholder="Email"
        />
      </div>
      <textarea
        required
        rows={5}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className={`${field} resize-none`}
        placeholder="Message"
      />
      <button
        type="submit"
        className="bg-white text-text-dark px-8 py-3 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-white/90 transition-all"
      >
        Send
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="mt-[72px] lg:mt-[88px]">
        <div
          className="relative h-48 sm:h-56 lg:h-64 bg-cover bg-center"
          style={{ backgroundImage: "url('/services-hero.png')" }}
        >
          <div className="absolute inset-0 bg-black/35" />
          <div className="relative h-full flex items-end justify-center pb-8 sm:pb-10 lg:pb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white font-[family-name:var(--font-heading)]">
              Contact
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <SectionWrapper className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Form card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`w-full ${CARD} rounded-2xl p-8 lg:p-12 shadow-xl`}
            >
              <h2 className="text-2xl font-bold text-white mb-6 font-[family-name:var(--font-heading)]">
                Contact Us
              </h2>
              <ContactCardForm />
            </motion.div>

            {/* Info card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`w-full ${CARD} rounded-2xl p-8 lg:p-12 shadow-xl`}
            >
              <h3 className="text-2xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">
                Phone
              </h3>
              <a
                href="tel:+18473051323"
                className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (847) 305-1323
              </a>

              <h3 className="text-2xl font-bold text-white mt-10 mb-4 font-[family-name:var(--font-heading)]">
                Email
              </h3>
              <a
                href="mailto:vasili@northshorebookkeeping.com"
                className="flex items-center gap-3 text-white/90 hover:text-white transition-colors break-all"
              >
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                vasili@northshorebookkeeping.com
              </a>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
