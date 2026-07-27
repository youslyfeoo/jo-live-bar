export interface MenuItem {
  name: string;
  description?: string;
  price: string;
}

export interface MenuSection {
  heading: string;
  note?: string;
  items: MenuItem[];
}

export interface MenuPageData {
  title: string;
  sections: MenuSection[];
}

export const menuPages: MenuPageData[] = [
  {
    title: "Finger Food",
    sections: [
      {
        heading: "Menu Signature",
        items: [
          { name: "Terrine royale de foie Gras", price: "18€" },
          {
            name: "Onglet Signature Le J.O",
            description: "onglet de bœuf grillé, jus réduit, accompagné de frites",
            price: "18€",
          },
          {
            name: "Lobster Roll Festif",
            description:
              "pain brioché, chair de homard, mayonnaise japonaise, salade iceberg, oignon rouge",
            price: "16€",
          },
        ],
      },
      {
        heading: "À Partager",
        items: [
          {
            name: "Saucisson (à l'unité)",
            description: "au choix : nature, beaufort, noisettes, chanterelles",
            price: "13€",
          },
          {
            name: "Petites Sardines d'exception (à l'unité)",
            description: "petites sardines, pain tranché, beurre & cornichons",
            price: "14€",
          },
          { name: "Camembert Fondant au miel brunoise chorizo", price: "15€" },
          { name: "Nuage de Stracciatella truffé", price: "15€" },
          {
            name: "Patatas Caliente",
            description: "pomme de terre grenaille frit servit avec une sauce caliente",
            price: "12€",
          },
          { name: "Pata Negra « Réserve »", price: "18€" },
          { name: "Perles Marines (huîtres selon arrivage / 6 pièces)", price: "18€" },
          {
            name: "Velours d'Orient & Pain Pita",
            description: "houmous huile d'olive épices zaatar",
            price: "12€",
          },
        ],
      },
    ],
  },
  {
    title: "Finger Food",
    sections: [
      {
        heading: "À Déguster",
        items: [
          {
            name: "Poulpe en Scène",
            description: "tentacules de poulpe rôti en persillade",
            price: "16€",
          },
          {
            name: "Croque Prestige",
            description: "croque-monsieur au jambon & truffe",
            price: "15€",
          },
          {
            name: "Suprême de Cœur de canard",
            description: "cœur de canard confit, accompagné de frites",
            price: "12€",
          },
          {
            name: "Tartare du Chef en cornet croustillant",
            description: "bœuf coupé au couteau, câpre, cornichon, oignons, œuf, sauce cocktail",
            price: "18€",
          },
          {
            name: "Arancini de Anna",
            description: "boules de riz farci et frit, recette familiale",
            price: "12€",
          },
          { name: "Caviar Impérial BAERI 30gr", description: "caviar Baeri", price: "90€" },
        ],
      },
      {
        heading: "Les Plaisirs Mont-Coco",
        items: [
          { name: "Assortiment de 6 mignardises", price: "18€" },
          { name: "Assortiment de 12 mignardises", price: "30€" },
        ],
      },
    ],
  },
  {
    title: "Les Vins",
    sections: [
      {
        heading: "Vins Rouges",
        note: "verre 12cl / bouteille 75cl",
        items: [
          { name: "IGP Pays d'OC Malbec «Réserve» | Domaine Paul Mas", price: "8€ / 40€" },
          { name: "AOP Côtes du Rhône «Les Abeilles» | Domaine Colombo", price: "8€ / 40€" },
          {
            name: "AOP Saint-Nicolas de Bourgueil «La Chevalerie» | Domaine Morin",
            price: "8€ / 40€",
          },
          { name: "AOP Moulin à Vent «Cœur de Granit» | Cave de Chénas", price: "8€ / 40€" },
          {
            name: "AOP Pic Saint-Loup «3ème Mi-Temps» | Domaine Saint-Daumary",
            price: "9€ / 45€",
          },
          {
            name: "AOP Crozes Hermitage «Les Fées Brunes» | Domaine Colombo",
            price: "11€ / 49€",
          },
          { name: "AOP Saint-Joseph «Amphore d'Argent» | Vins de Vienne", price: "12€ / 54€" },
          { name: "AOP Saint-Emilion Grand Cru | Château Grand Bert", price: "13€ / 59€" },
          {
            name: "AOP Savigny-lès-Beaune Bio «Terregelesses» | Domaine André",
            price: "14€ / 69€",
          },
          { name: "AOP Châteauneuf-du-Pape «L'Oratoire» | Domaine Ogier", price: "109€" },
          { name: "AOP Côte Rôtie | Domaine Pierre Gaillard", price: "119€" },
          { name: "AOP Gevrey Chambertin | Domaine Jadot", price: "139€" },
          { name: "AOP St Emilion «Cheval Blanc» 2014 | Château Cheval Blanc", price: "799€" },
        ],
      },
    ],
  },
  {
    title: "Les Vins",
    sections: [
      {
        heading: "Vins Blancs",
        note: "verre 12cl / bouteille 75cl",
        items: [
          { name: "AOP Roussette de Savoie | Domaine Jacquin", price: "8€ / 40€" },
          {
            name: "AOP Bourgogne Aligoté «Buissonnier» | Vignerons de Buxy",
            price: "8€ / 40€",
          },
          {
            name: "IGP Côtes de Gascogne «Premières Grives» | Domaine Tariquet",
            price: "9€ / 45€",
          },
          { name: "AOP Saint-Véran «Les Préludes» | Terres Secrètes", price: "9€ / 45€" },
          { name: "IGP Ardèche «Grand Ardèche» | Domaine Louis Latour", price: "10€ / 49€" },
          { name: "AOP Chignin Bergeron | Domaine Gonnet", price: "9€ / 45€" },
          { name: "AOP Saint-Péray «Les Tanneurs» | Maison Chapoutier", price: "11€ / 49€" },
          { name: "AOP Pouilly Fuissé | Domaine Trouillet", price: "13€ / 59€" },
          { name: "AOP Saint-Joseph «Ro-Rée» | Domaine Louis Chèze", price: "14€ / 65€" },
          { name: "AOP Chablis «Les Sureaux» | Domaine Chanson", price: "14€ / 65€" },
          { name: "AOP Condrieu | Domaine Pierre Gaillard", price: "79€" },
          { name: "AOP Meursault | Domaine Louis Jadot", price: "139€" },
          { name: "AOP Puligny Montrachet | Domaine Louis Jadot", price: "179€" },
        ],
      },
      {
        heading: "Vins Rosés",
        note: "verre 12cl / bouteille 75cl",
        items: [
          { name: "AOP Côtes de Provence « M » | Château Minuty", price: "8€ / 40€" },
          {
            name: "AOP Côtes de Provence « Whispering Angel » | Château d'Esclan",
            price: "50€",
          },
        ],
      },
    ],
  },
  {
    title: "Champagne & Apéritif",
    sections: [
      {
        heading: "Champagne — Notre Sélection",
        note: "verre / bouteille",
        items: [
          { name: "Devaux Brut", price: "12€ (verre)" },
          { name: "Mumm Cordon Rouge Brut", price: "140€ / 260€" },
          { name: "Veuve Clicquot Brut", price: "150€ / 290€" },
          { name: "Perrier-Jouët Brut", price: "160€ / 310€" },
          { name: "Perrier-Jouët Blanc de Blancs", price: "239€ / 499€" },
          { name: "Perrier-Jouët Belle Époque", price: "499€ / 1049€" },
          { name: "Ruinart Blanc de Blancs", price: "219€ / 449€" },
          { name: "Dom Ruinart Blanc", price: "449€ / 949€" },
          { name: "Dom Pérignon", price: "429€ / 899€" },
        ],
      },
      {
        heading: "Apéritif — Classiques",
        items: [
          { name: "Ricard", price: "5€" },
          { name: "Martini | Bianco | Rosso", price: "5€" },
          { name: "Suze", price: "5€" },
          { name: "Kir | Cassis | Mûres | Pêche", price: "6€" },
          { name: "Kir Royal | Cassis | Mûres | Pêche", price: "14€" },
        ],
      },
    ],
  },
  {
    title: "Bière",
    sections: [
      {
        heading: "Pressions",
        note: "12cl / 50cl",
        items: [
          { name: "Carlsberg Blonde Brut", price: "6€ / 10€" },
          { name: "Grimbergen Blonde", price: "6€ / 10€" },
          { name: "1664 Blanche", price: "6€ / 10€" },
          { name: "IPA Brooklyn", price: "6€ / 10€" },
          { name: "La Bête", price: "6€ / 10€" },
        ],
      },
      {
        heading: "Bouteilles",
        note: "33cl",
        items: [
          { name: "Desperados", price: "10€" },
          { name: "Corona", price: "10€" },
          { name: "Liefmans Fruitesse", price: "10€" },
          { name: "Chouffe | Chouffe Ruby", price: "10€" },
          { name: "Cidre Magners", price: "10€" },
          { name: "IPA 0.0% Alc", price: "10€" },
        ],
      },
    ],
  },
  {
    title: "Cocktail Apéritif",
    sections: [
      {
        heading: "Cocktail Apéritif",
        items: [
          { name: "Negroni", description: "Campari, Martini rouge, Gin, orange", price: "12€" },
          { name: "Americano", description: "Campari, Martini rouge, Perrier", price: "12€" },
        ],
      },
      {
        heading: "Spritz",
        items: [
          {
            name: "Aperol Spritz",
            description: "Aperol, Prosecco, Perrier, orange",
            price: "12€",
          },
          {
            name: "Saint-Germain Spritz",
            description: "Saint-Germain, Prosecco, Perrier, menthe, citron vert",
            price: "14€",
          },
          {
            name: "Italicus Spritz",
            description: "Saint-Germain, Prosecco, Perrier, citron jaune",
            price: "16€",
          },
        ],
      },
      {
        heading: "Virgin Spritz",
        items: [
          {
            name: "Hugo Spritz",
            description:
              "Liqueur Maïa 0.0% Alc, pétillant 0.0% Alc, menthe, citron vert, eau gazeuse",
            price: "12€",
          },
          {
            name: "Virgin Aperol Spritz",
            description: "SPRZ N°1 0.0% Alc, pétillant 0.0% Alc, eau gazeuse, orange",
            price: "12€",
          },
        ],
      },
    ],
  },
  {
    title: "Cocktail Signature",
    sections: [
      {
        heading: "Cocktail Signature",
        items: [
          {
            name: "Shelby Honey",
            description: "Bourbon, sirop miel-thym maison, jus de citron frais, bâton de cannelle",
            price: "16€",
          },
          {
            name: "Arthur's Night",
            description:
              "Vodka, liqueur de café, espresso chaud, crème, sirop érable-vanille maison, cacao en poudre",
            price: "16€",
          },
          {
            name: "Peaky Fire",
            description:
              "Whisky tourbé, sirop d'érable-vanille maison, traits de bitter, orange séchée",
            price: "16€",
          },
          {
            name: "Green Polly",
            description: "Chartreuse verte, Gin, jus de pomme, Perrier, tranche de pomme",
            price: "16€",
          },
          {
            name: "Garrison Flame",
            description:
              "Mescal, Chartreuse verte, sirop de miel, jus de citron jaune, solution salée, feuille de sauge flambée",
            price: "16€",
          },
        ],
      },
    ],
  },
  {
    title: "Cocktail",
    sections: [
      {
        heading: "Cocktail",
        items: [
          {
            name: "Basil Smash",
            description: "Gin, sucre de canne, feuille de basilic frais, jus de citron jaune",
            price: "16€",
          },
          {
            name: "Paloma",
            description:
              "Téquila Patron Reposado, jus de pamplemousse, jus de citron vert, sirop d'agave",
            price: "16€",
          },
          {
            name: "Espresso Martini",
            description: "Vodka, liqueur de café, sucre de canne, espresso",
            price: "16€",
          },
          {
            name: "Pornstar Martini",
            description:
              "Vodka, jus de passion, sirop de vanille, purée de passion, jus de citron vert, prosecco",
            price: "16€",
          },
          {
            name: "Irish Coffee",
            description: "Irish Whisky West Cork, espresso, sucre de canne, chantilly",
            price: "18€",
          },
          { name: "Madeleine", description: "Amaretto, Triple sec, jus d'ananas", price: "16€" },
          {
            name: "Amaretto Whisky Mescal Sour",
            description:
              "Amaretto, Whisky, Mescal, jus de citron jaune, blanc d'œuf, sucre de canne",
            price: "16€",
          },
          {
            name: "Maï Thaï",
            description:
              "Rhum blanc, Rhum ambré, triple sec, jus de citron vert, sirop d'orgeat, sucre de canne",
            price: "16€",
          },
        ],
      },
    ],
  },
  {
    title: "Cocktail",
    sections: [
      {
        heading: "Cocktail (suite)",
        items: [
          {
            name: "Mojito",
            description:
              "Rhum blanc, Rhum ambré, citron vert, menthe fraîche, cassonade, eau gazeuse",
            price: "16€",
          },
          {
            name: "Mojito Fruité",
            description:
              "Rhum blanc, rhum ambré, citron vert, menthe fraîche, cassonade, crème de fruits, eau gazeuse",
            price: "16€",
          },
          {
            name: "Mojito Royal",
            description:
              "Rhum blanc, Rhum ambré, citron vert, menthe fraîche, cassonade, Champagne",
            price: "18€",
          },
          {
            name: "Caïpirinha - Caïpiroska",
            description: "Cachaça, citron vert, Cassonade",
            price: "15€",
          },
          {
            name: "Caïpirinha - Caïpiroska Fruitée",
            description: "Cachaça, citron vert, purée de fruits, Cassonade",
            price: "16€",
          },
          {
            name: "Caïpirinha Supérieure",
            description: "Leblon, citron vert, cassonade",
            price: "18€",
          },
          {
            name: "Margarita",
            description: "Téquila, triple sec, jus de citron jaune, sucre de canne",
            price: "16€",
          },
          {
            name: "Long Island",
            description: "Vodka, rhum Blanc, tequila, triple sec, gin, Coca-Cola",
            price: "18€",
          },
          {
            name: "Moscow - London - Jamaïcan Mule",
            description: "Vodka, Gin, Rhum ambré, citron vert, Ginger beer, limonade",
            price: "16€",
          },
        ],
      },
    ],
  },
  {
    title: "Mocktail",
    sections: [
      {
        heading: "Mocktail",
        note: "cocktails sans alcool",
        items: [
          {
            name: "Virgin Mojito",
            description: "Citron vert, menthe fraîche, cassonade, Perrier, jus de pomme",
            price: "10€",
          },
          {
            name: "Cuba Libre",
            description: "Captain Morgan 0.0% Alc, citron vert, Coca-Cola",
            price: "12€",
          },
          {
            name: "London Mule",
            description: "Tanqueray 0.0% Alc, citron vert, sucre de canne, Ginger beer",
            price: "12€",
          },
          {
            name: "Basil Smash",
            description: "JNPR N°2 0.0% Alc, sucre de canne, basilic frais, jus de citron jaune",
            price: "10€",
          },
          {
            name: "Paloma",
            description: "JNPR N°3 0.0% Alc, jus de pamplemousse, jus de citron, sirop agave",
            price: "12€",
          },
        ],
      },
    ],
  },
  {
    title: "Shot & Soft",
    sections: [
      {
        heading: "Shot",
        note: "2cl",
        items: [
          { name: "Alcool Classique", price: "5€" },
          { name: "Génépi", price: "5€" },
          { name: "Vodka Get", price: "6€" },
          { name: "Get 27 & Bailey's", price: "7€" },
          { name: "Teq'Paf", description: "Tequila, citron jaune, sel", price: "7€" },
          { name: "Jäger Bomb", description: "Jagermaëster, Monster Energy", price: "10€" },
          { name: "B-52", description: "Kahlúa, Bailey's, Cointreau Flambé", price: "12€" },
          { name: "Le Mètre Classique | 10 shots", price: "45€" },
          { name: "Le Mètre Teq'Paf | 10 shots", price: "60€" },
          { name: "Le Mètre Premium | 10 shots", price: "de 65€ à 90€" },
        ],
      },
      {
        heading: "Soft",
        items: [
          { name: "Jus de Fruits Granini", description: "Pomme | Ananas | Fraise | Tomate | ACE", price: "6€" },
          {
            name: "Soda",
            description: "Coca-Cola | Coca-Cola Zero | Fuze-Tea | Sprite | Perrier | Orangina",
            price: "6€",
          },
          { name: "Monster Energy Drink", price: "8€" },
          { name: "RedBull", description: "Classic | Watermelon | Sugar Free", price: "10€" },
          { name: "Evian 1L", price: "6€" },
          { name: "Evian 33cl", price: "4.50€" },
          { name: "Badoit 1L", price: "6€" },
        ],
      },
    ],
  },
  {
    title: "Alcool Classique",
    sections: [
      {
        heading: "Alcool Classique",
        note: "4cl / 70cl",
        items: [
          { name: "Vodka — Wyborowa", price: "12€ / 130€" },
          { name: "Whisky — Ballantine's", price: "12€ / 130€" },
          { name: "Rhum — Havana Club 3ans", price: "12€ / 130€" },
          { name: "Rhum — Captain Morgan", price: "12€ / 130€" },
          { name: "Gin — Beefeater London", price: "12€ / 130€" },
          { name: "Gin — Bombay Sapphire", price: "13€ / 140€" },
          { name: "Tequila — Olmeca Blanco", price: "12€ / 130€" },
          { name: "Fresh — Get 27", price: "12€ / 130€" },
          { name: "Fresh — Get 31", price: "12€ / 130€" },
          { name: "Fresh — Bailey's", price: "12€ / 130€" },
          { name: "Fresh — Jägermeister", price: "14€ / 160€" },
        ],
      },
    ],
  },
  {
    title: "Alcool Premium",
    sections: [
      {
        heading: "Mezcal",
        items: [
          { name: "Del Maguey Vida", price: "15€ / 180€" },
          { name: "Don Ramon Salmiana", price: "10€ / 18€ / 200€" },
          { name: "Bandida Black", price: "18€ / 34€ / 599€" },
          { name: "Bandida White", price: "18€ / 34€ / 599€" },
          { name: "Bandida Reposado", price: "19€ / 37€ / 605€" },
        ],
      },
      {
        heading: "Cognac — Armagnac",
        items: [
          { name: "Camus Île de Ré Fine Island", price: "14€" },
          { name: "Hennessy | Fine de Cognac", price: "16€" },
          { name: "Hennessy XO", price: "18€" },
          { name: "Armin", price: "16€" },
          { name: "Darroze", price: "18€" },
        ],
      },
      {
        heading: "Digestif — Liqueur",
        items: [
          { name: "Génépi", price: "5€ / 12€" },
          { name: "Menthe Poivrée Chez Marius", price: "5€ / 12€" },
          { name: "Basilic Chez Fanny", price: "5€ / 12€" },
          { name: "Limoncello Drunken Horse", price: "6€ / 12€" },
          { name: "Liqueur Saint-Germain", price: "15€" },
          { name: "Liqueur Italicus", price: "16€" },
          { name: "Chartreuse Jaune", price: "8€ / 16€" },
          { name: "Chartreuse Verte", price: "10€ / 18€" },
          { name: "Calvados Dupont", price: "14€" },
          { name: "Calvados Drouin XO", price: "19€" },
        ],
      },
    ],
  },
  {
    title: "Alcool Premium",
    sections: [
      {
        heading: "Vodka",
        note: "4cl / 70cl / 1.75L",
        items: [
          { name: "Belvédère", price: "14€ / 180€ / 320€" },
          { name: "Belvédère Black Dirty Brew Café", price: "8€ / 14€ / 160€" },
          { name: "Grey Goose Altius", price: "18€ / 300€" },
        ],
      },
      {
        heading: "Whisky",
        items: [
          { name: "Jack Daniel's", price: "8€ / 14€ / 150€" },
          { name: "Jack Honey", price: "8€ / 14€ / 160€" },
          { name: "Jack Fire", price: "8€ / 14€ / 160€" },
          { name: "Johnny Walker Black Label", price: "15€ / 180€" },
          { name: "Talisker Port Ruighe", price: "16€" },
          { name: "Scapa", price: "16€" },
          { name: "Bruichladdich Clas.Ladie", price: "10€ / 16€" },
          { name: "Duke Straight Bourbon", price: "10€ / 16€" },
          { name: "Aberlour 12 Ans", price: "18€" },
          { name: "Aberlour 16 Ans", price: "20€" },
          { name: "Aberlour A'Bunadh", price: "22€" },
          { name: "Mossburn Speyside Pure Malte 12ans", price: "15€ / 25€" },
          { name: "Hibiki Harmony", price: "20€ / 40€" },
          { name: "Dalmore Cigar Malt «Réserve»", price: "25€ / 45€" },
        ],
      },
      {
        heading: "Rhum",
        items: [
          { name: "Havana Club Especial", price: "14€ / 140€" },
          { name: "Havana Club 7 ans", price: "15€ / 160€" },
          { name: "Bumbu", price: "14€ / 140€" },
          { name: "Diplomatico", price: "14€ / 160€" },
          { name: "Don Papa Baroko", price: "14€ / 160€" },
          { name: "Don Papa", price: "15€ / 165€" },
          { name: "Centenario 20 ans", price: "16€ / 170€" },
          { name: "La Hechicera | Solera 21", price: "15€ / 160€" },
          { name: "JM XO", price: "19€ / 299€" },
          { name: "Facundo Eximo", price: "24€ / 319€" },
          { name: "Zacapa XO", price: "39€ / 399€" },
          { name: "Zacapa Royal", price: "49€ / 599€" },
        ],
      },
    ],
  },
  {
    title: "Alcool Premium",
    sections: [
      {
        heading: "Gin",
        note: "4cl / 70cl",
        items: [
          { name: "Plymouth", price: "12€ / 130€" },
          { name: "Altitude Pink", price: "14€" },
          { name: "Altitude Dry", price: "14€" },
          { name: "Malfy", price: "14€ / 140€" },
          { name: "G'Vine", price: "14€ / 140€" },
          { name: "Hendrick's", price: "14€ / 140€" },
          { name: "Generous", price: "14€ / 140€" },
          { name: "Santa Ana", price: "14€ / 140€" },
          { name: "Normindia", price: "14€ / 140€" },
          { name: "Mare", price: "15€ / 160€" },
          { name: "Roku Gin", price: "16€ / 170€" },
          { name: "Hendrick's Orbium", price: "16€ / 180€" },
          { name: "Hendrick's Lunar", price: "16€ / 180€" },
          { name: "Hendrick's Flora Adora", price: "16€ / 180€" },
          { name: "Hendrick's Grand Cabaret", price: "16€ / 180€" },
          { name: "Monkey 47", price: "16€ / 170€" },
          { name: "Prince Explorer", price: "18€ / 199€" },
          { name: "Adamus Organic Dry", price: "18€ / 199€" },
          { name: "Ki No Bi", price: "19€ / 210€" },
          { name: "Comte de Grasse N°44", price: "22€ / 230€" },
          { name: "Adamus Signature 2023", price: "23€ / 264€" },
          { name: "Palmarae Premier Cru", price: "25€ / 329€" },
        ],
      },
      {
        heading: "Tequila",
        note: "2cl / 4cl / 70cl",
        items: [
          { name: "Patron XO Café", price: "8€ / 16€ / 200€" },
          { name: "Patron Reposado", price: "10€ / 18€ / 250€" },
          { name: "Patron El Alto", price: "20€ / 40€ / 650€" },
          { name: "Codigo Reposado", price: "10€ / 18€ / 250€" },
          { name: "Clase Azul Plata", price: "13€ / 22€ / 300€" },
          { name: "Clase Azul Reposado", price: "25€ / 35€ / 499€" },
          { name: "Don Julio 1942", price: "28€ / 39€ / 599€" },
          { name: "818 Eight «Réserve»", price: "28€ / 49€ / 699€" },
        ],
      },
    ],
  },
];
