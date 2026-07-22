import { Instagram, Facebook } from 'lucide-react'
import './Footer.css'

const FOOTER_LINKS = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#a-propos', label: 'À propos' },
  { href: '#carte', label: 'La carte' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#avis', label: 'Avis' },
  { href: '#horaires', label: 'Horaires & Accès' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <p className="footer__logo">
              Le Comptoir <em>d'Azur</em>
            </p>
            <p className="footer__tagline">Cuisine méditerranéenne · Nice</p>
          </div>

          <nav className="footer__nav" aria-label="Navigation du pied de page">
            <ul>
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
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
          <p className="footer__legal">
            © {year} Le Comptoir d'Azur — Tous droits réservés. SIRET fictif : 000 000 000 00000.
            Site à visée de démonstration.
          </p>
        </div>
      </div>
    </footer>
  )
}
