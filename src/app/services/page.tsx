"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

const services = [
  {
    title: "Monthly Bookkeeping",
    description:
      "Our core service keeps your finances accurate and up-to-date every month, so you always know where your business stands.",
    features: [
      "Transaction categorization & entry",
      "Bank & credit card reconciliation",
      "Monthly profit & loss statement",
      "Monthly balance sheet",
      "Accounts receivable tracking",
      "Accounts payable tracking",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Cleanup & Catch-Up",
    description:
      "Behind on your books? No judgment here. We'll get everything organized and up-to-date so you can start fresh.",
    features: [
      "Review & organize past transactions",
      "Reconcile all bank accounts",
      "Fix miscategorized entries",
      "Reconstruct missing records",
      "Prepare prior-period financial statements",
      "Get you tax-ready",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Consulting",
    description:
      "Get expert advice on financial strategy, bookkeeping systems, and best practices to optimize your business.",
    features: [
      "Accounting software setup & training",
      "Chart of accounts optimization",
      "Process & workflow improvement",
      "Financial reporting analysis",
      "Budgeting & forecasting guidance",
      "Tax planning preparation",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

const process = [
  {
    step: "01",
    title: "Free Consultation",
    description:
      "We start with a no-obligation call to understand your business, current bookkeeping situation, and goals.",
  },
  {
    step: "02",
    title: "Custom Proposal",
    description:
      "Based on our conversation, we'll create a tailored plan and transparent quote for your bookkeeping needs.",
  },
  {
    step: "03",
    title: "Onboarding",
    description:
      "We'll get set up with your accounting software, bank feeds, and any existing records to hit the ground running.",
  },
  {
    step: "04",
    title: "Ongoing Support",
    description:
      "Sit back and relax. We handle your books monthly and deliver clear, timely financial reports you can count on.",
  },
];

export default function ServicesPage() {
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
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="mt-6 text-lg text-text-muted leading-relaxed">
              Comprehensive bookkeeping solutions designed to give you clarity,
              confidence, and control over your business finances.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <div className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, i) => (
            <SectionWrapper key={service.title}>
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-text-dark mb-4 font-[family-name:var(--font-heading)]">
                    {service.title}
                  </h2>
                  <p className="text-text-muted leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-text-dark"
                      >
                        <svg
                          className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact">Get Started</Button>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="w-full aspect-square bg-bg-light rounded-2xl flex items-center justify-center border border-gray-100">
                    <div className="text-primary/30">{service.icon}</div>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>

      {/* Process */}
      <SectionWrapper className="py-20 lg:py-28 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark font-[family-name:var(--font-heading)]">
              How It Works
            </h2>
            <p className="mt-4 text-text-muted max-w-2xl mx-auto">
              Getting started is simple. Here&apos;s what to expect when you
              work with us.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-primary/20 mb-4 font-[family-name:var(--font-heading)]">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-text-dark mb-2 font-[family-name:var(--font-heading)]">
                  {item.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-20 lg:py-28 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-[family-name:var(--font-heading)]">
            Ready to Get Your Books in Order?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Schedule a free consultation and let&apos;s find the right
            bookkeeping solution for your business.
          </p>
          <Button
            href="/contact"
            variant="primary"
            className="bg-white !text-primary border-2 border-white hover:bg-white/90"
          >
            Book a Free Call
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
