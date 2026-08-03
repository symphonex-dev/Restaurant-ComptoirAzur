// Avis clients (fictifs, écrits pour ce projet portfolio).
// Chaque avis reste court et crédible : un vrai client ne rédige pas
// un roman, il retient un ou deux détails précis (un plat, la terrasse,
// le service). C'est ce réalisme qui rend la section convaincante.
//
// ----------------------------------------------------------------------------
// PARTICULARITÉ VOULUE : la langue de CHAQUE avis est FIGÉE et ne dépend
// PAS du sélecteur FR/EN de la barre de navigation. Contrairement à tout le
// reste du site (qui bascule intégralement de langue), les avis clients
// simulent un vrai flux d'avis internationaux, mélangeant volontairement
// des langues différentes — exactement comme sur Google/TripAdvisor, où
// chaque client écrit dans sa propre langue et ce texte n'est jamais
// "retraduit" selon la langue de l'interface qui l'affiche.
//
// D'où le champ `lang` sur chaque avis : il ne sert PAS à choisir quelle
// version afficher (il n'y a qu'une seule version de chaque commentaire),
// mais uniquement à indiquer au composant Testimonials.jsx dans quel style
// de guillemets envelopper le texte (« » à la française pour un avis en
// français, “ ” à l'anglaise pour un avis en anglais) — un détail
// typographique qui doit lui aussi rester cohérent avec la langue RÉELLE
// du commentaire, peu importe la langue choisie pour le reste du site.
//
// Répartition demandée : avis 1, 3 et 4 toujours en anglais ; avis 2 et 5
// toujours en français.
// ----------------------------------------------------------------------------

export const testimonials = [
  {
    name: 'Camille D.',
    rating: 5,
    lang: 'en',
    comment:
      'The salt-crust sea bass will stay a memorable moment. The service is attentive without ever feeling heavy, and the terrace at sunset alone is worth the trip.',
  },
  {
    name: 'Julien M.',
    rating: 5,
    lang: 'fr',
    comment:
      "Une carte courte mais maîtrisée de bout en bout. On sent que chaque plat a été pensé. La suggestion de vin du sommelier était parfaite avec le risotto aux gambas.",
  },
  {
    name: 'Sophie L.',
    rating: 4,
    lang: 'en',
    comment:
      'Beautiful setting and generous cooking. The chocolate fondant alone is worth saving room for. A short wait on a Saturday night, but nothing bothersome.',
  },
  {
    name: 'Marc T.',
    rating: 5,
    lang: 'en',
    comment:
      "We've been coming here for every occasion for two years now. The sea bream tartare has become a habit, and the team always remembers us. A true neighbourhood favourite.",
  },
  {
    name: 'Nathalie B.',
    rating: 5,
    lang: 'fr',
    comment:
      "Réservé pour un anniversaire, le résultat a dépassé nos attentes. La salle est chaleureuse, les produits sont d'une fraîcheur évidente, et l'addition reste honnête.",
  },
]
