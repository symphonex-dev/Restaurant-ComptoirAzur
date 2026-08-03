// ============================================================================
// DICTIONNAIRE DE TRADUCTIONS — FR / EN
// ----------------------------------------------------------------------------
// Toutes les chaînes de caractères affichées par le site (hors noms propres
// comme "Le Comptoir d'Azur", "Nice" ou "Vieux-Nice", qui restent identiques
// dans les deux langues) sont centralisées ici, section par section, à
// l'image de menuData.js ou testimonialsData.js : on sépare le contenu de
// l'affichage. Chaque composant importe `useLanguage()` et va chercher ses
// propres clés dans `t.<section>.<clé>`.
//
// Convention pour les titres de section contenant un mot en italique
// (ex : "Une table qui prend le temps de <em>bien faire</em>") : on stocke
// `titleBefore` / `titleEm` / `titleAfter` séparément plutôt qu'une chaîne
// unique contenant du JSX. Pourquoi : l'ordre des mots change d'une langue
// à l'autre (l'anglais ne place pas toujours le mot à mettre en valeur au
// même endroit que le français), donc une simple chaîne à découper ne
// suffirait pas. `titleAfter` est vide la plupart du temps, sauf quand la
// ponctuation finale (point d'interrogation…) doit rester après le mot en
// italique.
// ============================================================================

export const translations = {
  fr: {
    meta: {
      title: "Le Comptoir d'Azur — Restaurant méditerranéen à Nice",
      description:
        "Le Comptoir d'Azur, restaurant gastronomique méditerranéen au cœur du Vieux-Nice. Produits de la mer, saveurs provençales et terrasse face au soleil. Réservez votre table.",
      ogTitle: "Le Comptoir d'Azur — Restaurant méditerranéen à Nice",
      ogDescription:
        "Cuisine méditerranéenne raffinée, produits de la mer et terrasse ensoleillée au cœur du Vieux-Nice.",
    },

    skipLink: 'Aller au contenu principal',

    common: {
      reserveCta: 'Réserver une table',
    },

    header: {
      navAria: 'Navigation principale',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
      links: {
        accueil: 'Accueil',
        apropos: 'À propos',
        carte: 'La carte',
        galerie: 'Galerie',
        avis: 'Avis',
        horaires: 'Horaires & Accès',
        contact: 'Contact',
      },
      langToggle: {
        groupLabel: 'Choix de la langue',
        // aria-label de CHAQUE bouton : décrit l'action (pas seulement l'état),
        // ce qui est plus utile pour un lecteur d'écran qu'un simple "FR"/"EN".
        switchToFr: 'Afficher le site en français',
        switchToEn: 'Afficher le site en anglais',
      },
    },

    hero: {
      ariaLabel: 'Présentation du restaurant',
      imageAlt: 'Terrasse de restaurant surplombant la mer Méditerranée au coucher du soleil',
      eyebrow: 'Nice · Cuisine méditerranéenne',
      subtitle: 'La mer, le soleil, et une table qui leur ressemble.',
      description:
        "Au cœur du Vieux-Nice, une cuisine méditerranéenne exigeante qui met à l'honneur les produits de la pêche du jour et les saveurs du Sud, dans un cadre pensé pour ralentir le temps d'un repas.",
      ctaMenu: 'Découvrir la carte',
    },

    about: {
      eyebrow: 'À propos',
      titleBefore: 'Une table qui prend le temps de',
      titleEm: 'bien faire',
      titleAfter: '',
      imageAlt: 'Équipe de cuisine préparant les plats dans les coulisses du restaurant',
      paragraph1:
        "Le Comptoir d'Azur est né d'une conviction simple : la Méditerranée offre déjà tout ce qu'il faut pour une grande cuisine, à condition de la respecter. Ici, pas d'esbroufe — des produits choisis chaque matin, une brigade réduite mais exigeante, et une carte qui change avec les saisons plutôt que de figer un menu une fois pour toutes.",
      paragraph2:
        "Le poisson vient de la pêche côtière, les légumes du marché du Cours Saleya, l'huile d'olive d'un producteur de l'arrière-pays. Cette proximité avec le terroir se retrouve jusque dans l'assiette : des gestes précis, des cuissons justes, et surtout la conviction qu'un bon produit ne doit jamais être maquillé.",
      highlights: [
        { label: 'Produits locaux', detail: 'Marché du Cours Saleya et pêcheurs niçois' },
        { label: 'Cuisine ouverte', detail: 'Un chef visible, un geste assumé' },
        { label: 'Carte évolutive', detail: 'Renouvelée au rythme des saisons' },
      ],
    },

    menu: {
      eyebrow: 'La carte',
      titleBefore: 'Une cuisine de',
      titleEm: 'saison',
      titleAfter: '',
      lead: "La carte évolue au fil des arrivages du marché et de la pêche du jour. Ces suggestions reflètent l'esprit de notre cuisine, entre recettes traditionnelles et touches créatives.",
      tablistAria: 'Catégories de la carte',
      categories: {
        entrees: 'Entrées',
        plats: 'Plats',
        desserts: 'Desserts',
        boissons: 'Boissons',
      },
    },

    gallery: {
      eyebrow: 'Galerie',
      titleBefore: 'Un aperçu de',
      titleEm: "l'ambiance",
      titleAfter: '',
      lead: "La salle, la cuisine, les produits et les assiettes — un avant-goût de ce qui vous attend. Cliquez sur une photo pour l'agrandir.",
      close: 'Fermer la visionneuse',
      prev: 'Photo précédente',
      next: 'Photo suivante',
      dialogLabel: (caption) => `Photo : ${caption}`,
    },

    testimonials: {
      eyebrow: 'Avis clients',
      titleBefore: 'Les avis de nos',
      titleEm: 'convives',
      titleAfter: '',
      prev: 'Avis précédent',
      next: 'Avis suivant',
      starsAria: (rating) => `${rating} étoiles sur 5`,
      dotsAria: 'Choisir un avis',
      dotAria: (name) => `Avis de ${name}`,
    },

    reservation: {
      eyebrow: 'Réservation',
      titleBefore: 'Réservez votre',
      titleEm: 'table',
      titleAfter: '',
      lead: 'Pour les groupes de plus de 8 personnes ou les demandes de dernière minute, préférez un appel direct au restaurant — nous ferons de notre mieux pour vous accueillir.',
      labels: {
        firstName: 'Prénom',
        lastName: 'Nom',
        email: 'Email',
        phone: 'Téléphone',
        date: 'Date',
        time: 'Heure',
        guests: 'Convives',
        message: 'Message (allergies, occasion particulière…)',
      },
      placeholders: {
        email: 'exemple@gmail.com',
        phone: '06 01 02 03 04',
      },
      errors: {
        firstName: "Merci d'indiquer votre prénom.",
        lastName: 'Merci d\'indiquer votre nom.',
        email: 'Merci de saisir une adresse email valide.',
        phone: 'Merci de saisir un numéro de téléphone valide (ex : 06 01 02 03 04).',
        dateRequired: 'Merci de choisir une date.',
        datePast: 'La date ne peut pas être dans le passé.',
        time: 'Merci de choisir une heure.',
        guests: "Merci d'indiquer un nombre de convives entre 1 et 20.",
      },
      submitting: 'Envoi en cours…',
      submit: 'Confirmer la demande',
      success: 'Simulé avec succès ! Ce site est uniquement une vitrine de démonstration.',
    },

    hours: {
      eyebrow: 'Horaires & Accès',
      titleBefore: 'Quand nous',
      titleEm: 'retrouver',
      titleAfter: '',
      lead: "Le service continue étant rare à Nice, nous préférons deux services bien tenus qu'un service continu bâclé — c'est aussi ça, le respect du produit.",
      schedule: [
        { days: 'Mardi — Samedi', hours: '12h00 – 14h30' },
        { days: '', hours: '19h00 – 22h30' },
        { days: 'Dimanche', hours: '11h00 – 15h00 (brunch)' },
        { days: 'Lundi', hours: 'Fermé', closed: true },
      ],
      phoneLabel: 'Téléphone',
      addressLabel: 'Adresse',
    },

    location: {
      eyebrow: 'Localisation',
      titleBefore: 'Au cœur du',
      titleEm: 'Vieux-Nice',
      titleAfter: '',
      lead: 'À deux pas du Cours Saleya et de la promenade, dans une rue calme du Vieux-Nice.',
      iframeTitle: "Localisation du Comptoir d'Azur sur Google Maps",
    },

    contact: {
      eyebrow: 'Contact',
      titleBefore: 'Une question, une',
      titleEm: 'envie',
      titleAfter: ' ?',
      lead: 'Notre équipe se tient à votre disposition pour toute demande particulière — privatisation, événement professionnel ou simple question sur la carte.',
      items: {
        phone: 'Téléphone',
        email: 'Email',
        address: 'Adresse',
      },
    },

    footer: {
      tagline: 'Cuisine méditerranéenne · Nice',
      navAria: 'Navigation du pied de page',
      legal: (year) =>
        `© ${year} Le Comptoir d'Azur — Tous droits réservés. SIRET fictif : 000 000 000 00000. Site à visée de démonstration.`,
    },

    scrollTop: {
      label: 'Remonter en haut de la page',
    },
  },

  en: {
    meta: {
      title: "Le Comptoir d'Azur — Mediterranean Restaurant in Nice",
      description:
        "Le Comptoir d'Azur, a Mediterranean fine-dining restaurant in the heart of Vieux-Nice. Fresh seafood, Provençal flavours and a sun-drenched terrace. Book your table.",
      ogTitle: "Le Comptoir d'Azur — Mediterranean Restaurant in Nice",
      ogDescription:
        'Refined Mediterranean cuisine, fresh seafood and a sun-drenched terrace in the heart of Vieux-Nice.',
    },

    skipLink: 'Skip to main content',

    common: {
      reserveCta: 'Book a table',
    },

    header: {
      navAria: 'Main navigation',
      openMenu: 'Open the menu',
      closeMenu: 'Close the menu',
      links: {
        accueil: 'Home',
        apropos: 'About',
        carte: 'Menu',
        galerie: 'Gallery',
        avis: 'Reviews',
        horaires: 'Hours & Location',
        contact: 'Contact',
      },
      langToggle: {
        groupLabel: 'Language selection',
        switchToFr: 'Display the site in French',
        switchToEn: 'Display the site in English',
      },
    },

    hero: {
      ariaLabel: 'Restaurant introduction',
      imageAlt: 'Restaurant terrace overlooking the Mediterranean Sea at sunset',
      eyebrow: 'Nice · Mediterranean cuisine',
      subtitle: 'The sea, the sun, and a table that lives up to them.',
      description:
        "In the heart of Vieux-Nice, a refined Mediterranean cuisine that celebrates the day's catch and the flavours of the South, in a setting designed to slow down time over a meal.",
      ctaMenu: 'View the menu',
    },

    about: {
      eyebrow: 'About',
      titleBefore: 'A table that takes the time to',
      titleEm: 'do it right',
      titleAfter: '',
      imageAlt: 'Kitchen team preparing dishes behind the scenes of the restaurant',
      paragraph1:
        "Le Comptoir d'Azur was born of a simple conviction: the Mediterranean already offers everything needed for great cooking, provided you respect it. Here, no showing off — produce chosen fresh every morning, a small but demanding kitchen team, and a menu that changes with the seasons rather than a fixed set of dishes forever.",
      paragraph2:
        "The fish comes from coastal fishing, the vegetables from the Cours Saleya market, the olive oil from a producer in the hinterland. This closeness to the land shows right through to the plate: precise gestures, accurate cooking, and above all the conviction that a good ingredient should never be dressed up to hide it.",
      highlights: [
        { label: 'Local produce', detail: 'Cours Saleya market and fishermen from Nice' },
        { label: 'Open kitchen', detail: 'A visible chef, a confident hand' },
        { label: 'Evolving menu', detail: 'Refreshed with the rhythm of the seasons' },
      ],
    },

    menu: {
      eyebrow: 'Menu',
      titleBefore: 'A cuisine shaped by the',
      titleEm: 'seasons',
      titleAfter: '',
      lead: "The menu evolves with the market's arrivals and the day's catch. These suggestions reflect the spirit of our cooking, between traditional recipes and creative touches.",
      tablistAria: 'Menu categories',
      categories: {
        entrees: 'Starters',
        plats: 'Main Courses',
        desserts: 'Desserts',
        boissons: 'Drinks',
      },
    },

    gallery: {
      eyebrow: 'Gallery',
      titleBefore: 'A glimpse of the',
      titleEm: 'atmosphere',
      titleAfter: '',
      lead: 'The dining room, the kitchen, the produce and the plates — a preview of what awaits you. Click a photo to enlarge it.',
      close: 'Close the viewer',
      prev: 'Previous photo',
      next: 'Next photo',
      dialogLabel: (caption) => `Photo: ${caption}`,
    },

    testimonials: {
      eyebrow: 'Customer reviews',
      titleBefore: 'What our',
      titleEm: 'guests',
      titleAfter: ' say',
      prev: 'Previous review',
      next: 'Next review',
      starsAria: (rating) => `${rating} out of 5 stars`,
      dotsAria: 'Choose a review',
      dotAria: (name) => `Review from ${name}`,
    },

    reservation: {
      eyebrow: 'Reservation',
      titleBefore: 'Book your',
      titleEm: 'table',
      titleAfter: '',
      lead: "For parties of more than 8 people or last-minute requests, please call the restaurant directly — we'll do our best to accommodate you.",
      labels: {
        firstName: 'First name',
        lastName: 'Last name',
        email: 'Email',
        phone: 'Phone',
        date: 'Date',
        time: 'Time',
        guests: 'Guests',
        message: 'Message (allergies, special occasion…)',
      },
      placeholders: {
        email: 'example@gmail.com',
        phone: '06 01 02 03 04',
      },
      errors: {
        firstName: 'Please enter your first name.',
        lastName: 'Please enter your last name.',
        email: 'Please enter a valid email address.',
        phone: 'Please enter a valid phone number (e.g. 06 01 02 03 04).',
        dateRequired: 'Please choose a date.',
        datePast: 'The date cannot be in the past.',
        time: 'Please choose a time.',
        guests: 'Please enter a number of guests between 1 and 20.',
      },
      submitting: 'Sending…',
      submit: 'Confirm request',
      success: 'Simulated successfully! This site is a demonstration showcase only.',
    },

    hours: {
      eyebrow: 'Hours & Location',
      titleBefore: 'When to',
      titleEm: 'find us',
      titleAfter: '',
      lead: "As continuous service is rare in Nice, we prefer two well-run sittings over one rushed continuous service — that's part of respecting the produce too.",
      // Formats horaires adaptés à chaque langue : 24h pour le FR (usage
      // courant en France), 12h AM/PM pour l'EN (plus naturel pour un
      // lectorat anglophone) — une vraie localisation, pas qu'une traduction
      // mot à mot.
      schedule: [
        { days: 'Tuesday — Saturday', hours: '12:00 – 2:30 PM' },
        { days: '', hours: '7:00 – 10:30 PM' },
        { days: 'Sunday', hours: '11:00 AM – 3:00 PM (brunch)' },
        { days: 'Monday', hours: 'Closed', closed: true },
      ],
      phoneLabel: 'Phone',
      addressLabel: 'Address',
    },

    location: {
      eyebrow: 'Location',
      titleBefore: 'In the heart of',
      titleEm: 'Vieux-Nice',
      titleAfter: '',
      lead: 'Just steps from the Cours Saleya market and the seafront promenade, on a quiet street in Vieux-Nice.',
      iframeTitle: "Location of Le Comptoir d'Azur on Google Maps",
    },

    contact: {
      eyebrow: 'Contact',
      titleBefore: 'A question, a',
      titleEm: 'craving',
      titleAfter: '?',
      lead: 'Our team is on hand for any specific request — private hire, corporate event, or simply a question about the menu.',
      items: {
        phone: 'Phone',
        email: 'Email',
        address: 'Address',
      },
    },

    footer: {
      tagline: 'Mediterranean cuisine · Nice',
      navAria: 'Footer navigation',
      legal: (year) =>
        `© ${year} Le Comptoir d'Azur — All rights reserved. Fictitious SIRET: 000 000 000 00000. Demonstration website.`,
    },

    scrollTop: {
      label: 'Back to top of the page',
    },
  },
}

// Ordre des langues affichées par le sélecteur — un tableau plutôt que deux
// booléens séparés, pour pouvoir un jour ajouter une 3e langue sans toucher
// à la logique du composant, juste à cette liste.
export const AVAILABLE_LANGUAGES = ['fr', 'en']

export const DEFAULT_LANGUAGE = 'fr'
