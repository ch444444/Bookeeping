import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalendlyConversion from "@/components/CalendlyConversion";
import MetaPageTracking from "@/components/MetaPageTracking";
import { META_PIXEL_ID } from "@/lib/metaPixel";

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
        {/* Meta Pixel - base code, fires PageView on the first load */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
        {/* Reports the Google Ads conversion when a Calendly booking completes */}
        <CalendlyConversion />
        {/* Meta ViewContent on high-intent pages and the pricing section */}
        <MetaPageTracking />
      </body>
    </html>
  );
}
