"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

// Roughly the height of the fixed header, so an anchored section is not
// hidden underneath it.
const HEADER_OFFSET = 80;

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Every header link does a full page load. Page links (Home, About,
  // Services, Contact) land at the top; section links (Pricing,
  // Testimonials) land on their section - even if you're already there.
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Leave open-in-new-tab clicks to the browser.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }

    e.preventDefault();

    const [path, hash] = href.split("#");
    const target = path || "/";
    const samePage = pathname === target;

    if (!samePage) {
      // Different page: a plain assignment is already a full page load.
      window.location.href = href;
      return;
    }

    // Same page: point the URL at where we want to end up, then hard reload.
    // Don't let the browser drop us back at the old scroll position.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    const url = hash
      ? `${target}#${hash}`
      : `${target}${window.location.search}`;
    window.history.replaceState(null, "", url);
    if (!hash) {
      window.scrollTo(0, 0);
    }
    window.location.reload();
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Landing on /#pricing or /#testimonials: the browser makes its own jump
  // while images are still loading, so the section has moved by the time the
  // page settles. Re-anchor ourselves until things stop shifting (or until
  // the visitor takes over the scrolling).
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;

    let cancelled = false;
    const jump = () => {
      if (cancelled) return;
      const el = document.getElementById(id);
      if (!el) return;
      const top =
        el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      // behavior "auto" overrides the CSS smooth scroll, so this is instant.
      window.scrollTo({ top, behavior: "auto" });
    };
    const stop = () => {
      cancelled = true;
    };

    const takeovers = ["wheel", "touchstart", "keydown", "mousedown"];
    takeovers.forEach((ev) =>
      window.addEventListener(ev, stop, { passive: true })
    );

    jump();
    const timers = [50, 150, 350, 700, 1200, 1800].map((delay) =>
      window.setTimeout(jump, delay)
    );
    window.addEventListener("load", jump);

    return () => {
      cancelled = true;
      timers.forEach((t) => window.clearTimeout(t));
      window.removeEventListener("load", jump);
      takeovers.forEach((ev) => window.removeEventListener(ev, stop));
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-3"
          : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="/logo.svg"
            alt="North Shore Bookkeeping"
            className="h-12 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-base transition-colors ${
                pathname === link.href
                  ? "font-semibold text-primary"
                  : "font-medium text-text-dark hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Call Us */}
        <a
          href="tel:+18473051323"
          className="hidden md:flex items-center gap-2 text-text-dark hover:text-primary transition-colors"
        >
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
          <span className="text-base font-bold font-[family-name:var(--font-heading)]">
            (847) 305-1323
          </span>
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-text-dark transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-text-dark transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-text-dark transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    setMobileOpen(false);
                    handleNavClick(e, link.href);
                  }}
                  className={`text-lg transition-colors ${
                    pathname === link.href
                      ? "font-semibold text-primary"
                      : "font-medium text-text-dark hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+18473051323"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 text-text-dark font-bold"
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (847) 305-1323
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
