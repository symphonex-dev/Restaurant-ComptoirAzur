import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE, translations } from './translations'

const STORAGE_KEY = 'comptoir-azur-lang'

const LanguageContext = createContext(null)

// Lit une préférence de langue déjà enregistrée par une visite précédente.
// EN JS VANILLA, on lirait localStorage.getItem(...) directement dans le
// composant ; ici on isole cette petite logique dans une fonction dédiée,
// appelée une seule fois comme valeur initiale de useState (voir plus bas),
// pour ne jamais la ré-exécuter inutilement aux rendus suivants.
function getInitialLanguage() {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (AVAILABLE_LANGUAGES.includes(stored)) return stored
  } catch {
    // Navigation privée, quota dépassé, etc. : on se contente silencieusement
    // de la langue par défaut plutôt que de casser l'affichage du site.
  }

  return DEFAULT_LANGUAGE
}

// ============================================================================
// PROVIDER LanguageProvider
// ----------------------------------------------------------------------------
// Englobe toute l'application (voir main.jsx) pour que N'IMPORTE QUEL
// composant, à n'importe quelle profondeur, puisse lire la langue active et
// le dictionnaire de traductions correspondant via useLanguage(), sans avoir
// à faire transiter cette information de composant en composant par des
// props ("prop drilling"). C'est exactement le problème que le Context de
// React est conçu pour résoudre.
// ============================================================================
export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getInitialLanguage)

  const setLanguage = (nextLanguage) => {
    if (!AVAILABLE_LANGUAGES.includes(nextLanguage)) return
    setLanguageState(nextLanguage)
  }

  const toggleLanguage = () => {
    setLanguageState((current) => (current === 'fr' ? 'en' : 'fr'))
  }

  // Effets de synchronisation avec le document : l'attribut lang, le titre
  // d'onglet et la meta description doivent refléter la langue active, aussi
  // bien pour l'accessibilité (un lecteur d'écran choisit sa prononciation
  // d'après lang="fr"/"en") que pour le SEO. On les regroupe dans un seul
  // effet qui se redéclenche à chaque changement de langue.
  useEffect(() => {
    const dict = translations[language]

    document.documentElement.lang = language
    document.title = dict.meta.title

    const setMetaContent = (selector, content) => {
      const tag = document.querySelector(selector)
      if (tag) tag.setAttribute('content', content)
    }

    setMetaContent('meta[name="description"]', dict.meta.description)
    setMetaContent('meta[property="og:title"]', dict.meta.ogTitle)
    setMetaContent('meta[property="og:description"]', dict.meta.ogDescription)

    try {
      window.localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // Idem : on ignore silencieusement si le stockage n'est pas disponible.
    }
  }, [language])

  // useMemo évite de reconstruire un nouvel objet `value` (et donc de
  // provoquer un re-rendu de tous les consommateurs du contexte) à chaque
  // rendu de LanguageProvider lorsque `language` n'a pas changé.
  const value = useMemo(
    () => ({
      language,
      t: translations[language],
      setLanguage,
      toggleLanguage,
    }),
    [language]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

// Hook de consommation — lève une erreur explicite si utilisé hors du
// Provider, plutôt que de renvoyer `null` et de laisser un composant planter
// plus loin avec un message d'erreur cryptique du type
// "Cannot read properties of null".
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage doit être utilisé à l\'intérieur d\'un <LanguageProvider>')
  }
  return context
}
