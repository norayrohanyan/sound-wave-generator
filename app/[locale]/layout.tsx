import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { getMessages } from "next-intl/server";
import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

// Separate Metadata
export const metadata: Metadata = {
  title: "Sound Wave Generator | Renderforest",
  description:
    "Create and customize sound waves with Renderforest’s advanced tools.",
  openGraph: {
    title: "Sound Wave Generator | Renderforest",
    description:
      "Create and customize sound waves with Renderforest’s advanced tools.",
    url: "https://sound-wave-generator-tau.vercel.app/",
    images: [
      {
        url: "https://sound-wave-generator-tau.vercel.app/images/hero-image.png",
        width: 800,
        height: 400,
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
    images: [
      {
        url: "https://sound-wave-generator-tau.vercel.app/images/hero-image.png",
        width: 800,
        height: 400,
        alt: "Sound Wave Generator",
      },
    ],
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
    icon: "/favicon.ico",
  },
  keywords: [
    "Sound Wave Generator",
    "Renderforest",
    "Audio Visualizer",
    "Sound Waves",
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${montserrat.className}`}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className="overflow-x-hidden">
          <Header />
          <main className="min-h-screen mt-8 lg:mt-auto mb-24">{children}</main>
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
