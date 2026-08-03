import './About.css'
import Reveal from './Reveal'
import { useLanguage } from '../i18n/LanguageContext'

const ABOUT_IMAGE =
  'https://images.unsplash.com/photo-1760169799369-2b8574466735?w=1200&q=80&auto=format&fit=crop'

const HIGHLIGHTS_DATA = {
  fr: [
    { label: 'Produits locaux', detail: 'Marché du Cours Saleya et pêcheurs niçois' },
    { label: 'Cuisine ouverte', detail: 'Un chef visible, un geste assumé' },
    { label: 'Carte évolutive', detail: 'Renouvelée au rythme des saisons' },
  ],
  en: [
    { label: 'Local produce', detail: 'Cours Saleya market and local fishermen' },
    { label: 'Open kitchen', detail: 'Visible chef, authentic craftsmanship' },
    { label: 'Seasonal menu', detail: 'Renewed with the rhythm of the seasons' },
  ],
}

const TEXTS = {
  fr: {
    eyebrow: 'À propos',
    title: 'Une table qui prend le temps',
    titleEm: 'de bien faire',
    p1: "Le Comptoir d'Azur est né d'une conviction simple : la Méditerranée offre déjà tout ce qu'il faut pour une grande cuisine, à condition de la respecter. Ici, pas d'esbroufe — des produits choisis chaque matin, une brigade réduite mais exigeante, et une carte qui change avec les saisons plutôt que de figer un menu une fois pour toutes.",
    p2: "Le poisson vient de la pêche côtière, les légumes du marché du Cours Saleya, l'huile d'olive d'un producteur de l'arrière-pays. Cette proximité avec le terroir se retrouve jusque dans l'assiette : des gestes précis, des cuissons justes, et surtout la conviction qu'un bon produit ne doit jamais être maquillé.",
  },
  en: {
    eyebrow: 'About us',
    title: 'A table that takes the time',
    titleEm: 'to do it right',
    p1: "Le Comptoir d'Azur was born from a simple belief: the Mediterranean already offers everything needed for great cuisine, provided it is respected. No gimmicks here — fresh ingredients selected each morning, a small yet dedicated team, and a menu evolving with the seasons.",
    p2: 'Fish comes directly from coastal catches, vegetables from the Cours Saleya market, and olive oil from a hinterland producer. This connection to the region shows in every plate: precise technique, perfect cooking, and the firm belief that quality produce needs no disguise.',
  },
}

export default function About() {
  const { language } = useLanguage()
  const t = TEXTS[language]
  const highlights = HIGHLIGHTS_DATA[language]

  return (
    <section id="a-propos" className="section section--alt about">
      <div className="container about__grid">
        {/* Colonne gauche : Le titre principal (qui démarre désormais tout en haut à gauche) */}
        <div className="about__header-col">
          <Reveal className="about__head">
            <p className="eyebrow">{t.eyebrow}</p>
            <h2 className="section-title about__title">
              {t.title} <em>{t.titleEm}</em>
            </h2>
          </Reveal>

          <Reveal className="about__media" delay={100}>
            <img
              src={ABOUT_IMAGE}
              alt={
                language === 'fr'
                  ? 'Équipe de cuisine préparant les plats dans les coulisses du restaurant'
                  : 'Kitchen team preparing dishes behind the scenes'
              }
              className="about__image"
            />
          </Reveal>
        </div>

        {/* Colonne droite : Les textes et points forts */}
        <div className="about__content">
          <Reveal delay={80}>
            <p className="about__paragraph">{t.p1}</p>
          </Reveal>

          <Reveal delay={140}>
            <p className="about__paragraph">{t.p2}</p>
          </Reveal>

          <Reveal delay={200}>
            <ul className="about__highlights">
              {highlights.map((item) => (
                <li key={item.label} className="about__highlight">
                  <span className="about__highlight-dot" aria-hidden="true" />
                  <div>
                    <p className="about__highlight-label">{item.label}</p>
                    <p className="about__highlight-detail">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}