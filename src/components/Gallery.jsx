import { useCallback, useEffect, useRef, useState } from 'react'
import './Gallery.css'
import Reveal from './Reveal'
import { galleryImages } from '../data/galleryData'

// ============================================================================
// COMPOSANT Gallery — avec lightbox (visionneuse plein écran)
// ----------------------------------------------------------------------------
// EN JS VANILLA, une lightbox s'implémente en ajoutant/retirant des classes
// CSS sur un <div id="lightbox"> unique dans le HTML, et en gérant à la main
// les écouteurs clavier (keydown sur `document`) qu'il faut ensuite penser à
// retirer pour ne pas les empiler à chaque ouverture.
//
// EN REACT, la lightbox est un rendu conditionnel : `activeIndex` vaut soit
// `null` (fermée), soit l'index de la photo à afficher. Le useEffect ci-dessous
// n'attache l'écouteur clavier QUE lorsque la lightbox est ouverte, et le
// retire automatiquement à la fermeture (la fonction retournée par useEffect
// est le "nettoyage" — l'équivalent d'un removeEventListener explicite).
// ============================================================================
export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)
  const closeButtonRef = useRef(null)
  const lastTriggerRef = useRef(null)
  const dialogRef = useRef(null)

  const isOpen = activeIndex !== null

  const openAt = (index, event) => {
    lastTriggerRef.current = event?.currentTarget ?? null
    setActiveIndex(index)
  }

  const close = useCallback(() => {
    setActiveIndex(null)
    // On redonne le focus à la vignette qui a ouvert la lightbox : sans ça,
    // une personne naviguant au clavier perdrait le fil et retomberait sur
    // le haut de la page après fermeture.
    lastTriggerRef.current?.focus()
  }, [])

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % galleryImages.length)
  }, [])

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => (current - 1 + galleryImages.length) % galleryImages.length)
  }, [])

  // Écouteurs clavier actifs uniquement pendant que la lightbox est ouverte.
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowRight') showNext()
      if (event.key === 'ArrowLeft') showPrevious()

      // Piège à focus : tant que la lightbox est ouverte, Tab / Shift+Tab
      // ne doivent jamais faire sortir le focus vers le contenu de la page
      // en arrière-plan. On récupère tous les éléments focalisables DANS
      // la boîte de dialogue, et on boucle manuellement du dernier vers le
      // premier (et inversement) quand on atteint une extrémité.
      if (event.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll('button')
        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    closeButtonRef.current?.focus()

    // On bloque le scroll de la page derrière la lightbox pendant qu'elle
    // est ouverte, pour éviter la confusion de deux zones scrollables.
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen, close, showNext, showPrevious])

  const activeImage = isOpen ? galleryImages[activeIndex] : null

  return (
    <section id="galerie" className="section gallery">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Galerie</p>
          <h2 className="section-title">
            Un aperçu de <em>l'ambiance</em>
          </h2>
          <p className="section-lead">
            La salle, la cuisine, les produits et les assiettes — un avant-goût de ce qui vous
            attend. Cliquez sur une photo pour l'agrandir.
          </p>
        </Reveal>

        <ul className="gallery__grid">
          {galleryImages.map((image, index) => (
            <Reveal as="li" key={image.url} delay={(index % 4) * 70} className="gallery__item">
              <button
                type="button"
                className="gallery__thumb"
                onClick={(event) => openAt(index, event)}
                aria-haspopup="dialog"
              >
                <img src={image.url} alt={image.alt} loading="lazy" />
                <span className="gallery__caption">{image.caption}</span>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      {isOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Photo : ${activeImage.caption}`}
          ref={dialogRef}
          onClick={(event) => {
            // Ferme si on clique sur le fond sombre, mais pas sur l'image
            // ou les boutons (on vérifie que la cible du clic est bien
            // l'arrière-plan lui-même).
            if (event.target === event.currentTarget) close()
          }}
        >
          <button
            type="button"
            ref={closeButtonRef}
            className="lightbox__close"
            onClick={close}
            aria-label="Fermer la visionneuse"
          >
            ✕
          </button>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            onClick={showPrevious}
            aria-label="Photo précédente"
          >
            ‹
          </button>

          <figure className="lightbox__figure">
            <img src={activeImage.url} alt={activeImage.alt} />
            <figcaption>{activeImage.caption}</figcaption>
          </figure>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            onClick={showNext}
            aria-label="Photo suivante"
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}
