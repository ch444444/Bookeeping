import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalendlyConversion from "@/components/CalendlyConversion";

export const metadata: Metadata = {
  title: "North Shore Bookkeeping | Professional Bookkeeping Services",
  description:
    "Expert bookkeeping services for small businesses. Monthly bookkeeping, cleanup, catch-up, and consulting. Book a free call today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Calendly popup widget styles */}
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {/* Google tag (gtag.js) - Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17804973985"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17804973985');
            gtag('config', 'AW-17804973985/CZDzCL6PtOccEKGviapC', {
              'phone_conversion_number': '(847) 305-1323'
            });
          `}
        </Script>
        <Header />
        <main>{children}</main>
        <Footer />
        {/* Reports the Google Ads conversion when a Calendly booking completes */}
        <CalendlyConversion />
      </body>
    </html>
  );
}
