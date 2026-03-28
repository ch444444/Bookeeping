"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

const services = [
  {
    title: "Monthly Bookkeeping",
    description:
      "Stay on top of your finances with a reliable monthly process that keeps your books accurate and tax-ready.",
    features: [
      "Bank & credit cards reconciled monthly",
      "Transactions categorized so you always know where your money's going",
      "Financial statements delivered within 15 business days",
      "Email support for quick money questions",
      "Sales tax filing",
      "Annual 1099 preparation and filing",
      "Full-service A/P & A/R management",
    ],
  },
  {
    title: "Cleanup or Catch-up",
    description:
      "Behind on your books? We fix and organize everything fast so you can file taxes and make decisions with confidence.",
    features: [
      "Rebuild months or years of records",
      "Use advanced tools to import statements",
      "Every transaction reviewed and corrected",
      "Tax-ready handoff for your CPA",
    ],
  },
  {
    title: "Consulting & Training",
    description:
      "Keep bookkeeping in-house with expert setup, training, and periodic reviews to keep your team confident and accurate.",
    features: [
      "Personalized QuickBooks setup and training",
      "Chart of accounts and workflow optimization",
      "Monthly or quarterly accuracy reviews",
      "Option to upgrade to monthly service anytime",
    ],
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
                    <div className="text-primary/30"></div>
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
