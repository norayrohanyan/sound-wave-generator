import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import Header from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

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
