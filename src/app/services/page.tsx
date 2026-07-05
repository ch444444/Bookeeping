"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

const solutionHighlights = [
  {
    title: "Done for you",
    description: "Bookkeeping handled so you can focus on growth.",
  },
  {
    title: "For all budgets",
    description: "Monthly, quarterly, or annual options.",
  },
  {
    title: "No long-term contracts",
    description: "Start or stop anytime.",
  },
];

const includedServices = [
  {
    title: "Monthly Bank & Credit Card Reconciliation",
    description:
      "We reconcile every bank account and credit card each month to catch errors, identify missing transactions, and ensure your records match your financial institutions.",
  },
  {
    title: "Transaction Categorization",
    description:
      "Every transaction is properly categorized using your chart of accounts so your financial reports accurately reflect how your business earns and spends money.",
  },
  {
    title: "Financial Statements",
    description:
      "Receive clear, accurate financial statements including your Profit & Loss statement and Balance Sheet — the reports your CPA, lender, or partner needs to see.",
  },
  {
    title: "Accounts Payable & Receivable",
    description:
      "We track what you owe and what's owed to you. Stay on top of vendor payments and customer invoices so nothing slips through the cracks.",
  },
  {
    title: "Sales Tax Tracking",
    description:
      "If your business collects sales tax, we track it accurately so you can file on time and avoid penalties.",
  },
  {
    title: "Year-End Tax Readiness",
    description:
      "Clean, organized books make tax season painless. When it's time to file your business tax return, your records are already in order.",
  },
];

const processSteps = [
  {
    title: "Onboarding & Cleanup",
    description:
      "We review your current books, connect to your accounting software, clean up any backlog, and set up your chart of accounts. If you're starting from scratch, we'll build everything from the ground up.",
  },
  {
    title: "Monthly Bookkeeping",
    description:
      "Each month, we categorize transactions, reconcile accounts, and ensure everything is accurate. You'll always know where your business stands financially without lifting a finger.",
  },
  {
    title: "Reporting & Review",
    description:
      "You receive your financial statements and we're available to walk you through the numbers. Need to share reports with a lender or partner? They're always ready to go.",
  },
];

const industries = [
  "Construction & Trades",
  "Restaurants & Food Service",
  "Professional Services",
  "Retail & E-Commerce",
  "Healthcare & Wellness",
  "Real Estate",
];

const plans = [
  {
    name: "Monthly",
    description:
      "Best for active businesses with regular transactions. Your books are reconciled and reviewed every month, giving you real-time visibility into your finances and cash flow.",
  },
  {
    name: "Quarterly",
    description:
      "A good fit for businesses with fewer transactions. We reconcile and report every three months, keeping costs down while maintaining accurate records for tax planning and compliance.",
  },
  {
    name: "Annual",
    description:
      "Ideal for simple businesses or sole proprietors with minimal transactions. We organize and reconcile your full year of records before tax season, ensuring your tax return is filed with clean, complete data.",
  },
];

const faqs = [
  {
    q: "What bookkeeping software do you work with?",
    a: "Our team is experienced with QuickBooks Online and Xero — the two most popular cloud accounting platforms for small businesses. We can also work with other platforms depending on your needs.",
  },
  {
    q: "How often will my books be updated?",
    a: "We offer monthly, quarterly, and annual bookkeeping plans. Monthly is best for active businesses with regular transactions, quarterly works well for businesses with fewer transactions, and annual is ideal for simple businesses or sole proprietors.",
  },
  {
    q: "What is included in your bookkeeping services?",
    a: "Our bookkeeping services include monthly bank and credit card reconciliation, transaction categorization, financial statements (Profit & Loss and Balance Sheet), accounts payable and receivable tracking, sales tax tracking, and year-end tax readiness.",
  },
  {
    q: "Can you clean up my existing books?",
    a: "Yes. During onboarding, we review your current books, clean up any backlog, and set up your chart of accounts properly. If you are starting from scratch, we will build everything from the ground up.",
  },
  {
    q: "What industries do you serve?",
    a: "We work with business owners across construction and trades, restaurants and food service, professional services, retail and e-commerce, healthcare and wellness, and real estate.",
  },
];

function CheckIcon() {
  return (
    <span className="mt-0.5 flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-md bg-primary text-white">
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          d="M5 13l4 4L19 7"
        />
      </svg>
    </span>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper className="py-16 lg:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-wider text-primary">
            FAQ
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-text-dark font-[family-name:var(--font-heading)]">
            Bookkeeping FAQs
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            Common questions about our bookkeeping services for small
            businesses.
          </p>
        </div>

        <div className="border-t border-gray-200">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={i} className="border-b border-gray-200">
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                >
                  <span className="font-bold text-text-dark font-[family-name:var(--font-heading)] group-hover:text-primary transition-colors">
                    {faq.q}
                  </span>
                  <span className="relative flex-shrink-0 w-5 h-5 text-text-dark">
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-0.5 bg-current" />
                    <span
                      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-0.5 bg-current transition-transform duration-300 ${
                        open ? "scale-y-0" : "scale-y-100"
                      }`}
                    />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-text-muted text-sm leading-relaxed pb-5 pr-8">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-text-dark via-text-dark to-primary-dark pt-36 pb-24 lg:pt-44 lg:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white font-[family-name:var(--font-heading)] leading-[1.05]"
          >
            Bookkeeping Services for Small Businesses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 text-base sm:text-lg text-white/70"
          >
            {"You run your business. We'll do your bookkeeping."}
          </motion.p>
        </div>
      </section>

      {/* Full-Service Solutions */}
      <SectionWrapper className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-text-dark font-[family-name:var(--font-heading)]">
                Full-Service Bookkeeping Solutions
              </h2>
              <p className="mt-5 text-lg text-text-muted leading-relaxed">
                {"You run your business. We'll do your bookkeeping. Clean monthly books and financials you can actually use to run the business — reconciled, categorized, and ready when it's time to file."}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-4"
            >
              {solutionHighlights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-2xl bg-bg-light border border-gray-100 p-5"
                >
                  <CheckIcon />
                  <div>
                    <h3 className="font-bold text-text-dark font-[family-name:var(--font-heading)]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-muted mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* What's Included */}
      <SectionWrapper className="py-16 lg:py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark font-[family-name:var(--font-heading)]">
              {"What's Included in Our Bookkeeping Services"}
            </h2>
            <p className="mt-4 text-lg text-text-muted leading-relaxed">
              We handle every aspect of your financial record-keeping so your
              books are always accurate, up to date, and ready for tax season.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                className="rounded-2xl bg-white border border-gray-100 shadow-sm p-7"
              >
                <div className="mb-4">
                  <CheckIcon />
                </div>
                <h3 className="text-lg font-bold text-text-dark mb-2 font-[family-name:var(--font-heading)]">
                  {service.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Process */}
      <SectionWrapper className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark font-[family-name:var(--font-heading)]">
              Our Bookkeeping Process
            </h2>
            <p className="mt-4 text-lg text-text-muted leading-relaxed">
              Getting started is easy. We handle the heavy lifting so you can get
              back to running your business.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl bg-bg-light border border-gray-100 p-8"
              >
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-primary text-white font-bold font-[family-name:var(--font-heading)]">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-bold text-text-dark mb-2 font-[family-name:var(--font-heading)]">
                  {step.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Software + Who it's for */}
      <SectionWrapper className="py-16 lg:py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-white border border-gray-100 shadow-sm p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-text-dark mb-3 font-[family-name:var(--font-heading)]">
              We Work With the Tools You Use
            </h2>
            <p className="text-text-muted leading-relaxed">
              Our team is experienced with{" "}
              <span className="font-semibold text-text-dark">
                QuickBooks Online
              </span>{" "}
              and <span className="font-semibold text-text-dark">Xero</span> —
              the two most popular cloud accounting platforms for small
              businesses.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl bg-white border border-gray-100 shadow-sm p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-text-dark mb-3 font-[family-name:var(--font-heading)]">
              Who Our Bookkeeping Is For
            </h2>
            <p className="text-text-muted leading-relaxed">
              {"Our bookkeeping services are built for small business owners who would rather focus on what they do best. Whether you're an independent contractor, a single-member LLC, an S-Corp, or a growing partnership, we tailor our approach to fit your business structure and goals."}
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Industries */}
      <SectionWrapper className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark font-[family-name:var(--font-heading)]">
              Industries We Serve
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((industry, i) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (i % 3) * 0.08 }}
                className="flex items-center gap-3 rounded-xl bg-bg-light border border-gray-100 px-5 py-4"
              >
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm font-semibold text-text-dark">
                  {industry}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Plans */}
      <SectionWrapper className="py-16 lg:py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark font-[family-name:var(--font-heading)]">
              Bookkeeping Plans for Every Budget
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl bg-white border border-gray-200 shadow-sm p-8 flex flex-col"
              >
                <h3 className="text-xl font-bold text-text-dark mb-3 font-[family-name:var(--font-heading)]">
                  {plan.name}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {plan.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <FaqSection />

      {/* Closing CTA */}
      <SectionWrapper className="py-16 lg:py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-[family-name:var(--font-heading)]">
            Ready for Books You Can Actually Trust?
          </h2>
          <p className="text-white/80 mb-8 text-lg leading-relaxed">
            Clean, accurate books aren&apos;t just good for tax time — they give
            you the clarity to make better business decisions all year long.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              variant="primary"
              className="bg-white !text-primary border-2 border-white hover:bg-white/90"
            >
              Schedule a Meeting
            </Button>
            <a
              href="tel:+18473051323"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold border-2 border-white text-white hover:bg-white/10 transition-colors"
            >
              Call (847) 305-1323
            </a>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
