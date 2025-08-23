import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNavigations from "@/components/TopNavigation";
import Footer from "@/components/FooterSection";
import { Lato } from "next/font/google";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thinklane Digital Academy",
  description: "Run live Meta & Google Ads campaigns, track analytics, and build a portfolio that lands your dream job.",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopNavigations />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
