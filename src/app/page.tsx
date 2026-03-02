"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";

const services = [
  {
    title: "Monthly Bookkeeping",
    description:
      "Stay on top of your finances with accurate, consistent monthly bookkeeping. We handle transaction categorization, bank reconciliation, and financial reporting.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Cleanup & Catch-Up",
    description:
      "Behind on your books? We'll get your financials organized and up-to-date so you have a clear picture of where your business stands.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Consulting",
    description:
      "Get expert guidance on financial strategy, software setup, and bookkeeping best practices to optimize your business operations.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

const pricingTiers = [
  {
    name: "Essential",
    price: "300",
    description: "Perfect for freelancers and sole proprietors",
    features: [
      "Monthly bookkeeping",
      "Bank reconciliation",
      "Monthly financial statements",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "500",
    description: "Ideal for growing small businesses",
    features: [
      "Everything in Essential",
      "Accounts payable & receivable",
      "Payroll processing",
      "Quarterly review calls",
      "Priority support",
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
    ],
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    quote:
      "They completely transformed my bookkeeping. I finally have a clear picture of my business finances and can make confident decisions.",
  },
  {
    name: "Michael Chen",
    role: "Freelance Consultant",
    quote:
      "I used to dread tax season. Now everything is organized and up-to-date year-round. The peace of mind is priceless.",
  },
  {
    name: "Emily Rodriguez",
    role: "E-commerce Entrepreneur",
    quote:
      "The cleanup service saved me. I was months behind on my books and they had everything sorted in just two weeks.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#3d8583] pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-tight font-[family-name:var(--font-heading)] uppercase">
                <span className="font-extrabold text-white italic">Your Books</span>{" "}
                <span className="font-light text-white/80">Deserve Better</span>
                <br />
                <span className="font-light text-white/80">— And So Do You</span>
              </h1>
              <p className="mt-6 text-base text-white/70 leading-relaxed max-w-lg">
                Messy books kill clarity. I keep your QuickBooks clean, your
                financials accurate, and your stress level low — with real
                communication from someone who actually responds.
              </p>
              <div className="mt-8 flex flex-col gap-4 max-w-md">
                <Link
                  href="/contact"
                  className="flex items-center gap-3 bg-white text-text-dark px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Book a Call with Vasili
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-3 bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Me a Quick Note
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              {/* Photo with rounded rectangle + teal accent */}
              <div className="relative">
                <div className="absolute top-4 right-[-16px] w-full h-full bg-primary/40 rounded-2xl" />
                <div className="relative w-64 h-80 lg:w-80 lg:h-[420px] rounded-2xl overflow-hidden">
                  <img
                    src="/vasili.jpg"
                    alt="Vasili"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              {/* Signature */}
              <p className="mt-6 text-3xl text-white italic font-light font-[family-name:var(--font-heading)]">
                Vasili
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <SectionWrapper className="py-20 lg:py-28 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark font-[family-name:var(--font-heading)]">
              Our Bookkeeping Services
            </h2>
            <p className="mt-4 text-text-muted max-w-2xl mx-auto">
              Choose the level of help you need. Whether you want to stay
              hands-on or hand it off completely, we&apos;ve got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-bg-light rounded-2xl p-8 transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-3 font-[family-name:var(--font-heading)]">
                  {service.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/services" variant="secondary">
              View All Services
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Pricing Section */}
      <SectionWrapper className="py-20 lg:py-28 bg-bg-light" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark font-[family-name:var(--font-heading)]">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-text-muted max-w-2xl mx-auto">
              Choose a plan that fits your business. All plans include a free
              consultation to ensure we&apos;re the right fit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className={`rounded-2xl p-8 transition-all duration-300 ${
                  tier.popular
                    ? "bg-primary text-white ring-4 ring-primary/20 scale-105"
                    : "bg-white border border-gray-100"
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
                    <li key={feature} className="flex items-start gap-3 text-sm">
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
        </div>
      </SectionWrapper>

      {/* Testimonials Section */}
      <SectionWrapper className="py-20 lg:py-28 bg-white" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark font-[family-name:var(--font-heading)]">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-text-muted max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what business owners
              like you have to say about working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-bg-light rounded-2xl p-8 border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text-dark text-sm leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-text-dark">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-text-muted">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* About Preview */}
      <SectionWrapper className="py-20 lg:py-28 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full aspect-square max-w-md bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
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
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-primary/60 text-sm font-medium">
                    Your Photo Here
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-6 font-[family-name:var(--font-heading)]">
                Hi, I&apos;m [Your Name]
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                I started this bookkeeping practice because I believe every
                small business owner deserves to have clear, organized finances
                without the stress and confusion.
              </p>
              <p className="text-text-muted leading-relaxed mb-8">
                With over [X] years of experience in bookkeeping and accounting,
                I&apos;ve helped hundreds of business owners gain clarity and
                confidence in their numbers. I&apos;m passionate about making
                bookkeeping simple, accurate, and stress-free.
              </p>
              <Button href="/about" variant="secondary">
                Read More About Me
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-6 font-[family-name:var(--font-heading)]">
                Every Month You Wait Is Another Month of Messy Books
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                Don&apos;t let disorganized finances hold your business back.
                Whether you&apos;re behind on your books or just looking for a
                better way to manage your finances, we&apos;re here to help.
              </p>
              <p className="text-text-muted leading-relaxed mb-8">
                Book a free consultation today and let&apos;s talk about how we
                can get your books in order.
              </p>
              {/* Calendly Placeholder */}
              <div className="bg-bg-light rounded-2xl p-6 border border-gray-100">
                <p className="text-sm text-text-muted mb-3">
                  Prefer to schedule directly?
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
                >
                  <svg
                    className="w-5 h-5"
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
                  Book on Calendly
                </a>
                <p className="text-xs text-text-muted mt-2">
                  (Replace this with your Calendly embed link)
                </p>
              </div>
            </div>
            <div className="bg-bg-light rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-text-dark mb-6 font-[family-name:var(--font-heading)]">
                Send Us a Message
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
