import type { Metadata } from "next";
import localFont from "next/font/local";
import { Lora, Plus_Jakarta_Sans, Source_Serif_4 } from "next/font/google";
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

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Curve",
  description: "The premier big picture AI conference",
  icons: {
    icon: "/the-curve-favicon.ico",
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
        className={`${lora.variable} ${jakartaSans.variable} antialiased theme-the-curve min-h-screen overscroll-none`}
      >
        <NavBar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
