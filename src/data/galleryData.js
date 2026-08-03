// Images de la galerie — toutes proviennent d'Unsplash (libres de droits,
// Unsplash License : usage commercial autorisé, attribution non requise).
// On stocke la légende et un alt text descriptif séparément : la légende
// est courte et lisible pour l'œil, l'alt text est complet pour les
// lecteurs d'écran (accessibilité).
//
// Bilinguisme : mêmes URLs d'image dans les deux langues (la photo ne
// change pas), seuls `caption` et `alt` sont traduits. On garde donc
// `galleryImagesByLang.fr` et `.en` comme deux tableaux parallèles de même
// longueur et dans le même ordre, plutôt qu'un objet {url, captionFr,
// captionEn, altFr, altEn} : ce découpage par langue calque exactement la
// structure déjà utilisée pour menuData.js et reste simple à parcourir avec
// un .map() classique côté composant.

export const galleryImagesByLang = {
  fr: [
    {
      url: 'https://images.unsplash.com/photo-1749871615234-98bff62995ba?w=1200&q=80&auto=format&fit=crop',
      caption: 'La salle',
      alt: "Salle du restaurant à l'éclairage chaleureux, tables en bois et ambiance feutrée",
    },
    {
      url: 'https://images.unsplash.com/photo-1750943082452-c714763f73b2?w=1200&q=80&auto=format&fit=crop',
      caption: 'En cuisine',
      alt: "Un chef dresse une assiette avec précision dans la cuisine du restaurant",
    },
    {
      url: 'https://images.unsplash.com/photo-1770902971693-8d638e97a496?w=1200&q=80&auto=format&fit=crop',
      caption: 'La table',
      alt: 'Table dressée avec verres à vin et couverts, prête pour le service',
    },
    {
      url: 'https://images.unsplash.com/photo-1754587489041-9fc8301f4c98?w=1200&q=80&auto=format&fit=crop',
      caption: 'Produits de la mer',
      alt: 'Étal de poissons et fruits de mer frais du jour',
    },
    {
      url: 'https://images.unsplash.com/photo-1581893105246-33e5bf6bed58?w=1200&q=80&auto=format&fit=crop',
      caption: 'Nos desserts',
      alt: 'Dessert au chocolat dressé avec finesse sur une assiette blanche',
    },
    {
      url: 'https://images.unsplash.com/photo-1756706815775-0a66d4301a20?w=1200&q=80&auto=format&fit=crop',
      caption: "L'entrée",
      alt: 'Façade et entrée du restaurant éclairée en soirée',
    },
    {
      url: 'https://images.unsplash.com/photo-1755404215191-abc0083c4d07?w=1200&q=80&auto=format&fit=crop',
      caption: 'Produits du terroir',
      alt: "Olives et huile d'olive présentées sur une table en bois, ambiance méditerranéenne",
    },
    {
      url: 'https://images.unsplash.com/photo-1646473315764-c6cd47fe74c3?w=1200&q=80&auto=format&fit=crop',
      caption: "L'ambiance du soir",
      alt: 'Table dressée avec assiettes et bougies allumées, atmosphère chaleureuse en soirée',
    },
  ],

  en: [
    {
      url: 'https://images.unsplash.com/photo-1749871615234-98bff62995ba?w=1200&q=80&auto=format&fit=crop',
      caption: 'The dining room',
      alt: 'Restaurant dining room with warm lighting, wooden tables and a cosy atmosphere',
    },
    {
      url: 'https://images.unsplash.com/photo-1750943082452-c714763f73b2?w=1200&q=80&auto=format&fit=crop',
      caption: 'In the kitchen',
      alt: 'A chef plates a dish with precision in the restaurant kitchen',
    },
    {
      url: 'https://images.unsplash.com/photo-1770902971693-8d638e97a496?w=1200&q=80&auto=format&fit=crop',
      caption: 'The table',
      alt: 'Table set with wine glasses and cutlery, ready for service',
    },
    {
      url: 'https://images.unsplash.com/photo-1754587489041-9fc8301f4c98?w=1200&q=80&auto=format&fit=crop',
      caption: 'Seafood',
      alt: 'Display of fresh fish and seafood of the day',
    },
    {
      url: 'https://images.unsplash.com/photo-1581893105246-33e5bf6bed58?w=1200&q=80&auto=format&fit=crop',
      caption: 'Our desserts',
      alt: 'Chocolate dessert delicately plated on a white dish',
    },
    {
      url: 'https://images.unsplash.com/photo-1756706815775-0a66d4301a20?w=1200&q=80&auto=format&fit=crop',
      caption: 'The entrance',
      alt: 'Restaurant façade and entrance lit up in the evening',
    },
    {
      url: 'https://images.unsplash.com/photo-1755404215191-abc0083c4d07?w=1200&q=80&auto=format&fit=crop',
      caption: 'Local produce',
      alt: 'Olives and olive oil displayed on a wooden table, Mediterranean atmosphere',
    },
    {
      url: 'https://images.unsplash.com/photo-1646473315764-c6cd47fe74c3?w=1200&q=80&auto=format&fit=crop',
      caption: 'Evening atmosphere',
      alt: 'Table set with plates and lit candles, warm evening atmosphere',
    },
  ],
}
