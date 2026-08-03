import { useEffect, useState } from 'react'
import './Hero.css'
import { useLanguage } from '../i18n/LanguageContext'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1756680967373-c3205a8a8b31?w=1900&q=80&auto=format&fit=crop'

// ============================================================================
// COMPOSANT Hero
// ----------------------------------------------------------------------------
// Contrairement aux sections plus bas dans la page, le Hero est visible dès
// le chargement : son animation ne peut donc pas dépendre du scroll (l'élément
// est déjà dans le viewport). On déclenche l'apparition avec un simple
// useState + useEffect au montage du composant : `mounted` passe de false à
// true juste après le premier rendu, ce qui fait glisser le texte vers le
// haut avec un fondu, un peu comme un rideau qui se lève.
// ============================================================================
export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="accueil" className="hero" aria-label={t.hero.ariaLabel}>
      <div className="hero__media">
        <img src={HERO_IMAGE} alt={t.hero.imageAlt} className="hero__image" />
        <div className="hero__scrim" aria-hidden="true" />
      </div>

      <div className={`container hero__content ${mounted ? 'hero__content--in' : ''}`}>
        <p className="eyebrow hero__eyebrow">{t.hero.eyebrow}</p>
        {/* Le nom du restaurant est un nom propre : il ne se traduit jamais,
            contrairement au reste du contenu de cette section. */}
        <h1 className="hero__title">
          Le Comptoir <em>d'Azur</em>
        </h1>
        <p className="hero__subtitle">{t.hero.subtitle}</p>
        <p className="hero__description">{t.hero.description}</p>
        <div className="hero__actions">
          <a href="#reservation" className="btn btn-primary">
            {t.common.reserveCta}
          </a>
          <a href="#carte" className="btn btn-ghost hero__ghost">
            {t.hero.ctaMenu}
          </a>
        </div>
      </div>
    </section>
  )
}