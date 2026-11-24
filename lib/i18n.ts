import en from "./content/en.json"
import es from "./content/es.json"
import nl from "./content/nl.json"

const translations = { en, es, nl } satisfies Record<string, typeof en>
export type Language = keyof typeof translations
export function getTranslation(language: Language) {
  return translations[language]
}
