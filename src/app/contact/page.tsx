"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import ContactForm from "@/components/ContactForm";

function ProAdvisorBadge() {
  return (
    <div className="inline-block w-32">
      <div className="bg-white rounded-t-lg px-3 pt-3 pb-2 text-center border border-gray-200">
        <div className="flex justify-center mb-1.5">
          <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="18" fill="#2CA01C" />
            <path
              d="M14 14h-2a4 4 0 000 8h2v4h-2a8 8 0 010-16h2v4zm12 12h2a4 4 0 000-8h-2v-4h2a8 8 0 010 16h-2v-4z"
              fill="white"
            />
            <rect x="18" y="12" width="4" height="16" rx="2" fill="white" />
          </svg>
        </div>
        <p className="text-[7px] text-gray-500 leading-tight">intuit</p>
        <p className="text-xs font-bold text-gray-800 leading-tight">
          quickbooks<span className="text-[7px] align-top">.</span>
        </p>
        <div className="border-t border-gray-200 mt-1.5 pt-1.5">
          <p className="text-[10px] font-semibold text-gray-800 leading-tight">
            Certified
          </p>
          <p className="text-[10px] font-semibold text-gray-800 leading-tight">
            ProAdvisor
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="flex">
          <div
            className="w-1/2 h-6 bg-[#80C342]"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 60%)" }}
          />
          <div
            className="w-1/2 h-6 bg-[#2CA01C]"
            style={{ clipPath: "polygon(0 0, 100% 0, 50% 60%, 0 100%)" }}
          />
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="mt-[72px] lg:mt-[88px]">
        <div
          className="relative h-48 sm:h-56 lg:h-64 bg-cover bg-center"
          style={{ backgroundImage: "url('/services-hero.png')" }}
        >
          <div className="absolute inset-0 bg-black/35" />
          <div className="relative h-full flex items-end justify-center pb-8 sm:pb-10 lg:pb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white font-[family-name:var(--font-heading)]">
              Contact
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <SectionWrapper className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-text-dark mb-3 font-[family-name:var(--font-heading)]">
                Contact Us
              </h2>
              <p className="text-text-muted mb-8 leading-relaxed">
                Have a question or ready to get started? Reach out and
                we&apos;ll get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-text-dark text-sm">Phone</p>
                    <a
                      href="tel:+18473051323"
                      className="text-text-muted text-sm hover:text-primary transition-colors"
                    >
                      (847) 305-1323
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-text-dark text-sm">Email</p>
                    <a
                      href="mailto:vasili@northshorebookkeeping.com"
                      className="text-text-muted text-sm hover:text-primary transition-colors"
                    >
                      vasili@northshorebookkeeping.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-text-dark text-sm">
                      Location
                    </p>
                    <p className="text-text-muted text-sm">
                      Chicago, Illinois (Remote services available nationwide)
                    </p>
                  </div>
                </div>
              </div>

              {/* Certified ProAdvisor */}
              <div className="mt-10">
                <p className="font-semibold text-text-dark text-sm mb-4">
                  Certified QuickBooks ProAdvisor
                </p>
                <ProAdvisorBadge />
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold text-text-dark mb-3 font-[family-name:var(--font-heading)]">
                Send Us a Message
              </h2>
              <p className="text-text-muted mb-8">
                Fill out the form below and we&apos;ll get back to you shortly.
              </p>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
