import './Hours.css'
import Reveal from './Reveal'
import LocationMap from './LocationMap'
import { useLanguage } from '../i18n/LanguageContext'

export default function Hours() {
  const { t } = useLanguage()
  // Le planning (SCHEDULE) vient du dictionnaire de traductions : au-delà
  // des jours traduits, les horaires eux-mêmes changent de format selon la
  // langue (24h en français, 12h AM/PM en anglais) — une vraie adaptation
  // culturelle, pas seulement une traduction mot à mot des libellés.
  const schedule = t.hours.schedule

  return (
    <section id="horaires-acces" className="section hours">
      <div className="container hours__grid">
        <Reveal>
          <p className="eyebrow">{t.hours.eyebrow}</p>
          <h2 className="section-title">
            {t.hours.titleBefore} <em>{t.hours.titleEm}</em>
            {t.hours.titleAfter}
          </h2>
          <p className="section-lead">{t.hours.lead}</p>
        </Reveal>

        <Reveal delay={100} className="hours__card">
          <ul className="hours__list">
            {schedule.map((row, index) => (
              <li key={index} className={`hours__row ${row.closed ? 'hours__row--closed' : ''}`}>
                {row.days && <span className="hours__days">{row.days}</span>}
                <span className="hours__spacer" aria-hidden="true" />
                <span className="hours__time">{row.hours}</span>
              </li>
            ))}
          </ul>

          <div className="hours__contact">
            <div>
              <p className="hours__contact-label">{t.hours.phoneLabel}</p>
              <a href="tel:0102030405" className="hours__contact-value">
                01 02 03 04 05
              </a>
            </div>
            <div>
              <p className="hours__contact-label">{t.hours.addressLabel}</p>
              <p className="hours__contact-value">
                12 Rue Saint-François-de-Paule, 06300 Nice
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="hours__map">
        <div className="container">
          <LocationMap />
        </div>
      </div>
    </section>
  )
}
