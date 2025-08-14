import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "BuzzAgent - AI-Powered Social Media Automation",
  description:
    "Effortlessly auto-post trending content with our secure AI agent. No lock-in period, cancel anytime. Your safety and privacy come first.",
  keywords: "AI social media, auto posting, trending content, Twitter automation, social media agent, secure posting",
  authors: [{ name: "BuzzAgent" }],
  creator: "BuzzAgent",
  publisher: "BuzzAgent",
  robots: "index, follow",
  openGraph: {
    title: "BuzzAgent - AI-Powered Social Media Automation",
    description: "Effortlessly auto-post trending content with our secure AI agent. No lock-in period, cancel anytime.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuzzAgent - AI-Powered Social Media Automation",
    description: "Effortlessly auto-post trending content with our secure AI agent.",
  },
    generator: 'formpilot.org'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}