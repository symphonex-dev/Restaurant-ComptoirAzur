import './LocationMap.css'
import Reveal from './Reveal'

// Intégration Google Maps via une simple URL "output=embed" : cette méthode
// ne nécessite aucune clé API (contrairement à l'API JavaScript Maps), ce
// qui convient parfaitement à un site vitrine qui a seulement besoin
// d'afficher un point sur une carte, sans interactions avancées.
const MAP_EMBED_URL =
  'https://www.google.com/maps?q=12+Rue+Saint-Fran%C3%A7ois-de-Paule,+06300+Nice,+France&output=embed'

export default function LocationMap() {
  return (
    <section id="localisation" className="section section--alt location">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Localisation</p>
          <h2 className="section-title">
            Au cœur du <em>Vieux-Nice</em>
          </h2>
          <p className="section-lead">
            À deux pas du Cours Saleya et de la promenade, dans une rue calme du Vieux-Nice.
          </p>
        </Reveal>

        <Reveal delay={100} className="location__frame">
          <iframe
            src={MAP_EMBED_URL}
            title="Localisation du Comptoir d'Azur sur Google Maps"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </Reveal>
      </div>
    </section>
  )
}
