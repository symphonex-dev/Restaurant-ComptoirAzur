import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react'
import './Contact.css'
import Reveal from './Reveal'
import { useLanguage } from '../i18n/LanguageContext'

// Coordonnées de contact : le numéro, l'email et l'adresse postale restent
// identiques dans les deux langues (ce ne sont pas des mots à traduire, ce
// sont des données), seul le libellé qui les introduit (label) est traduit
// — allé chercher dans t.contact.items via la clé `key` ci-dessous, qui elle
// ne change jamais et sert aussi de clé React stable pour le .map().
const CONTACT_ITEMS = [
  {
    key: 'phone',
    icon: Phone,
    value: '01 02 03 04 05',
    href: 'tel:0102030405',
  },
  {
    key: 'email',
    icon: Mail,
    value: 'contact@comptoirdazur.fr',
    href: 'mailto:contact@comptoirdazur.fr',
  },
  {
    key: 'address',
    icon: MapPin,
    value: '12 Rue Saint-François-de-Paule, 06300 Nice',
    href: 'https://www.google.com/maps?q=12+Rue+Saint-Fran%C3%A7ois-de-Paule,+06300+Nice,+France',
  },
]

// Les noms des réseaux sociaux (Instagram, Facebook) sont des marques : ils
// ne se traduisent jamais, dans aucune langue — d'où leur présence directe
// ici plutôt que dans le dictionnaire de traductions.
const SOCIAL_LINKS = [
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com', handle: '@comptoirdazur' },
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com', handle: 'Le Comptoir d\'Azur' },
]

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2 className="section-title">
            {t.contact.titleBefore} <em>{t.contact.titleEm}</em>
            {t.contact.titleAfter}
          </h2>
          <p className="section-lead">{t.contact.lead}</p>
        </Reveal>

        <div className="contact__grid">
          {CONTACT_ITEMS.map((item, index) => (
            <Reveal as="a" key={item.key} href={item.href} delay={index * 80} className="contact__card">
              <item.icon className="contact__icon" size={22} aria-hidden="true" />
              <div>
                <p className="contact__label">{t.contact.items[item.key]}</p>
                <p className="contact__value">{item.value}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={260} className="contact__footer-row">
          <div className="contact__social">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="contact__social-link"
                aria-label={`${social.label} — ${social.handle}`}
                target="_blank"
                rel="noreferrer"
              >
                <social.icon size={20} aria-hidden="true" />
                <span>{social.handle}</span>
              </a>
            ))}
          </div>

          <a href="#reservation" className="btn btn-primary">
            {t.common.reserveCta}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
