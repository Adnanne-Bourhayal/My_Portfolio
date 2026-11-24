"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Language, getTranslation } from "./i18n"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: ReturnType<typeof getTranslation>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [t, setT] = useState(getTranslation("en"))

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && ["en", "es", "nl"].includes(saved)) {
      setLanguage(saved)
      setT(getTranslation(saved))
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    setT(getTranslation(lang))
    localStorage.setItem("language", lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
