import { useCallback, useEffect, useState } from 'react'
import './Testimonials.css'
import Reveal from './Reveal'
import { testimonials } from '../data/testimonialsData'
import { useLanguage } from '../i18n/LanguageContext'

const AUTO_ADVANCE_DELAY = 6500

// ============================================================================
// COMPOSANT Testimonials — carrousel
// ----------------------------------------------------------------------------
// EN JS VANILLA : un carrousel automatique se code avec un setInterval
// global, et il faut penser à faire clearInterval() manuellement dans tous
// les cas (changement de page, clic manuel...) sous peine de fuite mémoire.
//
// EN REACT : setInterval vit à l'intérieur d'un useEffect, dont la fonction
// de nettoyage (le `return () => clearInterval(...)`) est appelée
// automatiquement par React à chaque fois que l'effet doit se relancer
// (ici : à chaque changement d'index, pour repartir sur un délai complet)
// ou que le composant disparaît de l'écran. On ne peut quasiment pas
// oublier de nettoyer, contrairement au JS impératif classique.
// ============================================================================
export default function Testimonials() {
  const { t } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const total = testimonials.length

  const goTo = (index) => setActiveIndex((index + total) % total)
  const goNext = useCallback(() => setActiveIndex((current) => (current + 1) % total), [total])
  const goPrevious = () => setActiveIndex((current) => (current - 1 + total) % total)

  // Auto-avance, mise en pause au survol ou au focus clavier — indispensable
  // pour l'accessibilité : un carrousel qui continue de bouger pendant
  // qu'on essaie de lire au clavier est un carrousel inutilisable.
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(goNext, AUTO_ADVANCE_DELAY)
    return () => clearInterval(timer)
  }, [isPaused, goNext, activeIndex])

  const current = testimonials[activeIndex]

  return (
    <section id="avis" className="section section--dark testimonials">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{t.testimonials.eyebrow}</p>
          <h2 className="section-title">
            {t.testimonials.titleBefore} <em>{t.testimonials.titleEm}</em>
            {t.testimonials.titleAfter}
          </h2>
        </Reveal>

        <div
          className="testimonials__carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <button
            type="button"
            className="testimonials__control testimonials__control--prev"
            onClick={goPrevious}
            aria-label={t.testimonials.prev}
          >
            ‹
          </button>

          {/* aria-live="polite" annonce le changement d'avis aux lecteurs
              d'écran sans les interrompre brutalement. */}
          <div className="testimonials__slide" aria-live="polite">
            <blockquote className="testimonials__quote">
              <div className="testimonials__stars" aria-label={t.testimonials.starsAria(current.rating)}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} aria-hidden="true">
                    {i < current.rating ? '★' : '☆'}
                  </span>
                ))}
              </div>
              {/* Le contenu de l'avis (current.comment) et sa langue
                  (current.lang) sont FIXES : ils ne dépendent jamais du
                  sélecteur FR/EN du site (voir testimonialsData.js). Seul le
                  style typographique des guillemets s'adapte à la langue
                  RÉELLE de cet avis précis — « » pour un avis en français,
                  “ ” pour un avis en anglais — indépendamment de la langue
                  actuellement affichée pour le reste du site. */}
              <p className="testimonials__comment">
                {current.lang === 'fr' ? `« ${current.comment} »` : `\u201C${current.comment}\u201D`}
              </p>
              <footer className="testimonials__author">{current.name}</footer>
            </blockquote>
          </div>

          <button
            type="button"
            className="testimonials__control testimonials__control--next"
            onClick={goNext}
            aria-label={t.testimonials.next}
          >
            ›
          </button>
        </div>

        <div className="testimonials__dots" role="tablist" aria-label={t.testimonials.dotsAria}>
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={t.testimonials.dotAria(testimonial.name)}
              className={`testimonials__dot ${index === activeIndex ? 'testimonials__dot--active' : ''}`}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
