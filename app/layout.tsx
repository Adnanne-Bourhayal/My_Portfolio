import type { Metadata } from "next"
import type { ReactNode } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/lib/language-context"
import { profile } from "@/lib/profile"
import "./globals.css"

export const metadata: Metadata = {
  title: profile.displayName,
  description: "Selected projects, experience and contact information.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
