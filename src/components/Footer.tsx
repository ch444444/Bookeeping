import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-text-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-10 md:gap-16">
          {/* Logo */}
          <img
            src="/logo.svg"
            alt="North Shore Bookkeeping"
            className="h-16 md:h-20 w-auto brightness-0 invert"
          />

          {/* QuickBooks Certified ProAdvisor Badge */}
          <div className="inline-block w-32">
            <div className="bg-white rounded-t-lg px-3 pt-3 pb-2 text-center border border-gray-200">
              <div className="flex justify-center mb-1.5">
                <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" fill="#2CA01C"/>
                  <path d="M14 14h-2a4 4 0 000 8h2v4h-2a8 8 0 010-16h2v4zm12 12h2a4 4 0 000-8h-2v-4h2a8 8 0 010 16h-2v-4z" fill="white"/>
                  <rect x="18" y="12" width="4" height="16" rx="2" fill="white"/>
                </svg>
              </div>
              <p className="text-[7px] text-gray-500 leading-tight">intuit</p>
              <p className="text-xs font-bold text-gray-800 leading-tight">quickbooks<span className="text-[7px] align-top">.</span></p>
              <div className="border-t border-gray-200 mt-1.5 pt-1.5">
                <p className="text-[10px] font-semibold text-gray-800 leading-tight">Certified</p>
                <p className="text-[10px] font-semibold text-gray-800 leading-tight">ProAdvisor</p>
              </div>
            </div>
            <div className="relative">
              <div className="flex">
                <div className="w-1/2 h-6 bg-[#80C342]" style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 60%)"}}></div>
                <div className="w-1/2 h-6 bg-[#2CA01C]" style={{clipPath: "polygon(0 0, 100% 0, 50% 60%, 0 100%)"}}></div>
              </div>
            </div>
          </div>

          {/* Nav Links (no heading) */}
          <ul className="space-y-3 text-center">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Info */}
          <div className="text-center">
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 font-[family-name:var(--font-heading)]">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="tel:+18473051323"
                  className="hover:text-primary transition-colors"
                >
                  (847) 305-1323
                </a>
              </li>
              <li>
                <a
                  href="mailto:vasili@northshorebookkeeping.com"
                  className="hover:text-primary transition-colors"
                >
                  vasili@northshorebookkeeping.com
                </a>
              </li>
              <li>Chicago, Illinois</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} North Shore Bookkeeping. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
