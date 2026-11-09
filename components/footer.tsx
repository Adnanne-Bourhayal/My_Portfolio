"use client"

import { Linkedin, Github, ExternalLink } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/adnan-abattah-a22bb926a/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/Adnanne-Bourhayal", label: "GitHub" },
    { icon: ExternalLink, href: "https://adnanport.vercel.app/", label: "Portfolio" },
  ]

  return (
    <footer className="border-t border-border py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-accent rounded-lg transition-colors"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              {t.footer.tagline}
            </p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Adnan. {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
