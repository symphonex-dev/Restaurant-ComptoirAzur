import './Hours.css'
import Reveal from './Reveal'

const SCHEDULE = [
  { days: 'Mardi — Samedi', hours: '12h00 – 14h30' },
  { days: '', hours: '19h00 – 22h30' },
  { days: 'Dimanche', hours: '11h00 – 15h00 (brunch)' },
  { days: 'Lundi', hours: 'Fermé', closed: true },
]

export default function Hours() {
  return (
    <section id="horaires" className="section hours">
      <div className="container hours__grid">
        <Reveal>
          <p className="eyebrow">Horaires</p>
          <h2 className="section-title">
            Quand nous <em>retrouver</em>
          </h2>
          <p className="section-lead">
            Le service continue étant rare à Nice, nous préférons deux services bien tenus qu'un
            service continu bâclé — c'est aussi ça, le respect du produit.
          </p>
        </Reveal>

        <Reveal delay={100} className="hours__card">
          <ul className="hours__list">
            {SCHEDULE.map((row, index) => (
              <li key={index} className={`hours__row ${row.closed ? 'hours__row--closed' : ''}`}>
                {row.days && <span className="hours__days">{row.days}</span>}
                <span className="hours__spacer" aria-hidden="true" />
                <span className="hours__time">{row.hours}</span>
              </li>
            ))}
          </ul>

          <div className="hours__contact">
            <div>
              <p className="hours__contact-label">Téléphone</p>
              <a href="tel:0102030405" className="hours__contact-value">
                01 02 03 04 05
              </a>
            </div>
            <div>
              <p className="hours__contact-label">Adresse</p>
              <p className="hours__contact-value">
                12 Rue Saint-François-de-Paule, 06300 Nice
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
