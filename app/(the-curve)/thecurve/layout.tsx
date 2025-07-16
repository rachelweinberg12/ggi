import type { Metadata } from "next";
import localFont from "next/font/local";
import {
  Lora,
  Plus_Jakarta_Sans,
  Source_Serif_4,
  Crimson_Pro,
} from "next/font/google";
import "../../../globals.css";
import { NavBar } from "./nav-bar";
import { Footer } from "./footer";

const satoshi = localFont({
  src: [
    {
      path: "../../../fonts/Satoshi/Satoshi-Variable.woff2",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "../../../fonts/Satoshi/Satoshi-VariableItalic.woff2",
      weight: "300 900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
});

const theSeasons = localFont({
  src: [
    {
      path: "../../../fonts/TheSeasons/TheSeasons-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../fonts/TheSeasons/TheSeasons-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../fonts/TheSeasons/TheSeasons-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-the-seasons",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson-pro",
  display: "swap",
});

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Curve | October 3-5, Berkeley",
  description:
    "Where thinkers, builders, and leaders grapple with AI's biggest questions — from timelines and risks, to impacts on economic growth and national security, to transformative applications and the future of work.",
  keywords:
    "AI conference, artificial intelligence, The Curve, Berkeley, AI ethics, AI policy, machine learning, AI research, AI governance, AI safety, economics, national security",
  authors: [{ name: "Golden Gate Institute for AI" }],
  openGraph: {
    title: "The Curve - Premier AI Conference",
    description:
      "Where thinkers, builders, and leaders grapple with AI's biggest questions — from timelines and risks, to impacts on economic growth and national security, to transformative applications and the future of work.",
    url: "https://thecurve.goldengateinstitute.org",
    siteName: "The Curve",
    images: [
      {
        url: "/the-curve/display/CurveClouds2.png",
        width: 1200,
        height: 630,
        alt: "The Curve AI Conference - October 3-5, 2025",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Curve - Premier AI Conference",
    description:
      "The premier big picture AI conference where thinkers, builders, and leaders grapple with AI's biggest questions.",
    images: ["/the-curve/display/CurveClouds2.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/the-curve-favicon.svg",
  },
  alternates: {
    canonical: "https://thecurve.goldengateinstitute.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} ${jakartaSans.variable} ${crimsonPro.variable} antialiased theme-the-curve min-h-screen overscroll-none`}
      >
        <NavBar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
