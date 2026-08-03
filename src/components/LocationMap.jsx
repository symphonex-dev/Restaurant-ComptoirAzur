import './LocationMap.css'
import Reveal from './Reveal'
import { useLanguage } from '../i18n/LanguageContext'

// Intégration Google Maps via une simple URL "output=embed" : cette méthode
// ne nécessite aucune clé API (contrairement à l'API JavaScript Maps), ce
// qui convient parfaitement à un site vitrine qui a seulement besoin
// d'afficher un point sur une carte, sans interactions avancées.
const MAP_EMBED_URL =
  'https://www.google.com/maps?q=12+Rue+Saint-Fran%C3%A7ois-de-Paule,+06300+Nice,+France&output=embed'

export default function LocationMap() {
  const { t } = useLanguage()

  return (
    <div className="location">
      <Reveal className="section-head">
        <p className="eyebrow">{t.location.eyebrow}</p>
        <h2 className="section-title">
          {t.location.titleBefore} <em>{t.location.titleEm}</em>
          {t.location.titleAfter}
        </h2>
        <p className="section-lead">{t.location.lead}</p>
      </Reveal>

      <Reveal delay={100} className="location__frame">
        <iframe
          src={MAP_EMBED_URL}
          title={t.location.iframeTitle}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </Reveal>
    </div>
  )
}
