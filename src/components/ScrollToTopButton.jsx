import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import './ScrollToTopButton.css'

// Petit composant autonome : il n'affiche rien tant que la personne n'a pas
// scrollé au-delà d'un certain seuil, pour éviter d'encombrer l'écran sur
// le Hero. C'est un exemple simple de composant qui gère entièrement son
// propre état sans avoir besoin de rien recevoir de son parent (App.jsx
// se contente de faire <ScrollToTopButton /> sans aucune prop).
export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 700)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <a
      href="#accueil"
      className={`scroll-top ${isVisible ? 'scroll-top--visible' : ''}`}
      aria-label="Remonter en haut de la page"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
    >
      <ArrowUp size={20} aria-hidden="true" />
    </a>
  )
}
