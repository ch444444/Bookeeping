"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

const coreValues = [
  {
    icon: "🧩",
    title: "Simplicity",
    description:
      "We make accounting simple. No jargon. No confusion. Just clear communication and straightforward books that make sense to you.",
  },
  {
    icon: "⚙️",
    title: "Efficiency",
    description:
      "We're obsessed with smarter systems. We automate what can be automated — so you get faster, more accurate results and more time to focus on your business.",
  },
  {
    icon: "🤝",
    title: "Integrity",
    description:
      "We don't cut corners or chase shortcuts. We show up, keep our promises, and do the work right. Our relationships last because we earn trust — not because we sell hard.",
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

      {/* About My Company */}
      <SectionWrapper className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-8 font-[family-name:var(--font-heading)]">
            About My Company
          </h2>
          <img
            src="/logo.svg"
            alt="North Shore Bookkeeping"
            className="h-20 md:h-24 w-auto mx-auto mb-8"
          />
          <p className="text-text-muted leading-relaxed mb-6">
            North Shore Bookkeeping is a fully remote bookkeeping firm based in
            the Chicago, Illinois area. What started as a side business has grown
            into one of the region&apos;s fastest-growing bookkeeping firms,
            trusted by business owners, non-profits, and churches across the
            area.
          </p>
          <p className="text-text-muted leading-relaxed">
            We specialize in QuickBooks Online and provide full-service
            bookkeeping with clarity, communication, and consistency. Our goal
            is simple: give business owners the peace of mind and financial
            confidence they need to make smart decisions — without the stress.
          </p>
        </div>
      </SectionWrapper>

      {/* Core Values */}
      <SectionWrapper className="py-16 lg:py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark font-[family-name:var(--font-heading)]">
              Our Core Values
            </h2>
            <p className="mt-4 text-text-muted max-w-2xl mx-auto">
              The principles that guide every client relationship.
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
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
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

      {/* Note */}
      <SectionWrapper className="py-12 lg:py-16 bg-primary-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/90 italic leading-relaxed">
            <span className="font-bold">Note:</span> We do not provide tax or
            audit services. There are a number of quality accounting firms that
            we can recommend for these types of services, but we are committed
            to being the QuickBooks and bookkeeping experts in the North Shore
            and Greater Chicago area.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
