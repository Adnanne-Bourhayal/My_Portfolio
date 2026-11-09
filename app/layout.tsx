import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Adnan | Application & Technical Support",
  description: "Entry-level application and technical support. Windows, SQL, CRM and software projects. Spanish and English. Based in Belgium.",
  keywords: ["application support", "technical support", "SQL", "CRM", "Windows", "Spanish", "Belgium"],
  authors: [{ name: "Adnan" }],
  creator: "Adnan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adnanport.vercel.app",
    title: "Adnan | Application & Technical Support",
    description: "Entry-level application and technical support. Windows, SQL, CRM and software projects. Spanish and English. Based in Belgium.",
    siteName: "Adnan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adnan | Application & Technical Support",
    description: "Entry-level application and technical support. Windows, SQL, CRM and software projects. Spanish and English. Based in Belgium.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/icon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
