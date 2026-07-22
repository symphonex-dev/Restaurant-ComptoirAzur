import { useEffect, useRef, useState } from 'react'

// ============================================================================
// HOOK PERSONNALISÉ : useScrollReveal
// ----------------------------------------------------------------------------
// EN JS VANILLA, on ferait ça avec un addEventListener('scroll', ...) global
// et beaucoup de calculs de position manuels (getBoundingClientRect à chaque
// scroll) : coûteux en performance et fastidieux à écrire pour chaque élément.
//
// EN REACT, on encapsule cette logique dans un hook réutilisable. Un hook,
// c'est une fonction qui peut "accrocher" (hook = crochet) de l'état et des
// effets de bord à un composant. Ici, useScrollReveal renvoie une ref à poser
// sur un élément DOM, et un booléen qui devient true dès que cet élément
// entre dans le viewport.
//
// L'API du navigateur utilisée est IntersectionObserver : bien plus
// performante qu'un listener de scroll, car le navigateur ne nous notifie
// que lorsque l'intersection change réellement (pas à chaque pixel scrollé).
// ============================================================================
export function useScrollReveal(options = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -80px 0px' } = options
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = elementRef.current
    if (!node) return

    // Si la personne a désactivé les animations au niveau système, on
    // affiche directement le contenu sans attendre l'observation.
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // On n'observe plus une fois révélé : l'animation ne doit jouer
          // qu'une seule fois, pas à chaque va-et-vient de scroll.
          observer.unobserve(node)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [elementRef, isVisible]
}
