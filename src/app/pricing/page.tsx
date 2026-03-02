"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

const pricingTiers = [
  {
    name: "Essential",
    price: "300",
    description: "Perfect for freelancers and sole proprietors",
    features: [
      "Monthly bookkeeping",
      "Bank reconciliation",
      "Monthly financial statements",
      "Transaction categorization",
      "Email support",
      "Up to 100 transactions/month",
    ],
  },
  {
    name: "Professional",
    price: "500",
    description: "Ideal for growing small businesses",
    features: [
      "Everything in Essential",
      "Accounts payable & receivable",
      "Payroll processing support",
      "Quarterly review calls",
      "Priority email & phone support",
      "Up to 300 transactions/month",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "800",
    description: "For established businesses with complex needs",
    features: [
      "Everything in Professional",
      "Custom financial reports",
      "Cash flow forecasting",
      "Dedicated bookkeeper",
      "Monthly strategy calls",
      "Tax-ready financials",
      "Unlimited transactions",
    ],
  },
];

const faqs = [
  {
    q: "What accounting software do you work with?",
    a: "We primarily work with QuickBooks Online, Xero, and FreshBooks, but we can adapt to your preferred platform. If you don't have software yet, we'll help you choose the best option for your business.",
  },
  {
    q: "How long does the cleanup/catch-up process take?",
    a: "It depends on how far behind your books are. Typically, we can clean up 1-3 months of backlog per week. We'll give you a clear timeline during your free consultation.",
  },
  {
    q: "Do I need to sign a long-term contract?",
    a: "No long-term contracts required. Our monthly bookkeeping plans are month-to-month. We believe in earning your business every month through great service.",
  },
  {
    q: "What happens if I go over my transaction limit?",
    a: "We'll let you know if you're consistently exceeding your plan's transaction limit and recommend the best plan upgrade. No surprise charges — we always discuss changes with you first.",
  },
  {
    q: "Can I change plans later?",
    a: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-bg-light to-bg-muted pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-text-dark font-[family-name:var(--font-heading)]">
              Simple, Transparent{" "}
              <span className="text-primary">Pricing</span>
            </h1>
            <p className="mt-6 text-lg text-text-muted leading-relaxed">
              No hidden fees. No surprises. Choose the plan that fits your
              business and get started with a free consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <SectionWrapper className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
                className={`rounded-2xl p-8 transition-all duration-300 ${
                  tier.popular
                    ? "bg-primary text-white ring-4 ring-primary/20 scale-105"
                    : "bg-bg-light border border-gray-100"
                }`}
              >
                {tier.popular && (
                  <span className="inline-block bg-white text-primary text-xs font-bold px-3 py-1 rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <h3
                  className={`text-xl font-bold mb-2 font-[family-name:var(--font-heading)] ${
                    tier.popular ? "text-white" : "text-text-dark"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${
                    tier.popular ? "text-white/80" : "text-text-muted"
                  }`}
                >
                  {tier.description}
                </p>
                <div className="mb-6">
                  <span
                    className={`text-4xl font-bold font-[family-name:var(--font-heading)] ${
                      tier.popular ? "text-white" : "text-text-dark"
                    }`}
                  >
                    ${tier.price}
                  </span>
                  <span
                    className={`text-sm ${
                      tier.popular ? "text-white/70" : "text-text-muted"
                    }`}
                  >
                    /month
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                    >
                      <svg
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          tier.popular ? "text-white" : "text-primary"
                        }`}
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
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  variant={tier.popular ? "secondary" : "primary"}
                  className="w-full"
                >
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-text-muted text-sm mt-12">
            All plans include a free 30-minute consultation. Custom pricing
            available for businesses with unique needs.
          </p>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper className="py-20 lg:py-28 bg-bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark font-[family-name:var(--font-heading)]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-100"
              >
                <h3 className="font-bold text-text-dark mb-2 font-[family-name:var(--font-heading)]">
                  {faq.q}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {faq.a}
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
            Still Have Questions?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Book a free consultation and we&apos;ll help you find the perfect
            plan for your business.
          </p>
          <Button
            href="/contact"
            variant="secondary"
            className="border-white text-white hover:bg-white hover:text-primary"
          >
            Book a Free Call
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
