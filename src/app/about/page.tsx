"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

const values = [
  {
    title: "Accuracy",
    description:
      "Every number matters. We take pride in delivering meticulous, error-free bookkeeping that you can count on.",
  },
  {
    title: "Transparency",
    description:
      "No hidden fees, no surprise charges. We believe in clear communication and straightforward pricing.",
  },
  {
    title: "Reliability",
    description:
      "Deadlines are sacred. You'll always have your reports on time, every time, so you can make timely decisions.",
  },
  {
    title: "Partnership",
    description:
      "We're not just a service provider — we're an extension of your team, invested in your business's success.",
  },
];

export default function AboutPage() {
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
              About <span className="text-primary">North Shore Bookkeeping</span>
            </h1>
            <p className="mt-6 text-lg text-text-muted leading-relaxed">
              We&apos;re on a mission to make professional bookkeeping
              accessible, affordable, and stress-free for every small business
              owner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <SectionWrapper className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full aspect-[4/5] max-w-md bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <div className="text-center">
                  <svg
                    className="w-20 h-20 text-primary/40 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <p className="text-primary/60 text-sm font-medium">
                    Your Photo Here
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-text-dark mb-6 font-[family-name:var(--font-heading)]">
                Meet [Your Name]
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                Hi! I&apos;m [Your Name], the founder of North Shore Bookkeeping. With over
                [X] years of experience in bookkeeping and accounting, I&apos;ve
                dedicated my career to helping small business owners like you
                take control of their finances.
              </p>
              <p className="text-text-muted leading-relaxed mb-4">
                I started North Shore Bookkeeping because I saw too many talented
                entrepreneurs struggling with messy books, missed deadlines, and
                financial uncertainty. I knew there had to be a better way —
                bookkeeping that&apos;s not just accurate, but genuinely helpful
                for growing your business.
              </p>
              <p className="text-text-muted leading-relaxed mb-4">
                Today, I work with businesses across [industries/location],
                providing reliable bookkeeping services that give owners the
                clarity and confidence they need to make smart decisions.
              </p>
              <p className="text-text-muted leading-relaxed">
                When I&apos;m not crunching numbers, you can find me [hobby 1],
                [hobby 2], or [hobby 3]. I believe life is about balance — for
                your books and your life!
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="py-20 lg:py-28 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark font-[family-name:var(--font-heading)]">
              Our Values
            </h2>
            <p className="mt-4 text-text-muted max-w-2xl mx-auto">
              These core values guide everything we do and shape the way we work
              with our clients.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
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
            variant="secondary"
            className="border-white text-white hover:bg-white hover:text-primary"
          >
            Get in Touch
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
