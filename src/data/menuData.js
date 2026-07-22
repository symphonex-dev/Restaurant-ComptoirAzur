// ============================================================================
// DONNÉES DE LA CARTE
// ----------------------------------------------------------------------------
// On sépare le contenu (les plats) du composant qui l'affiche (Menu.jsx).
// Pourquoi : le jour où le restaurant change sa carte, on modifie ce fichier
// sans toucher à une seule ligne de JSX ou de logique d'affichage. C'est la
// même logique qu'une base de données : la donnée et son affichage sont deux
// responsabilités séparées.
// ============================================================================

export const menuCategories = [
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
]
