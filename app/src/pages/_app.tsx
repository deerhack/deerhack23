import type { AppProps } from "next/app";

import { Layout } from "@/components/Layout";
import { Poppins, Montserrat } from "@next/font/google";

import "@/styles/globals.css";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-46QHYVR4HL"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
           window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-46QHYVR4HL', {
              page_path: window.location.pathname,
            });
      `,
        }}
      />

      <div
        className={`${poppins.variable} ${montserrat.variable} min-w-[300px]`}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}
