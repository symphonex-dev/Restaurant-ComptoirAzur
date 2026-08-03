import { Instagram, Facebook } from 'lucide-react'
import './Footer.css'
import { useLanguage } from '../i18n/LanguageContext'

// Mêmes ancres que dans Header.jsx (NAV_LINKS) : on réutilise volontairement
// la même clé de traduction t.header.links.<key> plutôt que de dupliquer un
// jeu de libellés distinct dans le dictionnaire de traductions. Un seul
// endroit à mettre à jour si un jour un intitulé de navigation change.
const FOOTER_LINKS = [
  { href: '#accueil', key: 'accueil' },
  { href: '#a-propos', key: 'apropos' },
  { href: '#carte', key: 'carte' },
  { href: '#galerie', key: 'galerie' },
  { href: '#avis', key: 'avis' },
  { href: '#horaires-acces', key: 'horaires' },
  { href: '#contact', key: 'contact' },
]

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <p className="footer__logo">
              Le Comptoir <em>d'Azur</em>
            </p>
            <p className="footer__tagline">{t.footer.tagline}</p>
          </div>

          <nav className="footer__nav" aria-label={t.footer.navAria}>
            <ul>
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{t.header.links[link.key]}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__social">
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
              <Instagram size={18} aria-hidden="true" />
            </a>
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
              <Facebook size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__legal">{t.footer.legal(year)}</p>
        </div>
      </div>
    </footer>
  )
}
