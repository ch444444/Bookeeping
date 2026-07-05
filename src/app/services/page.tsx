"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

const detailedServices = [
  {
    title: "Routine Bookkeeping",
    fullWidth: false,
    icon: (
      <svg
        className="w-12 h-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3.5" y="4" width="9" height="16" rx="1.5" />
        <rect x="5.5" y="6.5" width="5" height="2" rx="0.5" />
        <path d="M6 12h.01M8 12h.01M10 12h.01M6 15h.01M8 15h.01M10 15h.01M6 18h.01M8 18h.01M10 18h.01" />
        <path d="M20.5 5.5l-6.5 6.5" />
        <path d="M18 3l2.5 2.5" />
        <path d="M14 12l-1.2 2.7 2.7-1.2" />
      </svg>
    ),
    paragraphs: [
      "We provide bookkeeping and QuickBooks bookkeeping services throughout the year depending on your preference of frequency. We provide services as frequently as once a week, or as slowly as once a year — this depends on what you're looking for. Typically our clients prefer the monthly schedule.",
      "We find that every business has unique complexities, and this is okay! We will work with you to examine your needs and provide you with a customized service plan that works best for you and your business. Here is a list of common tasks we perform for our clients:",
    ],
    bullets: [
      "Recording and categorizing all transactions",
      "Reconciling the transactions to the bank and credit card statements",
      "Tying A/R, A/P, and/or loans",
      "Sending financial reports to the owner via email",
    ],
    footer:
      "For all routine bookkeeping we will agree on a fixed price based on the volume and complexity of your business.",
  },
  {
    title: "QuickBooks Cleanup",
    fullWidth: false,
    icon: (
      <svg
        className="w-12 h-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
        <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
      </svg>
    ),
    paragraphs: [
      "If your business has months or years of bookkeeping left undone, or if you simply need things cleaned up, you've come to the right place. Typically this kind of work is requested because of a tax return deadline or because of a bank's demands.",
      "With our PDF reader, we are able to take your old bank statements, convert them to Excel, and then import them into your QuickBooks. By eliminating the manual entry aspect of adding transactions, we are able to reduce your costs dramatically.",
      "For all cleanup and catchup work, we charge a fixed price based on the volume and complexity of the work.",
    ],
    bullets: [],
    footer: null,
  },
  {
    title: "Ongoing Support",
    fullWidth: true,
    icon: (
      <svg
        className="w-12 h-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 4.5l4 7a1 1 0 01-.87 1.5H8.87A1 1 0 018 11.5l4-7z" />
        <path d="M12 7.8v2.1" />
        <path d="M12 11.5h.01" />
        <path d="M4 20v-2.3" />
        <path d="M4 17.7c0-1.4.3-2 .9-1.4l1.8 1.8" />
        <path d="M5 14.8c0-1 .8-1.3 1.4-.6l2 2.2c.4.5 1 .8 1.7.8H12" />
        <path d="M20 20v-2.3" />
        <path d="M20 17.7c0-1.4-.3-2-.9-1.4l-1.8 1.8" />
        <path d="M19 14.8c0-1-.8-1.3-1.4-.6l-2 2.2c-.4.5-1 .8-1.7.8H12" />
      </svg>
    ),
    paragraphs: [
      "Aside from looking for personal business consultant for you small bussiness or is your business small enough that you are able to do the bookkeeping on your own? If so, that's great! We're helping small business accounting services and I encourage business owners to do the bookkeeping if they are able and willing. If this is you, then perhaps you need support/training along the way. If you have a problem or question, we want to be able to support you in any way that we can.",
      "For ongoing support, we charge at our hourly rate. Contact us for more information about the pricing.",
    ],
    bullets: [],
    footer: null,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-bg-light to-bg-muted pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-text-dark font-[family-name:var(--font-heading)]">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="mt-6 text-lg text-text-muted leading-relaxed">
              Comprehensive bookkeeping solutions designed to give you clarity,
              confidence, and control over your business finances.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Cards */}
      <SectionWrapper className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {detailedServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`bg-bg-light rounded-2xl p-8 lg:p-10${
                  service.fullWidth ? " lg:col-span-2" : ""
                }`}
              >
                <h2 className="text-2xl font-semibold text-text-dark text-center mb-6 font-[family-name:var(--font-heading)]">
                  {service.title}
                </h2>
                <div className="space-y-4 text-text-muted leading-relaxed">
                  {service.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                  {service.bullets.length > 0 && (
                    <ul className="space-y-3 pt-1">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span className="mt-2 w-2 h-2 rounded-full bg-text-dark flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {service.footer && <p className="pt-4">{service.footer}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
