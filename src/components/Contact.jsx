import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react'
import './Contact.css'
import Reveal from './Reveal'

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: 'Téléphone',
    value: '01 02 03 04 05',
    href: 'tel:0102030405',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@comptoirdazur.fr',
    href: 'mailto:contact@comptoirdazur.fr',
  },
  {
    icon: MapPin,
    label: 'Adresse',
    value: '12 Rue Saint-François-de-Paule, 06300 Nice',
    href: 'https://www.google.com/maps?q=12+Rue+Saint-Fran%C3%A7ois-de-Paule,+06300+Nice,+France',
  },
]

const SOCIAL_LINKS = [
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com', handle: '@comptoirdazur' },
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com', handle: 'Le Comptoir d\'Azur' },
]

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">
            Une question, une <em>envie</em> ?
          </h2>
          <p className="section-lead">
            Notre équipe se tient à votre disposition pour toute demande particulière —
            privatisation, événement professionnel ou simple question sur la carte.
          </p>
        </Reveal>

        <div className="contact__grid">
          {CONTACT_ITEMS.map((item, index) => (
            <Reveal as="a" key={item.label} href={item.href} delay={index * 80} className="contact__card">
              <item.icon className="contact__icon" size={22} aria-hidden="true" />
              <div>
                <p className="contact__label">{item.label}</p>
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
            Réserver une table
          </a>
        </Reveal>
      </div>
    </section>
  )
}
