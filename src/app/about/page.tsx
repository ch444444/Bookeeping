"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

const coreValues = [
  {
    title: "Simplicity",
    description:
      "Clear communication and straightforward accounting — no jargon, no confusion.",
  },
  {
    title: "Efficiency",
    description:
      "Automated systems for improved accuracy and speed, so you have more time to focus on your business.",
  },
  {
    title: "Integrity",
    description:
      "Reliability and trustworthiness over aggressive sales tactics — always.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* About Me (reused from home page) */}
      <section className="bg-gradient-to-br from-bg-light to-bg-muted pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute top-4 right-[-16px] w-full h-full bg-primary/40 rounded-2xl" />
                <div className="relative w-72 h-96 lg:w-80 lg:h-[440px] rounded-2xl overflow-hidden">
                  <img
                    src="/vasili.jpg"
                    alt="Vasili Kanakaris"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-text-dark mb-6 font-[family-name:var(--font-heading)]">
                Welcome to North Shore Bookkeeping!
              </h1>
              <p className="text-text-muted leading-relaxed">
                I started North Shore Bookkeeping after years in public
                accounting because I saw small business owners drowning in messy
                books, bad communication, and unclear financials. My goal is
                simple — give you clean numbers, clear answers, and more time to
                run your business.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About the Company */}
      <SectionWrapper className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-6 font-[family-name:var(--font-heading)]">
            About the Company
          </h2>
          <p className="text-text-muted leading-relaxed mb-4">
            North Shore Bookkeeping is a fully remote firm serving small
            businesses in the Chicago, Illinois area and beyond. We specialize
            in QuickBooks Online, providing full-service bookkeeping built on
            clarity, communication, and consistency.
          </p>
          <p className="text-text-muted leading-relaxed">
            Our clients include business owners and non-profits who want clean,
            reliable books — the same level of care, clarity, and
            professionalism that big firms offer, without the corporate
            runaround.
          </p>
        </div>
      </SectionWrapper>

      {/* Core Values */}
      <SectionWrapper className="py-20 lg:py-28 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark font-[family-name:var(--font-heading)]">
              Our Core Values
            </h2>
            <p className="mt-4 text-text-muted max-w-2xl mx-auto">
              The principles behind every client relationship.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100"
              >
                <h3 className="text-lg font-bold text-text-dark mb-3 font-[family-name:var(--font-heading)]">
                  {value.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Good to Know */}
      <SectionWrapper className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-6 font-[family-name:var(--font-heading)]">
            Good to Know
          </h2>
          <p className="text-text-muted leading-relaxed">
            We don&apos;t provide tax or audit services, but we maintain referral
            relationships with trusted accounting firms so you&apos;re always in
            good hands. Vasili is a Certified QuickBooks ProAdvisor.
          </p>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-20 lg:py-28 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-[family-name:var(--font-heading)]">
            Ready to Work Together?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Let&apos;s chat about how we can help your business thrive with
            organized, accurate bookkeeping.
          </p>
          <Button
            href="/contact"
            variant="primary"
            className="bg-white !text-primary border-2 border-white hover:bg-white/90"
          >
            Get in Touch
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
