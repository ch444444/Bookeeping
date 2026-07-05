"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

const services = [
  {
    id: "ongoing",
    title: "Ongoing QuickBooks Bookkeeping",
    tagline: "Monthly transaction management and financial reporting.",
    description:
      "We handle your monthly transactions and reporting so your books stay current and accurate all year long. You'll always know exactly where your business stands.",
    features: [
      "Monthly transaction downloads and categorization",
      "Financial statements emailed to you each period",
      "Regular financial status updates and communication",
      "Liaison between you and your accountant",
    ],
    pricing: "Fixed monthly rate based on your volume and complexity.",
  },
  {
    id: "cleanup",
    title: "QuickBooks Cleanup",
    tagline: "Remediation for backlogged or disorganized records.",
    description:
      "Books in disarray? We clean up backlogged or disorganized records and get everything accurate, reconciled, and tax-ready.",
    features: [
      "Multi-month or multi-year cleanup for tax-filing readiness",
      "Automated PDF bank-statement conversion into QuickBooks",
      "Complete transaction verification and accounting",
    ],
    pricing: "Fixed project rate based on scope.",
  },
  {
    id: "consulting",
    title: "Consulting & Training in QuickBooks",
    tagline: "Expert guidance and skill-building support.",
    description:
      "Prefer to keep bookkeeping in-house? We provide expert guidance and hands-on training so you and your team stay confident and accurate.",
    features: [
      "Problem-solving consultation",
      "QuickBooks and accounting training for owners",
      "Books accuracy review",
    ],
    pricing: "Hourly rate — contact for details.",
  },
  {
    id: "catchup",
    title: "Bookkeeping Catch-up",
    tagline: "Fallen behind? We catch you up fast.",
    description:
      "Behind on your books? We catch you up quickly so you can file taxes and make decisions with confidence.",
    features: [
      "Rebuild months or years of records",
      "Bulk statement import to reduce manual entry",
      "Every transaction reviewed and corrected",
      "Tax-ready handoff for your CPA",
    ],
    pricing: "Fixed price based on volume and complexity.",
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
              <span className="text-primary">Services</span>
            </h1>
            <p className="mt-6 text-lg text-text-muted leading-relaxed">
              Professional bookkeeping and QuickBooks solutions to keep your
              finances clean, current, and stress-free.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Cards Grid */}
      <SectionWrapper className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-bg-light rounded-2xl p-6 border border-gray-100 flex flex-col"
              >
                <h3 className="text-lg font-bold text-text-dark mb-2 font-[family-name:var(--font-heading)]">
                  {service.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed flex-grow">
                  {service.tagline}
                </p>
                <a
                  href={`#${service.id}`}
                  className="mt-4 inline-flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all"
                >
                  Learn More
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Detailed Services */}
      <div className="bg-bg-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, i) => (
            <SectionWrapper
              key={service.id}
              id={service.id}
              className="py-16 lg:py-20 scroll-mt-24 border-t border-gray-200 first:border-t-0"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <p className="text-sm font-bold uppercase tracking-wider text-primary mb-2 font-[family-name:var(--font-heading)]">
                    {service.tagline}
                  </p>
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
                  <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-8">
                    <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
                      Pricing
                    </p>
                    <p className="text-lg text-text-dark leading-relaxed">
                      {service.pricing}
                    </p>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>

      {/* Certified QuickBooks ProAdvisor */}
      <SectionWrapper className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-block w-32 mb-8">
            <div className="bg-white rounded-t-lg px-3 pt-3 pb-2 text-center border border-gray-200">
              <div className="flex justify-center mb-1.5">
                <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" fill="#2CA01C"/>
                  <path d="M14 14h-2a4 4 0 000 8h2v4h-2a8 8 0 010-16h2v4zm12 12h2a4 4 0 000-8h-2v-4h2a8 8 0 010 16h-2v-4z" fill="white"/>
                  <rect x="18" y="12" width="4" height="16" rx="2" fill="white"/>
                </svg>
              </div>
              <p className="text-[7px] text-gray-500 leading-tight">intuit</p>
              <p className="text-xs font-bold text-gray-800 leading-tight">quickbooks<span className="text-[7px] align-top">.</span></p>
              <div className="border-t border-gray-200 mt-1.5 pt-1.5">
                <p className="text-[10px] font-semibold text-gray-800 leading-tight">Certified</p>
                <p className="text-[10px] font-semibold text-gray-800 leading-tight">ProAdvisor</p>
              </div>
            </div>
            <div className="relative">
              <div className="flex">
                <div className="w-1/2 h-6 bg-[#80C342]" style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 60%)"}}></div>
                <div className="w-1/2 h-6 bg-[#2CA01C]" style={{clipPath: "polygon(0 0, 100% 0, 50% 60%, 0 100%)"}}></div>
              </div>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-4 font-[family-name:var(--font-heading)]">
            Certified QuickBooks ProAdvisor
          </h2>
          <p className="text-text-muted leading-relaxed mb-8 max-w-xl">
            As a Certified QuickBooks ProAdvisor, North Shore Bookkeeping brings
            the training and expertise to keep your books accurate and your
            software working for you.
          </p>
          <Button href="/about" variant="secondary">
            Company Overview
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
