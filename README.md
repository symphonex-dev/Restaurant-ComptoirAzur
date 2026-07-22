# Le Comptoir d'Azur 🌊

Site vitrine complet pour un restaurant méditerranéen fictif situé au cœur du Vieux-Nice.
Projet réalisé en **React + Vite**, pensé comme une pièce de portfolio : identité visuelle
originale, responsive irréprochable, accessibilité soignée et formulaire de réservation
entièrement validé (simulation front-end, sans back-end).

> Toutes les images proviennent d'[Unsplash](https://unsplash.com) (Unsplash License — usage
> commercial libre). Le restaurant, son adresse, son équipe et les avis clients sont
> entièrement fictifs, inventés pour les besoins de la démonstration.

---

## Aperçu

| Section | Contenu |
|---|---|
| **Hero** | Image plein écran, slogan, doubles CTA, animation d'entrée |
| **À propos** | Histoire, philosophie, sourcing des produits |
| **La carte** | 4 catégories en onglets accessibles (Entrées, Plats, Desserts, Boissons) |
| **Galerie** | Grille asymétrique de 8 photos + lightbox clavier/tactile |
| **Avis clients** | Carrousel automatique avec pause au survol/focus |
| **Réservation** | Formulaire complet, validations, confirmation simulée (site 100% front-end) |
| **Horaires & Accès** | Créneaux d'ouverture, jour de fermeture, Google Maps intégré |
| **Contact** | Téléphone, email, adresse, réseaux sociaux |
| **Footer** | Navigation, réseaux, mentions légales |

*(Captures d'écran à ajouter ici une fois le site déployé : `docs/screenshot-hero.png`, etc.)*

---

## Fonctionnalités

- **Design premium sur-mesure** : palette "Méditerranée au crépuscule" (encre marine, azur
  signature, terracotta, or antique), duo typographique Cormorant Garamond / Jost.
- **Animations au scroll** via un hook personnalisé (`useScrollReveal`, basé sur
  `IntersectionObserver`), désactivées automatiquement si la personne a activé
  "réduire les animations" au niveau système.
- **Lightbox de galerie** entièrement accessible : navigation clavier (flèches, Échap),
  piège à focus (Tab ne sort pas de la boîte de dialogue), focus restitué à la fermeture.
- **Carrousel de témoignages** qui se met en pause au survol ou au focus clavier.
- **Formulaire de réservation** avec validations complètes (email, téléphone français, date
  non passée...), état de chargement, puis confirmation simulée — ce site n'a pas de
  back-end, la soumission ne déclenche donc aucun envoi réseau réel.
- **Accessibilité (WCAG AA)** : HTML sémantique, `aria-*` sur les composants interactifs,
  lien d'évitement ("Aller au contenu principal"), contrastes vérifiés, navigation 100% clavier.
- **SEO de base** : title/description optimisés, Open Graph, favicon SVG, structure de titres
  logique (un seul `<h1>`, hiérarchie `<h2>` par section).

---

## Technologies

- [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- [lucide-react](https://lucide.dev/) pour les icônes
- CSS pur (variables CSS, pas de framework) — voir `src/index.css` pour le système de design
- ESLint (React + Hooks)

---

## Structure des dossiers

```
comptoir-azur/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/          # Un composant = un fichier .jsx + son .css
│   │   ├── Header.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── Menu.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Gallery.jsx / .css
│   │   ├── Testimonials.jsx / .css
│   │   ├── Reservation.jsx / .css
│   │   ├── Hours.jsx / .css
│   │   ├── LocationMap.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   ├── Footer.jsx / .css
│   │   ├── Reveal.jsx        # wrapper d'animation au scroll, réutilisé partout
│   │   ├── WaveDivider.jsx   # élément signature (ligne-vague SVG)
│   │   └── ScrollToTopButton.jsx
│   ├── data/                 # Contenu du site, séparé de l'affichage
│   │   ├── menuData.js
│   │   ├── testimonialsData.js
│   │   └── galleryData.js
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css             # tokens de design (couleurs, typo, espacements)
├── index.html
├── vite.config.js
├── package.json
└── .eslintrc.cjs
```

---

## Installation

Prérequis : [Node.js](https://nodejs.org/) 18 ou supérieur.

```bash
# Se placer dans le dossier du projet
cd comptoir-azur

# Installer les dépendances
npm install
```

---

## Lancement

```bash
# Serveur de développement (avec rechargement à chaud)
npm run dev
```

Le site est alors accessible sur `http://localhost:5173`.

```bash
# Build de production
npm run build

# Prévisualiser le build de production localement
npm run preview

# Vérifier le code avec ESLint
npm run lint
```

---

## Formulaire de réservation

Le formulaire (validations, états de chargement, message de confirmation) est entièrement
fonctionnel côté interface, mais ce projet est une vitrine 100% front-end : il n'y a pas de
back-end ni de service d'emailing branché derrière. Une fois les champs validés, la
soumission simule un court délai de traitement puis affiche systématiquement un message de
confirmation — aucune donnée n'est réellement transmise ni stockée.

Pour brancher un envoi d'email réel sur un projet dérivé de celui-ci, un service comme
[EmailJS](https://www.emailjs.com/) (envoi depuis le navigateur, sans back-end à héberger)
ou une route d'API dédiée conviendraient parfaitement à la fonction `handleSubmit` de
`Reservation.jsx`.

---

## Personnalisation

- **Couleurs et typographies** : tout se trouve dans les variables CSS en tête de
  `src/index.css` (`:root { --color-... , --font-... }`). Changer une valeur ici la répercute
  automatiquement sur tout le site.
- **Carte du restaurant** : éditez `src/data/menuData.js`.
- **Avis clients** : éditez `src/data/testimonialsData.js`.
- **Photos de la galerie** : éditez `src/data/galleryData.js` (chaque entrée attend une `url`,
  une `caption` courte et un `alt` descriptif complet pour l'accessibilité).
- **Coordonnées, horaires, adresse** : directement dans `Hours.jsx`, `Contact.jsx` et
  `LocationMap.jsx` (l'adresse de la carte Google Maps est encodée dans l'URL `MAP_EMBED_URL`).

---

## Améliorations futures

- Ajouter un système de gestion de contenu (Sanity, Strapi...) pour éditer la carte sans
  toucher au code.
- Ajouter un vrai système de réservation avec envoi d'email et disponibilités en temps réel
  (EmailJS, Supabase, Airtable...) à la place de la simulation front-end actuelle.
- Internationalisation (EN/IT) pour une clientèle touristique.
- Version PWA (installation sur mobile, mode hors-ligne pour consulter la carte).
- Tests automatisés (Vitest + Testing Library) sur les composants interactifs (Menu, Gallery,
  Reservation).

---

## Crédits

- Photographies : [Unsplash](https://unsplash.com) (Unsplash License).
- Icônes : [Lucide](https://lucide.dev/).
- Polices : [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) et
  [Jost](https://fonts.google.com/specimen/Jost), via Google Fonts.
- Restaurant, adresse, équipe et avis clients : entièrement fictifs, créés pour ce projet.

## Licence

Projet réalisé à des fins d'apprentissage et de portfolio. Libre de réutilisation et
d'adaptation pour vos propres projets personnels.
