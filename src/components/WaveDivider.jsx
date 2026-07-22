// ============================================================================
// COMPOSANT SIGNATURE : WaveDivider
// ----------------------------------------------------------------------------
// C'est l'élément visuel dont ce site doit se souvenir : une ligne-vague fine,
// écho discret de la mer Méditerranée, qui sépare certaines sections au lieu
// d'un simple trait droit. `fill="currentColor"` permet de piloter sa couleur
// depuis la classe CSS du parent (.wave-divider--alt / --dark), exactement
// comme on changerait la couleur d'une icône.
// ============================================================================
export default function WaveDivider({ variant = '' }) {
  return (
    <svg
      className={`wave-divider ${variant ? `wave-divider--${variant}` : ''}`}
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0 32C120 10 240 10 360 32C480 54 600 54 720 32C840 10 960 10 1080 32C1140 43 1170 43 1200 38V60H0V32Z"
        fill="currentColor"
      />
    </svg>
  )
}
