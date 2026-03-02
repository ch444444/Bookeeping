"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-bg-light to-bg-muted pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-text-dark font-[family-name:var(--font-heading)]">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="mt-6 text-lg text-text-muted leading-relaxed">
              Ready to take control of your finances? Reach out and let&apos;s
              talk about how we can help your business thrive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <SectionWrapper className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-text-dark mb-2 font-[family-name:var(--font-heading)]">
                Send Us a Message
              </h2>
              <p className="text-text-muted mb-8">
                Fill out the form below and we&apos;ll get back to you within 24
                hours.
              </p>
              <ContactForm />
            </div>

            {/* Info + Calendly */}
            <div>
              <h2 className="text-2xl font-bold text-text-dark mb-2 font-[family-name:var(--font-heading)]">
                Book a Free Call
              </h2>
              <p className="text-text-muted mb-8">
                Prefer to chat? Schedule a free 30-minute consultation at a time
                that works for you.
              </p>

              {/* Calendly Placeholder */}
              <div className="bg-bg-light rounded-2xl p-8 border border-gray-100 mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <h3 className="font-bold text-text-dark font-[family-name:var(--font-heading)]">
                    Schedule Online
                  </h3>
                </div>
                <p className="text-text-muted text-sm mb-4">
                  Click below to book a free consultation through our scheduling
                  tool.
                </p>
                <a
                  href="#"
                  className="inline-block bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary-dark transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                  Book on Calendly
                </a>
                <p className="text-xs text-text-muted mt-3">
                  (Replace this with your Calendly embed or link)
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-text-dark font-[family-name:var(--font-heading)]">
                  Other Ways to Reach Us
                </h3>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-primary"
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
                  </div>
                  <div>
                    <p className="font-semibold text-text-dark text-sm">Phone</p>
                    <a
                      href="tel:+15551234567"
                      className="text-text-muted text-sm hover:text-primary transition-colors"
                    >
                      (555) 123-4567
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-primary"
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
                  </div>
                  <div>
                    <p className="font-semibold text-text-dark text-sm">Email</p>
                    <a
                      href="mailto:hello@bookeeping.com"
                      className="text-text-muted text-sm hover:text-primary transition-colors"
                    >
                      hello@bookeeping.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-text-dark text-sm">
                      Location
                    </p>
                    <p className="text-text-muted text-sm">
                      Your City, State (Remote services available nationwide)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
