import { useEffect, useState } from 'react'
import './Header.css'
import { useLanguage } from '../i18n/LanguageContext'

// Liens de navigation. On stocke uniquement l'ancre (href) et la CLÉ de
// traduction ici, jamais le libellé affiché directement : le libellé est
// allé chercher dans t.header.links à chaque rendu, pour rester à jour
// quelle que soit la langue active. Le tableau lui-même ne change jamais
// d'une langue à l'autre — seul son contenu affiché change.
const NAV_LINKS = [
  { href: '#accueil', key: 'accueil' },
  { href: '#a-propos', key: 'apropos' },
  { href: '#carte', key: 'carte' },
  { href: '#galerie', key: 'galerie' },
  { href: '#avis', key: 'avis' },
  { href: '#horaires-acces', key: 'horaires' },
  { href: '#contact', key: 'contact' },
]

export default function Header() {
  // EN JS VANILLA : on utiliserait une variable globale `let isScrolled = false`
  // puis on manipulerait le DOM à la main (element.classList.toggle(...)).
  // EN REACT : l'état (isScrolled, isMenuOpen) vit dans le composant, et
  // React se charge de re-synchroniser le DOM avec cet état à chaque
  // changement. On ne touche jamais le DOM nous-mêmes.
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

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

        {/* ====================================================================
            header__right regroupe TOUT ce qui vit à droite du logo : la nav
            (qui devient un panneau plein écran sur mobile), le sélecteur de
            langue et le bouton hamburger. Pourquoi les sortir de <nav> :
            le sélecteur de langue et le hamburger doivent rester visibles et
            cliquables EN PERMANENCE, y compris sur mobile quand le menu de
            navigation est fermé — contrairement aux liens eux-mêmes, qui
            eux se cachent dans le panneau tant qu'il n'est pas ouvert.
        ==================================================================== */}
        <div className="header__right">
          <nav
            id="header-nav"
            className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}
            aria-label={t.header.navAria}
          >
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={handleLinkClick}>
                    {t.header.links[link.key]}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#reservation" className="btn btn-primary header__cta" onClick={handleLinkClick}>
              {t.common.reserveCta}
            </a>
          </nav>

          {/* ==================================================================
              SÉLECTEUR DE LANGUE FR / EN
              ------------------------------------------------------------------
              Un simple groupe de 2 boutons (et non un <select>) : plus rapide
              à activer en un clic/tap, et le libellé "FR" / "EN" reste
              visible en permanence pour les deux options — contrairement à un
              menu déroulant qui masquerait l'option non sélectionnée.
              role="group" + aria-label rattachent les deux boutons ensemble
              pour un lecteur d'écran ; aria-pressed indique l'état actif de
              chacun, exactement comme un bouton "toggle" classique.
          ================================================================== */}
          <div className="lang-toggle" role="group" aria-label={t.header.langToggle.groupLabel}>
            <button
              type="button"
              className={`lang-toggle__option ${language === 'fr' ? 'lang-toggle__option--active' : ''}`}
              aria-pressed={language === 'fr'}
              aria-label={t.header.langToggle.switchToFr}
              onClick={() => setLanguage('fr')}
            >
              FR
            </button>
            <button
              type="button"
              className={`lang-toggle__option ${language === 'en' ? 'lang-toggle__option--active' : ''}`}
              aria-pressed={language === 'en'}
              aria-label={t.header.langToggle.switchToEn}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            className={`header__toggle ${isMenuOpen ? 'header__toggle--open' : ''}`}
            aria-label={isMenuOpen ? t.header.closeMenu : t.header.openMenu}
            aria-expanded={isMenuOpen}
            aria-controls="header-nav"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
