import type { Metadata } from "next";
import "./globals.css";

import Providers from "./providers";

export const metadata: Metadata = {
  title: {
    default: "Seller Dashboard",
    template: "%s | Seller Dashboard",
  },
  description: "Modern Seller Dashboard built with Next.js 16.",
  applicationName: "Seller Dashboard",
  keywords: [
    "seller",
    "dashboard",
    "templates",
    "marketplace",
    "brandbuilder",
    "nextjs",
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}