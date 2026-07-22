import { useState } from 'react'
import './Menu.css'
import Reveal from './Reveal'
import { menuCategories } from '../data/menuData'

// ============================================================================
// COMPOSANT Menu
// ----------------------------------------------------------------------------
// EN JS VANILLA, un système d'onglets s'écrit avec du querySelectorAll, une
// boucle pour retirer une classe "active" sur tous les onglets puis la
// remettre sur celui cliqué, et une deuxième boucle pour cacher/afficher les
// panneaux correspondants (souvent via .style.display).
//
// EN REACT, on inverse la logique : on ne manipule plus le DOM, on stocke
// simplement "quel onglet est actif" dans une variable d'état (useState).
// Le JSX ci-dessous décrit à quoi ressemble l'interface POUR CHAQUE valeur
// possible de cet état, et React se charge de recalculer le DOM à afficher.
// C'est le changement de paradigme central entre JS impératif et React
// déclaratif : on ne dit plus "fais ceci puis cela", on dit "voici à quoi
// ça doit ressembler si l'état vaut X".
// ============================================================================
export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id)

  const activeDishes =
    menuCategories.find((category) => category.id === activeCategory)?.dishes ?? []

  // Le pattern ARIA "tabs" attend que les flèches gauche/droite déplacent
  // le focus et la sélection entre onglets, sans passer par la tabulation.
  // On calcule l'index suivant/précédent en bouclant sur le tableau
  // (le modulo permet de revenir au début après le dernier onglet).
  const handleTabKeyDown = (event, index) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
    event.preventDefault()
    const direction = event.key === 'ArrowRight' ? 1 : -1
    const nextIndex = (index + direction + menuCategories.length) % menuCategories.length
    const nextCategory = menuCategories[nextIndex]
    setActiveCategory(nextCategory.id)
    document.getElementById(`tab-${nextCategory.id}`)?.focus()
  }

  return (
    <section id="carte" className="section menu">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">La carte</p>
          <h2 className="section-title">
            Une cuisine de <em>saison</em>
          </h2>
          <p className="section-lead">
            La carte évolue au fil des arrivages du marché et de la pêche du jour. Ces suggestions
            reflètent l'esprit de notre cuisine, entre recettes traditionnelles et touches
            créatives.
          </p>
        </Reveal>

        {/* Barre d'onglets — role="tablist" et aria-selected permettent à un
            lecteur d'écran de comprendre qu'il s'agit d'un choix exclusif,
            exactement comme le ferait visuellement un utilisateur voyant. */}
        <div className="menu__tabs" role="tablist" aria-label="Catégories de la carte">
          {menuCategories.map((category, index) => (
            <button
              key={category.id}
              type="button"
              role="tab"
              id={`tab-${category.id}`}
              aria-selected={activeCategory === category.id}
              aria-controls={`panel-${category.id}`}
              tabIndex={activeCategory === category.id ? 0 : -1}
              className={`menu__tab ${activeCategory === category.id ? 'menu__tab--active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          id={`panel-${activeCategory}`}
          aria-labelledby={`tab-${activeCategory}`}
          className="menu__panel"
        >
          <ul className="menu__list">
            {activeDishes.map((dish, index) => (
              <Reveal as="li" key={dish.name} delay={index * 60} className="menu__dish">
                <div className="menu__dish-head">
                  <h3 className="menu__dish-name">{dish.name}</h3>
                  <span className="menu__dish-leader" aria-hidden="true" />
                  <span className="menu__dish-price">{dish.price}</span>
                </div>
                <p className="menu__dish-desc">{dish.description}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
