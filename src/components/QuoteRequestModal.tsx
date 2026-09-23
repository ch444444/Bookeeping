"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { fireContactConversion } from "@/lib/gtag";

/** Where quote requests are emailed. Same Formspree form as the contact page. */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdaqnlbn";

export const ACCOUNTANT_EMAIL = "vasili@northshorebookkeeping.com";

const QUICKBOOKS_SIGN_IN_URL = "https://qbo.intuit.com/";

const REVENUE_RANGES = [
  "Under $750k",
  "$750k to $1 million",
  "$1 million to $2 million",
  "Over $2 million",
];

const QBO_ANSWERS = ["Yes", "No", "Not sure"];

const SERVICE_OPTIONS = [
  "Monthly bookkeeping",
  "Cleanup bookkeeping",
  "Monthly bookkeeping and cleanup",
];

const EMPTY_FORM = {
  name: "",
  email: "",
  business: "",
  phone: "",
  revenue: "",
  quickbooks: "",
  service: "",
  details: "",
};

const labelClass = "block text-sm font-medium text-text-dark mb-1.5";
const fieldClass =
  "w-full rounded-lg border border-border-soft px-4 py-2.5 text-sm text-text-dark outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20";

function ArrowUpRight() {
  return (
    <svg
      className="h-3 w-3 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 17L17 7M8.5 7H17v8.5"
      />
    </svg>
  );
}

interface QuoteRequestModalProps {
  open: boolean;
  onClose: () => void;
}

export default function QuoteRequestModal({
  open,
  onClose,
}: QuoteRequestModalProps) {
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  // createPortal needs a real document, so only render after mount.
  useEffect(() => setMounted(true), []);

  // Close on Escape, and keep the page behind the modal from scrolling.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    firstFieldRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  // Start clean the next time it opens, so a second request is not pre-filled
  // with the last one. Delayed so the reset is not visible while it closes.
  useEffect(() => {
    if (open) return;
    const reset = setTimeout(() => {
      setForm(EMPTY_FORM);
      setSubmitted(false);
      setError("");
      setCopied(false);
    }, 200);
    return () => clearTimeout(reset);
  }, [open]);

  const update = (field: keyof typeof EMPTY_FORM, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(ACCOUNTANT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked - the address is written out above the button anyway.
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "Quote request from " + (form.name || "website visitor"),
          "Request type": "Quote request (home page)",
          Name: form.name,
          Email: form.email,
          "Business name": form.business,
          Phone: form.phone || "Not provided",
          "Annual revenue": form.revenue || "Not provided",
          "Uses QuickBooks Online": form.quickbooks || "Not provided",
          "Needs help with": form.service || "Not provided",
          "About their books": form.details || "Not provided",
        }),
      });

      if (res.ok) {
        fireContactConversion();
        setSubmitted(true);
      } else {
        setError(
          "Something went wrong sending your request. Please try again, or email me directly at " +
            ACCOUNTANT_EMAIL +
            "."
        );
      }
    } catch {
      setError(
        "Something went wrong sending your request. Please try again, or email me directly at " +
          ACCOUNTANT_EMAIL +
          "."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (!mounted || !open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-text-dark/60 p-4 sm:items-center sm:p-6"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-modal-title"
        className="relative my-auto w-full max-w-5xl rounded-2xl bg-white shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-lg bg-surface-soft text-text-muted transition-colors hover:bg-surface-tint hover:text-text-dark"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.25}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="p-6 sm:p-10">
          {submitted ? (
            <div className="py-10 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-7 w-7 text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.25}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.5l5 5 10-11"
                  />
                </svg>
              </div>
              <h2
                id="quote-modal-title"
                className="text-2xl font-bold text-text-dark font-[family-name:var(--font-heading)]"
              >
                Request received.
              </h2>
              <p className="mx-auto mt-3 max-w-md leading-relaxed text-text-muted">
                Thanks. I&apos;ll review what you sent and get back to you
                within one business day. If you have not invited me to
                QuickBooks yet, you can still do that at any time using{" "}
                {ACCOUNTANT_EMAIL}.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-7 rounded-lg bg-primary-dark px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-text-dark"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <h2
                id="quote-modal-title"
                className="pr-12 text-2xl font-bold text-text-dark sm:text-3xl font-[family-name:var(--font-heading)]"
              >
                Request a quote
              </h2>
              <p className="mt-3 leading-relaxed text-text-muted">
                Tell me about your business and invite me to QuickBooks so I can
                review your books.
              </p>

              <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                {/* Form */}
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="quote-name" className={labelClass}>
                        Your name
                      </label>
                      <input
                        ref={firstFieldRef}
                        id="quote-name"
                        type="text"
                        required
                        autoComplete="name"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="quote-email" className={labelClass}>
                        Email address
                      </label>
                      <input
                        id="quote-email"
                        type="email"
                        required
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="quote-business" className={labelClass}>
                        Business name
                      </label>
                      <input
                        id="quote-business"
                        type="text"
                        required
                        autoComplete="organization"
                        value={form.business}
                        onChange={(e) => update("business", e.target.value)}
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="quote-phone" className={labelClass}>
                        Phone (optional)
                      </label>
                      <input
                        id="quote-phone"
                        type="tel"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="quote-revenue" className={labelClass}>
                        Annual revenue
                      </label>
                      <select
                        id="quote-revenue"
                        value={form.revenue}
                        onChange={(e) => update("revenue", e.target.value)}
                        className={fieldClass + " bg-white"}
                      >
                        <option value="">Select a range</option>
                        {REVENUE_RANGES.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="quote-qbo" className={labelClass}>
                        Do you use QuickBooks Online?
                      </label>
                      <select
                        id="quote-qbo"
                        value={form.quickbooks}
                        onChange={(e) => update("quickbooks", e.target.value)}
                        className={fieldClass + " bg-white"}
                      >
                        <option value="">Select an option</option>
                        {QBO_ANSWERS.map((answer) => (
                          <option key={answer} value={answer}>
                            {answer}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="quote-service" className={labelClass}>
                      What do you need help with?
                    </label>
                    <select
                      id="quote-service"
                      value={form.service}
                      onChange={(e) => update("service", e.target.value)}
                      className={fieldClass + " bg-white"}
                    >
                      <option value="">Select a service</option>
                      {SERVICE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="quote-details" className={labelClass}>
                      What should I know about your books?
                    </label>
                    <textarea
                      id="quote-details"
                      rows={4}
                      value={form.details}
                      onChange={(e) => update("details", e.target.value)}
                      placeholder="Your industry, how far behind the books are, and what you need help with."
                      className={fieldClass + " resize-y"}
                    />
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-text-muted">
                    Your information will be sent to North Shore Bookkeeping to
                    review. Please don&apos;t include passwords or account
                    numbers.
                  </p>

                  {error && (
                    <p className="mt-4 text-sm text-red-600" role="alert">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary-dark px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-text-dark hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:shadow-none"
                  >
                    {submitting ? "Sending..." : "Send quote request"}
                    {!submitting && <ArrowUpRight />}
                  </button>
                </form>

                {/* QuickBooks access panel */}
                <aside className="h-fit rounded-xl bg-bg-muted p-6 sm:p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                    QuickBooks access
                  </p>
                  <h3 className="mt-3 text-xl font-bold leading-snug text-text-dark font-[family-name:var(--font-heading)]">
                    Add me as your accounting firm
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    This lets me review your books and prepare your quote.
                  </p>

                  <a
                    href={QUICKBOOKS_SIGN_IN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 border-b border-primary/40 pb-1 text-sm font-semibold text-text-dark transition-colors hover:border-primary hover:text-primary"
                  >
                    Sign in to QuickBooks
                    <ArrowUpRight />
                  </a>

                  <ol className="mt-6 space-y-3 text-sm leading-relaxed text-text-dark">
                    <li className="flex gap-3">
                      <span className="text-text-muted">1.</span>
                      <span>
                        Open <strong className="font-semibold">Settings</strong>{" "}
                        &rarr;{" "}
                        <strong className="font-semibold">Manage users</strong>.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-text-muted">2.</span>
                      <span>
                        Choose{" "}
                        <strong className="font-semibold">Accountants</strong>{" "}
                        or{" "}
                        <strong className="font-semibold">
                          Accounting firms
                        </strong>
                        .
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-text-muted">3.</span>
                      <span>
                        Select <strong className="font-semibold">Invite</strong>{" "}
                        or{" "}
                        <strong className="font-semibold">Invite firm</strong>.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-text-muted">4.</span>
                      <span>
                        Enter{" "}
                        <strong className="whitespace-nowrap font-semibold">
                          {ACCOUNTANT_EMAIL}
                        </strong>{" "}
                        and send the invitation.
                      </span>
                    </li>
                  </ol>

                  <p className="mt-5 text-xs leading-relaxed text-text-muted">
                    Menu names can vary. Add me as an accounting firm, rather
                    than a regular user. You can remove my access after
                    receiving your quote if you need time to decide.
                  </p>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="mt-5 rounded-lg border border-border-soft bg-white px-4 py-2.5 text-sm font-semibold text-text-dark transition-colors hover:border-primary hover:text-primary"
                  >
                    {copied ? "Copied" : "Copy email address"}
                  </button>
                </aside>
              </div>
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
