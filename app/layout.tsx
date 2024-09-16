import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from 'next/font/google';
import Header from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Sound Wave Generator | Renderforest",
  description:
    "Create and customize sound waves with Renderforest’s advanced tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.className}`}>
      <body className="overflow-x-hidden">
        <Header />
        <main className="min-h-screen mt-8 mb-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
