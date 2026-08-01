import { useEffect, useState } from 'react'
import './Hero.css'

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

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="accueil" className="hero" aria-label="Présentation du restaurant">
      <div className="hero__media">
        <img
          src={HERO_IMAGE}
          alt="Terrasse de restaurant surplombant la mer Méditerranée au coucher du soleil"
          className="hero__image"
        />
        <div className="hero__scrim" aria-hidden="true" />
      </div>

      <div className={`container hero__content ${mounted ? 'hero__content--in' : ''}`}>
        <p className="eyebrow hero__eyebrow">Nice · Cuisine méditerranéenne</p>
        <h1 className="hero__title">
          Le Comptoir <em>d'Azur</em>
        </h1>
        <p className="hero__subtitle">La mer, le soleil, et une table qui leur ressemble.</p>
        <p className="hero__description">
          Au cœur du Vieux-Nice, une cuisine méditerranéenne exigeante qui met à l'honneur les
          produits de la pêche du jour et les saveurs du Sud, dans un cadre pensé pour ralentir
          le temps d'un repas.
        </p>
        <div className="hero__actions">
          <a href="#reservation" className="btn btn-primary">
            Réserver une table
          </a>
          <a href="#carte" className="btn btn-ghost hero__ghost">
            Découvrir la carte
          </a>
        </div>
      </div>
    </section>
  )
}