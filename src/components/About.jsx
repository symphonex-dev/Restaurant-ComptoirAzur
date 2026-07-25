import './About.css'
import Reveal from './Reveal'

const ABOUT_IMAGE =
  'https://images.unsplash.com/photo-1760169799369-2b8574466735?w=1200&q=80&auto=format&fit=crop'

// Petits repères factuels sur la maison — pas une "séquence" à numéroter,
// juste des faits en vrac, donc une simple liste à puces suffit plutôt
// que d'y accoler artificiellement des 01 / 02 / 03.
const HIGHLIGHTS = [
  { label: 'Produits locaux', detail: 'Marché du Cours Saleya et pêcheurs niçois' },
  { label: 'Cuisine ouverte', detail: 'Un chef visible, un geste assumé' },
  { label: 'Carte évolutive', detail: 'Renouvelée au rythme des saisons' },
]

export default function About() {
  return (
    <section id="a-propos" className="section section--alt about">
      <div className="container">
        <Reveal className="section-head about__head">
          <p className="eyebrow">À propos</p>
          <h2 className="section-title">
            Une table qui prend le temps de <em>bien faire</em>
          </h2>
        </Reveal>
      </div>

      <div className="container about__grid">
        <Reveal className="about__media">
          <img
            src={ABOUT_IMAGE}
            alt="Équipe de cuisine préparant les plats dans les coulisses du restaurant"
            className="about__image"
          />
        </Reveal>

        <div className="about__content">
          <Reveal delay={80}>
            <p className="about__paragraph">
              Le Comptoir d'Azur est né d'une conviction simple : la Méditerranée offre déjà tout
              ce qu'il faut pour une grande cuisine, à condition de la respecter. Ici, pas
              d'esbroufe — des produits choisis chaque matin, une brigade réduite mais exigeante,
              et une carte qui change avec les saisons plutôt que de figer un menu une fois pour
              toutes.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <p className="about__paragraph">
              Le poisson vient de la pêche côtière, les légumes du marché du Cours Saleya, l'huile
              d'olive d'un producteur de l'arrière-pays. Cette proximité avec le terroir se
              retrouve jusque dans l'assiette : des gestes précis, des cuissons justes, et surtout
              la conviction qu'un bon produit ne doit jamais être maquillé.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <ul className="about__highlights">
              {HIGHLIGHTS.map((item) => (
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
