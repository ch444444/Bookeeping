"use client";

import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import BookACallButton from "@/components/BookACallButton";
import QuoteRequestModal from "@/components/QuoteRequestModal";

/** Small rounded-square icon used as each service card's badge. */
function ServiceIcon({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${
        tone === "dark"
          ? "border-white/25 bg-white/5 text-white"
          : "border-primary/20 bg-primary/10 text-primary"
      }`}
    >
      {children}
    </span>
  );
}

function LedgerIcon() {
  return (
    <svg className="h-[29px] w-[29px]" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="3" width="14" height="18" rx="2.5" strokeLinejoin="round" />
      <path strokeLinecap="round" d="M9 8h6M9 12h6M9 16h3" />
    </svg>
  );
}

function CalendarCheckIcon() {
  return (
    <svg className="h-[29px] w-[29px]" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="16" rx="2.5" strokeLinejoin="round" />
      <path strokeLinecap="round" d="M8 3v4M16 3v4M3.5 10h17M9.5 15.5l2 2 3.5-3.5" strokeLinejoin="round" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg className="h-[29px] w-[29px]" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.5 12.5c0 3.9-3.8 7-8.5 7-1 0-2-.15-2.9-.42L4 20.5l1.5-3.7A6.6 6.6 0 0 1 3.5 12.5c0-3.9 3.8-7 8.5-7s8.5 3.1 8.5 7Z" />
      <path strokeLinecap="round" d="M9 11.5h6M9 14.5h3.5" />
    </svg>
  );
}

/** Thin check used in the service card lists. */
function CheckMark({ className = "" }: { className?: string }) {
  return (
    <svg className={`mt-[3px] h-3.5 w-3.5 shrink-0 ${className}`} fill="none" stroke="currentColor" strokeWidth={2.25} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.5l5 5 10-11" />
    </svg>
  );
}

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg className={`h-3 w-3 shrink-0 ${className}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M8.5 7H17v8.5" />
    </svg>
  );
}

const monthlyFeatures = [
  "Monthly bank and credit card reconciliation",
  "Transaction categorization and balance sheet review",
  "Monthly financial statements and answers to your questions",
];

type SecondaryService = {
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  note?: string;
  /** Label for a link that opens the Calendly scheduler. */
  bookACall?: string;
  Icon: () => ReactNode;
};

const secondaryServices: SecondaryService[] = [
  {
    eyebrow: "A fresh start",
    title: "Cleanup & catch-up",
    description:
      "Behind on your books or unsure the numbers are right? I'll review what needs attention and get your records back on track.",
    features: [
      "Catch up missing months and reconcile accounts",
      "Resolve errors and prepare books for your CPA",
    ],
    note: "Quoted separately after a review of your books.",
    Icon: CalendarCheckIcon,
  },
  {
    eyebrow: "Practical guidance",
    title: "QuickBooks consulting",
    description:
      "Want to handle the books in-house? Get help setting up QuickBooks, improving your process, and understanding what to do next.",
    features: [
      "Personalized setup and training",
      "Workflow guidance and a review of your books",
    ],
    bookACall: "Let's talk about what you need",
    Icon: ChatIcon,
  },
];

const pricingTiers = [
  {
    number: "01",
    name: "Simple",
    tagline: "Straightforward books with fewer moving parts.",
    price: "Around $350",
    fit: "Often a fit for businesses under $500k in annual revenue.",
    features: [
      "Lower transaction volume and fewer bank or credit card accounts",
      "Business and personal spending clearly separated",
      "Little need for integrations or additional tracking",
    ],
  },
  {
    number: "02",
    name: "Moderate",
    tagline: "More activity and a few additional details to keep organized.",
    price: "$400–$500",
    fit: "Often a fit for businesses with $500k to $1 million in annual revenue.",
    features: [
      "Moderate transaction volume across several accounts",
      "Payroll entries, loans, or payment integrations to reconcile",
      "Some additional tracking or account balances to review",
    ],
  },
  {
    number: "03",
    name: "Complex",
    tagline: "More accounts, more activity, and more to reconcile.",
    price: "$500–$800",
    fit: "Often a fit for businesses with $1 million to $2 million in annual revenue.",
    features: [
      "Higher transaction volume or multiple payment and sales channels",
      "Class or project tracking, cash activity, or more involved integrations",
      "More accounts receivable or accounts payable activity to review",
    ],
  },
];

const testimonials = [
  {
    name: "Pawstock",
    initial: "P",
    color: "bg-teal-500",
    timeAgo: "2 years ago",
    quote:
      "We currently use North Shore Bookkeeping, and they have been an excellent partner for our business. As a retail operation, we deal with the intricacies of inventory management, retail sales tracking, and staffing solutions, and their team handles all of it with professionalism and clarity. They understand inventory-heavy retail, which makes a big difference in day-to-day operations and long-term planning. Communication is straightforward, questions are answered quickly, and the solutions they provide are practical and effective. Their services are also very affordable for the level of expertise and support we receive. I would highly recommend North Shore Bookkeeping to any small business looking for reliable, knowledgeable bookkeeping support.",
  },
  {
    name: "TJ Kesteleyn",
    initial: "T",
    color: "bg-purple-600",
    timeAgo: "2 years ago",
    quote:
      "I've worked with them for over a year on various projects. Vas has been great! Very knowledgeable, great communication, and incredible attention to detail. I would highly recommend to my friends, family, and fellow business owners.",
  },
  {
    name: "The Perfect Fit",
    initial: "T",
    color: "bg-yellow-500",
    timeAgo: "2 years ago",
    quote:
      "As a small business owner, finding someone who truly understands my financial needs has been a game changer. Vas keeps everything running smoothly and helps me stay organized throughout the year. Their expertise and responsiveness are top-notch!",
  },
  {
    name: "4c Builds",
    initial: "4",
    color: "bg-blue-500",
    timeAgo: "2 years ago",
    quote:
      "Have used them for over 2 years and could not speak higher for the customer service or quality of work.",
  },
];

function ReviewText({ quote }: { quote: string }) {
  const [expanded, setExpanded] = useState(false);
  const maxChars = 150;
  const needsTruncation = quote.length > maxChars;
  const displayText = needsTruncation && !expanded ? quote.slice(0, maxChars) + "..." : quote;

  return (
    <div className="text-center">
      <p className="text-text-dark text-sm leading-relaxed">
        {displayText}
      </p>
      {needsTruncation && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-text-muted hover:text-primary mt-2 transition-colors"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}

export default function Home() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#3d8583] pt-28 pb-3 lg:pt-32 lg:pb-4 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-[3rem] leading-[1.05] font-[family-name:var(--font-heading)] uppercase">
                <span className="block lg:whitespace-nowrap">
                  <span className="font-extrabold text-white">Your Books</span>{" "}
                  <span className="font-light text-white/90">Deserve Better</span>
                </span>
                <span className="block font-light text-white/90">
                  — And So Do You
                </span>
              </h1>
              <p className="mt-5 text-base text-white/80 leading-snug max-w-lg">
                Messy books kill clarity. I keep your books clean, your
                financials accurate, and your stress level low — with real
                communication from someone who actually responds.
              </p>
              <div className="mt-7 flex flex-col items-start gap-3">
                <BookACallButton
                  className="flex items-center gap-3 bg-white text-text-dark px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Book a Call with Vasili
                </BookACallButton>
                <Link
                  href="/contact"
                  className="flex items-center gap-3 bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule a Free Consultation
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-2 flex flex-col items-center"
            >
              {/* Photo with rounded rectangle + teal accent */}
              <div className="relative">
                <div className="absolute top-4 right-[-16px] w-full h-full bg-primary/40 rounded-2xl" />
                <div className="relative w-60 h-80 lg:w-72 lg:h-[400px] rounded-2xl overflow-hidden">
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
                className="mt-3 h-24 lg:h-28 w-72 lg:w-80 object-contain invert mix-blend-screen self-center translate-x-4 lg:translate-x-6"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <SectionWrapper
        className="bg-bg-light py-[clamp(44px,5vw,72px)]"
        id="services"
      >
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-6">
          <div className="mb-[26px] max-w-[760px] sm:mb-8">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
              QuickBooks Online Services
            </p>
            <h2 className="text-[clamp(32px,3.2vw,42px)] font-bold leading-[1.2] tracking-[-0.035em] text-text-dark font-[family-name:var(--font-heading)]">
              How I can help.
            </h2>
            <p className="mt-4 leading-relaxed text-text-muted">
              Ongoing support, a fresh start, or help getting more comfortable
              with QuickBooks.
            </p>
          </div>

          <div className="grid items-stretch gap-6 lg:grid-cols-[1.05fr_1fr]">
            {/* Featured card - monthly bookkeeping */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative flex flex-col overflow-hidden rounded-[18px] bg-gradient-to-br from-primary-dark to-text-dark px-6 py-7 shadow-[0_14px_36px_rgba(36,75,80,0.08)] sm:p-8 lg:p-9"
            >
              {/* Decorative ring */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-[-145px] top-[70px] h-[260px] w-[260px] rounded-full border border-white/10"
                style={{
                  boxShadow:
                    "0 0 0 38px rgba(255,255,255,.02), 0 0 0 76px rgba(255,255,255,.016)",
                }}
              />

              <div className="relative mb-[25px] flex items-center gap-4">
                <ServiceIcon tone="dark">
                  <LedgerIcon />
                </ServiceIcon>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/80">
                  Ongoing support
                </p>
              </div>

              <h3 className="relative text-[27px] font-bold leading-[1.25] tracking-[-0.025em] text-white sm:text-[29px] font-[family-name:var(--font-heading)]">
                Monthly bookkeeping
              </h3>
              <p className="relative mt-4 text-[19px] leading-[1.5] text-white/95 font-[family-name:var(--font-heading)]">
                A clear picture of your business,
                <br className="hidden sm:block" /> month after month.
              </p>
              <p className="relative mt-[18px] max-w-[450px] text-[15px] leading-relaxed text-white/75">
                I keep your QuickBooks organized and your accounts reconciled,
                so you have reliable numbers to work with.
              </p>

              <ul className="relative mt-[23px]">
                {monthlyFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="mb-3 flex items-start gap-[11px] text-sm leading-[1.6] text-white/90"
                  >
                    <CheckMark className="text-white/70" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="relative mt-auto pt-[25px]">
                <button
                  type="button"
                  onClick={() => setQuoteOpen(true)}
                  className="inline-flex w-full items-center justify-between gap-7 rounded-md border border-white bg-white px-[22px] py-3.5 text-sm font-semibold text-text-dark transition-all duration-200 hover:-translate-y-0.5 hover:bg-bg-muted sm:w-auto sm:justify-center"
                >
                  Request a quote
                  <ArrowUpRight className="text-text-muted" />
                </button>
                <p className="mt-3.5 text-xs text-white/70">
                  Monthly service, with pricing based on your books.
                </p>
              </div>
            </motion.div>

            {/* Supporting cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {secondaryServices.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i + 1) * 0.12 }}
                  className="flex flex-col rounded-2xl border border-gray-200 bg-white p-[25px] shadow-[0_5px_20px_rgba(32,75,58,0.02)] transition-all duration-200 hover:border-primary/40 hover:shadow-[0_9px_25px_rgba(32,75,58,0.05)] lg:p-7"
                >
                  <div className="flex flex-col gap-[18px] lg:flex-row lg:gap-5">
                    <ServiceIcon>
                      <service.Icon />
                    </ServiceIcon>
                    <div className="min-w-0">
                      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
                        {service.eyebrow}
                      </p>
                      <h3 className="text-[23px] font-bold leading-[1.3] tracking-[-0.025em] text-text-dark font-[family-name:var(--font-heading)]">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-text-muted">
                        {service.description}
                      </p>

                      <ul className="mt-4">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="mb-2 flex items-start gap-[11px] text-[13px] leading-[1.6] text-text-dark"
                          >
                            <CheckMark className="text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {service.note && (
                        <p className="mt-4 text-xs leading-relaxed text-text-muted">
                          {service.note}
                        </p>
                      )}

                      {service.bookACall && (
                        <BookACallButton className="mt-4 inline-flex items-center gap-1.5 border-b border-primary/40 pb-[3px] text-[13px] font-semibold text-text-dark transition-colors hover:border-primary hover:text-primary">
                          {service.bookACall}
                          <ArrowUpRight />
                        </BookACallButton>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Pricing Section */}
      <SectionWrapper
        className="relative overflow-hidden bg-primary-dark pt-[38px] pb-[28px] sm:pt-[52px] sm:pb-8"
        id="pricing"
      >
        {/* Faint diagonal line texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(125deg, transparent 0, transparent 138px, rgba(255,255,255,.1) 138px, rgba(255,255,255,.1) 140px), repeating-linear-gradient(55deg, transparent 0, transparent 298px, rgba(255,255,255,.05) 298px, rgba(255,255,255,.05) 300px)",
          }}
        />

        <div className="relative mx-auto w-full max-w-[1240px] px-5 sm:px-6">
          <div className="mb-8 grid gap-[18px] sm:gap-[25px] lg:grid-cols-2 lg:items-end lg:gap-[45px]">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-white/80">
                Monthly bookkeeping
              </p>
              <h2 className="text-[clamp(29px,3vw,38px)] font-bold leading-[1.23] tracking-[-0.035em] text-white font-[family-name:var(--font-heading)]">
                Pricing based on your books.
              </h2>
            </div>
            <p className="text-[15px] leading-relaxed text-white/75">
              These ranges give you an idea of what to expect. I&apos;ll review
              your QuickBooks account and provide a quote based on your
              transaction volume and complexity.
            </p>
          </div>

          <div className="grid items-stretch gap-[23px] md:grid-cols-3 md:gap-[13px] lg:gap-[22px]">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col rounded-[13px] border border-gray-200 bg-white p-[26px] shadow-[0_5px_0_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_10px_25px_rgba(0,0,0,0.18)] md:px-[17px] md:py-[22px] lg:px-6 lg:py-7"
              >
                <span className="mb-[18px] self-start rounded-lg bg-primary/10 px-2.5 py-1.5 text-[13px] font-bold text-primary">
                  {tier.number}
                </span>

                <h3 className="text-2xl font-bold leading-[1.23] tracking-[-0.035em] text-text-dark font-[family-name:var(--font-heading)]">
                  {tier.name}
                </h3>
                <p className="mt-2.5 text-sm leading-[1.65] text-text-muted md:min-h-[70px]">
                  {tier.tagline}
                </p>

                <p className="mt-[22px] mb-[19px] text-[34px] font-bold leading-[1.3] tracking-[-0.04em] text-primary font-[family-name:var(--font-heading)] md:text-[clamp(25px,2.7vw,35px)]">
                  {tier.price}
                  <span className="mt-[3px] block text-[13px] font-normal tracking-normal text-text-muted font-[family-name:var(--font-body)]">
                    per month
                  </span>
                </p>

                <p className="border-t border-gray-200 pt-[17px] text-[13px] leading-[1.6] text-text-muted">
                  {tier.fit}
                </p>

                <ul className="mt-[18px] mb-[25px] list-disc pl-[18px] text-[13px] leading-[1.7] text-text-dark marker:text-primary">
                  {tier.features.map((feature) => (
                    <li key={feature} className="mb-2.5 pl-0.5">
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => setQuoteOpen(true)}
                  className="mt-auto inline-flex w-full items-center justify-center gap-3 rounded-[3px] bg-primary-dark px-3.5 py-[13px] text-[13px] font-semibold text-white transition-colors duration-150 hover:bg-text-dark"
                >
                  Request a quote
                  <ArrowUpRight />
                </button>
              </motion.div>
            ))}
          </div>

          <p className="mt-[26px] max-w-[1000px] text-[13px] leading-relaxed text-white/75">
            These are guidelines, not packages to choose from. Revenue is one
            reference point, not a pricing rule. I determine your monthly fee
            after reviewing the books, and your quote may fall outside these
            ranges.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-[30px] grid gap-[25px] rounded-xl border border-gray-200 bg-white p-[25px] lg:grid-cols-2 lg:gap-[30px]"
          >
            <div>
              <h3 className="text-[21px] font-bold leading-[1.23] tracking-[-0.035em] text-text-dark font-[family-name:var(--font-heading)]">
                Need cleanup bookkeeping first?
              </h3>
              <p className="mt-2.5 text-[13px] leading-relaxed text-text-muted">
                I&apos;ll review your books and quote the cleanup separately.
              </p>
              <button
                type="button"
                onClick={() => setQuoteOpen(true)}
                className="mt-4 inline-flex items-center gap-[18px] border-b border-primary/40 pb-[3px] text-sm font-semibold text-text-dark transition-colors hover:border-primary hover:text-primary"
              >
                Request a quote
                <ArrowUpRight />
              </button>
            </div>

            <div>
              <h3 className="text-[21px] font-bold leading-[1.23] tracking-[-0.035em] text-text-dark font-[family-name:var(--font-heading)]">
                Not ready for monthly bookkeeping?
              </h3>
              <p className="mt-2.5 text-[13px] leading-relaxed text-text-muted">
                Quarterly bookkeeping is available at 75% of your quoted monthly
                rate, billed monthly.
              </p>
            </div>
          </motion.div>

          <p className="mt-[22px] text-center text-xs text-white/75">
            No contracts. Cancel anytime. 100% satisfaction in your first month
            or pay nothing.
          </p>
        </div>
      </SectionWrapper>

      {/* Testimonials Section */}
      <SectionWrapper className="py-16 lg:py-20 bg-white" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="mb-[14px] text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
              Client reviews
            </p>
            <h2 className="max-w-[690px] text-[clamp(30px,3vw,42px)] font-bold leading-[1.2] tracking-[-0.035em] text-text-dark font-[family-name:var(--font-heading)]">
              Good books.
              <br />
              Even better working relationships.
            </h2>
            <p className="mt-[18px] max-w-[620px] text-[15px] leading-relaxed text-text-muted">
              Here&apos;s what business owners have to say about working with
              North Shore Bookkeeping.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <ReviewText quote={testimonial.quote} />
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* About Preview */}
      <SectionWrapper className="bg-bg-light py-[44px] sm:py-[72px]">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-6">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-[34px] lg:grid-cols-[1fr_1.08fr] lg:gap-16">
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-[15px] text-[11px] font-bold uppercase tracking-[0.17em] text-primary">
                The person behind the books
              </p>
              <h2 className="mb-[18px] text-[clamp(34px,3.3vw,44px)] font-bold leading-[1.15] tracking-[-0.04em] text-text-dark font-[family-name:var(--font-heading)]">
                Hi, I&apos;m Vasili.
              </h2>
              <p className="mb-[22px] text-[20px] leading-[1.5] tracking-[-0.02em] text-primary-dark md:text-[19px] lg:text-[21px]">
                Accurate books matter.
                <br />
                So does the person you work with.
              </p>
              <p className="mb-[18px] text-[15px] leading-[1.75] text-text-muted">
                I started North Shore Bookkeeping after years in public
                accounting because I saw small business owners drowning in messy
                books, bad communication, and unclear financials.
              </p>
              <p className="mb-[18px] text-[15px] leading-[1.75] text-text-muted">
                My goal is simple — give you clean numbers, clear answers, and
                more time to run your business.
              </p>
              <Link
                href="/about"
                className="mt-[7px] inline-flex items-center gap-6 rounded-md bg-primary-dark px-[21px] py-[13px] text-[13px] font-semibold text-white transition-colors hover:bg-text-dark"
              >
                Read more
                <ArrowUpRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper className="bg-bg-muted py-[44px] sm:py-[62px]">
        <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-[8%]">
            {/* Intro and contact details */}
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-primary-dark">
                Work with me
              </p>
              <h2 className="text-[clamp(29px,3vw,38px)] font-bold leading-[1.23] tracking-[-0.035em] text-text-dark font-[family-name:var(--font-heading)]">
                Tell me about
                <br />
                your business.
              </h2>
              <p className="mt-[25px] max-w-[410px] leading-[1.65] text-text-muted">
                Whether you&apos;re looking for ongoing support or need to get
                your books caught up, I&apos;d like to learn more about your
                business and what you need help with. We can start with a quote
                or a short conversation.
              </p>

              <div className="mt-[27px] grid gap-[9px] text-[15px]">
                <a
                  href="mailto:vasili@northshorebookkeeping.com"
                  className="flex items-center gap-3 text-text-dark transition-colors hover:text-primary"
                >
                  <svg
                    className="h-5 w-5 shrink-0 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="break-all">
                    vasili@northshorebookkeeping.com
                  </span>
                </a>
                <a
                  href="tel:+18473051323"
                  className="flex items-center gap-3 text-text-dark transition-colors hover:text-primary"
                >
                  <svg
                    className="h-5 w-5 shrink-0 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  (847) 305-1323
                </a>
              </div>

              <p className="mt-[25px] text-sm text-text-muted">
                Prefer to talk first?
              </p>
              <BookACallButton className="mt-1.5 inline-flex items-center gap-[18px] border-b border-primary/40 pb-[3px] text-sm font-semibold text-text-dark transition-colors hover:border-primary hover:text-primary">
                Book a 30-minute call
                <ArrowUpRight />
              </BookACallButton>
            </div>

            {/* Quote CTA panel */}
            <div className="self-center border-t border-gray-300 pt-8 lg:border-l lg:border-t-0 lg:py-3.5 lg:pl-10 lg:pt-0">
              <h3 className="text-[25px] font-bold leading-[1.23] tracking-[-0.035em] text-text-dark font-[family-name:var(--font-heading)]">
                Let&apos;s see if we&apos;re a good fit.
              </h3>
              <p className="mt-[19px] mb-[26px] leading-[1.65] text-text-muted">
                Tell me about your business, then use the QuickBooks
                instructions to invite me to review your books.
              </p>
              <button
                type="button"
                onClick={() => setQuoteOpen(true)}
                className="inline-flex items-center justify-center gap-6 rounded-[3px] bg-primary-dark px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-text-dark"
              >
                Request a quote
                <ArrowUpRight />
              </button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <QuoteRequestModal
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
      />
    </>
  );
}
