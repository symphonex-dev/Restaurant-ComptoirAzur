import { useEffect, useState } from 'react'
import './Header.css'

// Liens de navigation. On les stocke dans un tableau plutôt que de répéter
// 8 fois la même balise <a> à la main : plus la liste change souvent,
// plus ça vaut le coup de la piloter par une boucle .map().
const NAV_LINKS = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#a-propos', label: 'À propos' },
  { href: '#carte', label: 'La carte' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#avis', label: 'Avis' },
  { href: '#horaires-acces', label: 'Horaires & Accès' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  // EN JS VANILLA : on utiliserait une variable globale `let isScrolled = false`
  // puis on manipulerait le DOM à la main (element.classList.toggle(...)).
  // EN REACT : l'état (isScrolled, isMenuOpen) vit dans le composant, et
  // React se charge de re-synchroniser le DOM avec cet état à chaque
  // changement. On ne touche jamais le DOM nous-mêmes.
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Ferme le menu mobile après un clic sur un lien, sinon le menu resterait
  // ouvert par-dessus la section vers laquelle on vient de naviguer.
  const handleLinkClick = () => setIsMenuOpen(false)

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__bar">
        <a href="#accueil" className="header__brand" onClick={handleLinkClick}>
          Le Comptoir <em>d'Azur</em>
        </a>

        <nav
          id="header-nav"
          className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}
          aria-label="Navigation principale"
        >
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={handleLinkClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#reservation" className="btn btn-primary header__cta" onClick={handleLinkClick}>
            Réserver une table
          </a>
        </nav>

        <button
          type="button"
          className={`header__toggle ${isMenuOpen ? 'header__toggle--open' : ''}`}
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isMenuOpen}
          aria-controls="header-nav"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
