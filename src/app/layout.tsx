import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: site.global.site.title,
  description: site.global.site.description,
};

import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader className="fixed top-0 left-0 w-full z-[100]" />
        <SmoothScroll>
          <div className="pt-[144px] md:pt-[208px]">
            {children}
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
