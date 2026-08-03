// ============================================================================
// DONNÉES DE LA CARTE — bilingue FR / EN
// ----------------------------------------------------------------------------
// On sépare le contenu (les plats) du composant qui l'affiche (Menu.jsx).
// Pourquoi : le jour où le restaurant change sa carte, on modifie ce fichier
// sans toucher à une seule ligne de JSX ou de logique d'affichage. C'est la
// même logique qu'une base de données : la donnée et son affichage sont deux
// responsabilités séparées.
//
// Bilinguisme : `menuCategoriesByLang` expose un jeu de catégories complet
// par langue (fr / en), mais avec les MÊMES `id` de catégorie dans les deux
// langues ("entrees", "plats", "desserts", "boissons"). C'est essentiel :
// Menu.jsx garde en mémoire l'onglet actif via cet `id` (activeCategory),
// donc si l'utilisateur est sur l'onglet "Plats" et bascule le site en
// anglais, l'onglet équivalent ("Main Courses") doit rester sélectionné —
// ce qui ne fonctionne que si l'id sous-jacent n'a pas changé.
//
// Seuls les noms propres et marques (Menton, Provence, Amalfi, Valrhona,
// Black Angus) restent identiques dans les deux langues, comme demandé :
// ce sont des appellations, pas des mots à traduire.
// ============================================================================

export const menuCategoriesByLang = {
  fr: [
    {
      id: 'entrees',
      label: 'Entrées',
      dishes: [
        {
          name: 'Tartare de daurade',
          description: "Agrumes de Menton, huile d'olive fruitée, radis croquant",
          price: '16€',
        },
        {
          name: 'Petits farcis niçois',
          description: 'Courgette, tomate et oignon farcis, jus de veau au thym',
          price: '14€',
        },
        {
          name: 'Velouté de courgettes-fleurs',
          description: 'Chèvre frais, pistaches torréfiées, huile de basilic',
          price: '13€',
        },
        {
          name: 'Salade de poulpe grillé',
          description: 'Pommes de terre confites, aïoli maison, chorizo doux',
          price: '17€',
        },
      ],
    },
    {
      id: 'plats',
      label: 'Plats',
      dishes: [
        {
          name: 'Loup de mer en croûte de sel',
          description: 'Fenouil confit, beurre blanc au safran de Provence',
          price: '32€',
        },
        {
          name: 'Risotto crémeux aux gambas',
          description: "Citron d'Amalfi, basilic frais, parmesan 24 mois",
          price: '28€',
        },
        {
          name: 'Suprême de pigeon rôti',
          description: 'Polenta crémeuse, jus corsé au romarin',
          price: '34€',
        },
        {
          name: "Ravioles de légumes d'été",
          description: 'Sauce vierge, copeaux de parmesan — végétarien',
          price: '24€',
        },
        {
          name: 'Filet de bœuf Black Angus',
          description: "Écrasé de pommes de terre à l'huile d'olive, jus corsé",
          price: '36€',
        },
      ],
    },
    {
      id: 'desserts',
      label: 'Desserts',
      dishes: [
        {
          name: 'Tarte fine au citron de Menton',
          description: 'Meringue légère et zestes confits',
          price: '12€',
        },
        {
          name: 'Fondant au chocolat Valrhona',
          description: 'Glace à la fève tonka, éclats de noisette',
          price: '13€',
        },
        {
          name: 'Panna cotta à la lavande',
          description: 'Coulis de fruits rouges de saison',
          price: '11€',
        },
        {
          name: 'Plateau de fromages affinés',
          description: 'Sélection de la crèmerie, confiture de figues',
          price: '14€',
        },
      ],
    },
    {
      id: 'boissons',
      label: 'Boissons',
      dishes: [
        {
          name: 'Sélection de vins de Provence',
          description: 'Verre — blanc, rosé ou rouge, conseillé par notre sommelier',
          price: '8€',
        },
        {
          name: 'Château local, rosé',
          description: 'Bouteille — cuvée exclusive du Comptoir',
          price: '38€',
        },
        {
          name: 'Limonade artisanale',
          description: 'Thym et citron frais, préparée en cuisine',
          price: '6€',
        },
        {
          name: 'Café ou espresso',
          description: 'Torréfaction locale',
          price: '3€',
        },
      ],
    },
  ],

  en: [
    {
      id: 'entrees',
      label: 'Starters',
      dishes: [
        {
          name: 'Sea bream tartare',
          description: 'Menton citrus, fruity olive oil, crisp radish',
          price: '16€',
        },
        {
          name: 'Nice-style stuffed vegetables',
          description: 'Stuffed courgette, tomato and onion, thyme veal jus',
          price: '14€',
        },
        {
          name: 'Courgette-flower velouté',
          description: "Fresh goat's cheese, toasted pistachios, basil oil",
          price: '13€',
        },
        {
          name: 'Grilled octopus salad',
          description: 'Confit potatoes, home-made aïoli, mild chorizo',
          price: '17€',
        },
      ],
    },
    {
      id: 'plats',
      label: 'Main Courses',
      dishes: [
        {
          name: 'Salt-crust sea bass',
          description: 'Confit fennel, Provence saffron beurre blanc',
          price: '32€',
        },
        {
          name: 'Creamy prawn risotto',
          description: 'Amalfi lemon, fresh basil, 24-month parmesan',
          price: '28€',
        },
        {
          name: 'Roast pigeon suprême',
          description: 'Creamy polenta, rich rosemary jus',
          price: '34€',
        },
        {
          name: 'Summer vegetable ravioli',
          description: 'Vierge sauce, shaved parmesan — vegetarian',
          price: '24€',
        },
        {
          name: 'Black Angus beef fillet',
          description: 'Olive-oil mashed potatoes, rich jus',
          price: '36€',
        },
      ],
    },
    {
      id: 'desserts',
      label: 'Desserts',
      dishes: [
        {
          name: 'Thin Menton lemon tart',
          description: 'Light meringue and candied zest',
          price: '12€',
        },
        {
          name: 'Valrhona chocolate fondant',
          description: 'Tonka bean ice cream, hazelnut brittle',
          price: '13€',
        },
        {
          name: 'Lavender panna cotta',
          description: 'Seasonal red berry coulis',
          price: '11€',
        },
        {
          name: 'Selection of aged cheeses',
          description: 'From the local creamery, fig jam',
          price: '14€',
        },
      ],
    },
    {
      id: 'boissons',
      label: 'Drinks',
      dishes: [
        {
          name: 'Selection of Provence wines',
          description: 'Glass — white, rosé or red, recommended by our sommelier',
          price: '8€',
        },
        {
          name: 'Local rosé château',
          description: "Bottle — Le Comptoir's exclusive cuvée",
          price: '38€',
        },
        {
          name: 'Home-made lemonade',
          description: 'Fresh thyme and lemon, prepared in-house',
          price: '6€',
        },
        {
          name: 'Coffee or espresso',
          description: 'Local roast',
          price: '3€',
        },
      ],
    },
  ],
}
