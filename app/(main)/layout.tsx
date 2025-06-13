import type { Metadata } from "next";
import localFont from "next/font/local";
import { Source_Serif_4 } from "next/font/google";
import "@/globals.css";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "./footer";

const satoshi = localFont({
  src: [
    {
      path: "../../fonts/Satoshi/Satoshi-Variable.woff2",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "../../fonts/Satoshi/Satoshi-VariableItalic.woff2",
      weight: "300 900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
});

const theSeasons = localFont({
  src: [
    {
      path: "../../fonts/TheSeasons/TheSeasons-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../fonts/TheSeasons/TheSeasons-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/TheSeasons/TheSeasons-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-the-seasons",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Golden Gate Institute for AI",
  description:
    "A non-profit that supports leaders to meet the challenges of the AI transition by bridging disciplines, convening experts, and publishing accessible analysis of AI’s toughest questions.",
  openGraph: {
    title: "Golden Gate Institute for AI",
    description:
      "A non-profit that supports leaders to meet the challenges of the AI transition by bridging disciplines, convening experts, and publishing accessible analysis of AI’s toughest questions.",

    url: "https://goldengateinstitute.org",
    siteName: "Golden Gate Institute for AI",
    images: [
      {
        url: "/GGB.png",
        width: 960,
        height: 540,
        alt: "Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
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
        className={`${satoshi.variable} ${theSeasons.variable} ${sourceSerif.variable} font-sans antialiased theme-classic min-h-screen overscroll-none`}
      >
        <NavBar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
