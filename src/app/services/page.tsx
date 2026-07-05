"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";

const detailedServices = [
  {
    title: "Routine Bookkeeping",
    fullWidth: false,
    icon: "/bookkeeping-img.png",
    paragraphs: [
      "We provide bookkeeping and QuickBooks bookkeeping services throughout the year depending on your preference of frequency. We provide services as frequently as once a week, or as slowly as once a year — this depends on what you're looking for. Typically our clients prefer the monthly schedule.",
      "We find that every business has unique complexities, and this is okay! We will work with you to examine your needs and provide you with a customized service plan that works best for you and your business. Here is a list of common tasks we perform for our clients:",
    ],
    bullets: [
      "Recording and categorizing all transactions",
      "Reconciling the transactions to the bank and credit card statements",
      "Tying A/R, A/P, and/or loans",
      "Filing sales tax returns",
      "Monthly financial statement review meeting",
    ],
    footer:
      "For all routine bookkeeping we will agree on a fixed price based on the volume and complexity of your business.",
  },
  {
    title: "QuickBooks Cleanup",
    fullWidth: false,
    icon: "/cleaning-new.png",
    paragraphs: [
      "If your business has months or years of bookkeeping left undone, or if you simply need things cleaned up, you've come to the right place. Typically this kind of work is requested because of a tax return deadline or because of a bank's demands.",
      "With our PDF reader, we are able to take your old bank statements, convert them to Excel, and then import them into your QuickBooks. By eliminating the manual entry aspect of adding transactions, we are able to reduce your costs dramatically.",
      "For all cleanup and catchup work, we charge a fixed price based on the volume and complexity of the work.",
    ],
    bullets: [],
    footer: null,
  },
  {
    title: "Ongoing Support",
    fullWidth: true,
    icon: "/support-img.png",
    paragraphs: [
      "Aside from looking for personal business consultant for you small bussiness or is your business small enough that you are able to do the bookkeeping on your own? If so, that's great! We're helping small business accounting services and I encourage business owners to do the bookkeeping if they are able and willing. If this is you, then perhaps you need support/training along the way. If you have a problem or question, we want to be able to support you in any way that we can.",
      "For ongoing support, we charge at our hourly rate. Contact us for more information about the pricing.",
    ],
    bullets: [],
    footer: null,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="mt-[72px] lg:mt-[88px]">
        <div
          className="relative h-48 sm:h-56 lg:h-64 bg-cover bg-center"
          style={{ backgroundImage: "url('/services-hero.png')" }}
        >
          <div className="absolute inset-0 bg-black/35" />
          <div className="relative h-full flex items-center justify-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white font-[family-name:var(--font-heading)]">
              Services
            </h1>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <SectionWrapper className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {detailedServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`bg-bg-light rounded-2xl p-8 lg:p-10${
                  service.fullWidth ? " lg:col-span-2" : ""
                }`}
              >
                <div className="flex justify-center mb-5">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={96}
                    height={96}
                    className="h-20 w-auto"
                  />
                </div>
                <h2 className="text-2xl font-semibold text-text-dark text-center mb-6 font-[family-name:var(--font-heading)]">
                  {service.title}
                </h2>
                <div className="space-y-4 text-text-muted leading-relaxed">
                  {service.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                  {service.bullets.length > 0 && (
                    <ul className="space-y-3 pt-1">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span className="mt-2 w-2 h-2 rounded-full bg-text-dark flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {service.footer && <p className="pt-4">{service.footer}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
