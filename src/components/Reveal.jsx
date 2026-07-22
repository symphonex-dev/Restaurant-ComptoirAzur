import { useScrollReveal } from '../hooks/useScrollReveal'

// ============================================================================
// COMPOSANT Reveal
// ----------------------------------------------------------------------------
// EN JS VANILLA : on aurait dû répéter, pour chaque bloc à animer, un appel
// à document.querySelectorAll puis boucler dessus pour attacher un observer.
//
// EN REACT : on écrit ce comportement UNE FOIS sous forme de composant, et
// on "enveloppe" ensuite n'importe quel contenu avec <Reveal>...</Reveal>.
// C'est le principe de composition : au lieu de dupliquer la logique, on la
// factorise dans un composant que les autres composants réutilisent.
//
// `delay` permet de décaler légèrement l'apparition de plusieurs éléments
// voisins (ex : les 3 cartes d'une grille), pour un effet d'apparition en
// cascade plutôt que tout d'un coup.
// ============================================================================
export default function Reveal({ children, as: Tag = 'div', delay = 0, className = '', ...rest }) {
  const [ref, isVisible] = useScrollReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
