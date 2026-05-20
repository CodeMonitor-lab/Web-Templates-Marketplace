import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Header, Footer } from "@/components/Layout"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  metadataBase: new URL("https://yourdomain.com"), // change this
  title: {
    default: "Web Collection – Design, Development & Deployment",
    template: "%s | Web Collection",
  },
  description:
    "We design, develop and deploy high-performance web applications using Next.js, React and modern cloud infrastructure.",

  keywords: [
    "Web Development",
    "Next.js Agency",
    "React Development",
    "AI Automation",
    "Tailwind CSS",
    "Cloud Deployment",
  ],

  authors: [{ name: "Your Name" }],
  creator: "Your Name",

  openGraph: {
    title: "Web Collection – Design, Development & Deployment",
    description:
      "High-performance web apps and AI-powered systems built for scale.",
    url: "https://yourdomain.com",
    siteName: "Web Collection",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Web Collection – Design, Development & Deployment",
    description:
      "Modern web solutions powered by Next.js and AI automation.",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          font-sans 
          antialiased 
          min-h-screen 
          bg-background
        `}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          
          <main className="flex-1">
            {children}
          </main>
          
          <Footer />
        </div>
      </body>
    </html>
  )
}
