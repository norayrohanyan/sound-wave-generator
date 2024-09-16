import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sound Wave Generator | Renderforest",
  description:
    "Create and customize sound waves with Renderforest’s advanced tools.",
  openGraph: {
    title: "Sound Wave Generator | Renderforest",
    description:
      "Create and customize sound waves with Renderforest’s advanced tools.",
    url: "https://www.renderforest.com/sound-wave-generator",
    images: [
      {
        url: "https://www.renderforest.com/images/og-image.png",
        width: 800,
        height: 600,
        alt: "Sound Wave Generator",
      },
    ],
    siteName: "Renderforest",
  },
  twitter: {
    card: "summary_large_image",
    site: "@RenderforestCom",
    title: "Sound Wave Generator | Renderforest",
    description:
      "Create and customize sound waves with Renderforest’s advanced tools.",
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
    icon: "/favicon.png",
  },
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
        <main className="min-h-screen mt-8 lg:mt-auto mb-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
