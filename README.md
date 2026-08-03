# 🚀 Le Comptoir d'Azur

Site vitrine ficitf pour un restaurant méditerranéen niçois, pensé pour donner envie de réserver dès les premières secondes de visite.

## 🔗 Démo en ligne
👉 [Voir le projet en direct](https://restaurant-comptoir-azur.vercel.app)

## ✨ Fonctionnalités clés
* **Site entièrement bilingue FR / EN**, sélecteur dans la barre de navigation, avec persistance du choix (localStorage)
* Formulaire de réservation avec validation en temps réel (email, téléphone, date, nombre de convives)
* Menu interactif organisé par catégories avec navigation au clavier
* Galerie photo avec visionneuse plein écran (zoom, navigation, fermeture au clavier)
* Carrousel d'avis clients avec défilement automatique et pause au survol
* Carte interactive intégrée pour localiser le restaurant en un coup d'œil
* Animations d'apparition au défilement pour une lecture fluide de la page
* Menu mobile responsive avec en-tête qui réagit au scroll
* Accessibilité soignée : lien d'évitement, navigation clavier complète, attributs ARIA
* Référencement optimisé (balises meta, Open Graph) pour une bonne visibilité locale, traduites dynamiquement

## 🛠️ Tech Stack
* **Frontend :** React 18, Vite, CSS natif, lucide-react, Context API (i18n bilingue FR/EN)
* **Backend :** Aucun (site 100% frontend, formulaire de réservation simulé côté client)
* **Déploiement :** Vercel

## 🌍 Bilinguisme FR / EN

Le site est intégralement traduisible via un bouton **FR / EN** dans la barre de navigation.

* **Architecture :** un `LanguageContext` React (`src/i18n/LanguageContext.jsx`) expose la langue active et le dictionnaire de traductions (`src/i18n/translations.js`) à tout composant via `useLanguage()`. Le choix est mémorisé dans `localStorage` et restauré à la prochaine visite.
* **Couverture :** navigation, hero, sections, carte des plats, galerie, formulaire de réservation (labels, placeholders, messages d'erreur et de succès), horaires, coordonnées, footer, et les balises SEO (`<title>`, meta description, Open Graph, attribut `lang`) qui se mettent à jour dynamiquement.
* **Localisation, pas juste traduction :** les horaires passent du format 24h (FR) au format 12h AM/PM (EN) ; les noms propres (Nice, Vieux-Nice, Le Comptoir d'Azur, Cours Saleya, les marques et appellations comme Menton, Provence, Valrhona) restent identiques dans les deux langues, comme il se doit.
* **Cas particulier — avis clients :** contrairement au reste du site, la langue de chaque avis client est **fixe** et ne suit pas le sélecteur FR/EN (comme sur un vrai site d'avis où chaque client écrit dans sa langue). Le style des guillemets (« » ou " ") s'adapte à la langue réelle de l'avis affiché.
* **Fix d'alignement :** un changement de langue modifie la largeur des libellés ("La carte" → "Menu", "Réserver une table" → "Book a table"…). Des largeurs minimales calculées par lien de navigation et par onglet de la carte (`Header.css`, `Menu.css`) garantissent qu'aucun décalage visuel ne se produit au changement de langue.

## 💻 Installation & Lancement en local
1. Cloner le dépôt :
   `git clone https://github.com/symphonex-dev/Restaurant-ComptoirAzur.git`
2. Installer les dépendances :
   `npm install`
3. Lancer le projet :
   `npm run dev`