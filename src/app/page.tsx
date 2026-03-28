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

const pricingTiers = [
  {
    name: "Essential",
    price: "300 to $400",
    description: "For small, simple businesses that want accurate books without the stress.",
    features: [],
  },
  {
    name: "Professional",
    price: "400 to $800",
    description: "For growing businesses that need more involved bookkeeping and accounts management.",
    features: [],
    popular: true,
  },
  {
    name: "Premium",
    price: "800 to $1200",
    description: "For businesses with complex needs, accrual reporting, and special reporting requests.",
    features: [],
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    initial: "S",
    color: "bg-teal-500",
    timeAgo: "2 years ago",
    quote:
      "They completely transformed my bookkeeping. I finally have a clear picture of my business finances and can make confident decisions.",
  },
  {
    name: "Michael Chen",
    initial: "M",
    color: "bg-purple-600",
    timeAgo: "2 years ago",
    quote:
      "I used to dread tax season. Now everything is organized and up-to-date year-round. The peace of mind is priceless.",
  },
  {
    name: "Emily Rodriguez",
    initial: "E",
    color: "bg-yellow-500",
    timeAgo: "2 years ago",
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
              <img
                src="/signature.png"
                alt="Vasili Kanakaris"
                className="mt-4 h-28 lg:h-36 w-80 lg:w-96 object-contain invert mix-blend-screen self-center translate-x-4 lg:translate-x-6"
              />
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
                <h3 className="text-xl font-bold text-text-dark mb-3 font-[family-name:var(--font-heading)]">
                  {service.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {service.description}
                </p>
                {service.features && (
                  <ul className="mt-4 space-y-2.5 text-text-muted text-sm leading-relaxed">
                    {service.features.map((feature: string) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
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
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark font-[family-name:var(--font-heading)]">
              Pricing
            </h2>
            <p className="mt-3 text-text-muted">
              Transparent pricing. No contracts. First month satisfaction
              guarantee or you do not pay.
            </p>

            {/* Callout box */}
            <div className="mt-8 border-2 border-primary/40 bg-primary/5 rounded-xl p-5">
              <p className="text-text-dark text-sm leading-relaxed">
                Most small businesses lose thousands each year due to messy
                books and avoidable tax issues. Clean, reliable bookkeeping
                costs less than one bad decision.
              </p>
            </div>

            {/* Satisfaction badge */}
            <div className="mt-6 inline-block border-2 border-dashed border-primary/40 rounded-full px-6 py-2.5">
              <p className="text-primary font-bold text-sm">
                100% satisfaction in month one or pay nothing
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className={`rounded-2xl p-8 transition-all duration-300 flex flex-col ${
                  tier.popular
                    ? "bg-primary text-white"
                    : "bg-white border border-gray-200 shadow-sm"
                }`}
              >
                {tier.popular && (
                  <span className="inline-block bg-white text-primary text-xs font-bold px-3 py-1 rounded-full mb-4 self-start">
                    Most Common
                  </span>
                )}
                <h3
                  className={`text-xl font-bold mb-2 font-[family-name:var(--font-heading)] ${
                    tier.popular ? "text-white" : "text-text-dark"
                  }`}
                >
                  {tier.name}
                </h3>
                <div className="mb-4">
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
                <p
                  className={`text-base mb-6 leading-relaxed ${
                    tier.popular ? "text-white/80" : "text-text-muted"
                  }`}
                >
                  {tier.description}
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
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
                  className="w-full mt-auto"
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
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
              >
                {/* Header: Avatar, Name, Time, Google logo */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${testimonial.color} rounded-full flex items-center justify-center`}>
                      <span className="text-white font-bold text-sm">
                        {testimonial.initial}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-text-dark">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-text-muted">{testimonial.timeAgo}</p>
                    </div>
                  </div>
                  {/* Google G logo */}
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>

                {/* Stars + verified */}
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <svg
                        key={j}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>

                {/* Review text */}
                <p className="text-text-dark text-sm leading-relaxed text-center">
                  {testimonial.quote}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="https://maps.app.goo.gl/RVpb2hJ1Zg4KFaxu6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#fff"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#fff"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#fff"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#fff"/>
              </svg>
              See All Reviews on Google
            </Link>
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
