// Sur Firefox, pour afficher la console JavaScript —> Ctrl-Shift-K
// Sur IE, pour afficher les outils de développement (où se trouve la console) —> F12

// pour Samir?
// https://codepen.io/HunorMarton/full/BpvBeM
// https://codepen.io/HunorMarton/full/mRZemO


// ——————————————————
// TITRE ET QUESTIONS
// ——————————————————
const Q = [
  { titre: 'le mouvement' },

  { intit: 'Un changement de position est ',
    choix: ['un déplacement', 'un mouvement', 'un retournement', 'une direction'],
    correct: 'déplacement' },

  { intit: 'La ligne suivie par le point central d’un objet en mouvement s’appelle ',
    choix: ['trajectoire', 'vitesse', 'déplacement'],
    correct: 'trajectoire' },

  { intit: 'Un objet qui tourne autour d’un axe est en ',
    choix: ['rotation', 'équilibre', 'translation'],
    correct: 'rotation' },

  { intit: 'Un objet qui se déplace en ligne droite sans tourner est en ',
    choix: ['rotation circulaire', 'translation rectiligne', 'accélération'],
    correct: 'translation rectiligne' },

  { intit: 'La durée d’un mouvement peut se mesurer en ',
    choix: ['mètre', 'kilomètre', 'seconde'],
    correct: 'seconde' },

  { intit: 'Un mouvement qui va de plus en plus vite est un mouvement ',
    choix: ['rapide', 'accéléré', 'moins lent'],
    correct: 'accéléré' },

  { intit: 'La vitesse d’un objet correspond à la longueur qu’il parcourt dans une unité de ',
    choix: ['masse', 'temps', 'longueur'],
    correct: 'temps' },

  { intit: 'Le lieu précis où se trouve un objet dans l’espace est sa ',
    choix: ['position', 'trajectoire', 'précision'],
    correct: 'position' },

  { intit: 'Si je marche d’un pas de plus en plus rapide, je peux augmenter ma ',
    choix: ['translation', 'trajectoire', 'vitesse'],
    correct: 'vitesse' },

  { intit: 'À la vitesse de 5 m/s, je parcours en 1 min ',
    choix: ['50 m', '30 m', '300 m'],
    correct: '300 m' },

  { intit: 'J’ai parcouru 3 km en 20 min. Ma vitesse moyenne était de ',
    choix: ['1 km/h', '1 m/s', '9 km/h'],
    correct: '9 km/h' },

  { intit: 'Ma gomme est tombée de ma poche. Elle n’a rencontré aucun obstacle au milieu de la cage d’escalier. Son mouvement était ',
    choix: ['décéléré', 'accéléré', 'à vitesse constante'],
    correct: 'accéléré' },

  { intit: 'La vitesse peut se mesurer en ',
    choix: ['g/L', 'km', 'km/h'],
    correct: 'km/h' },

  { intit: 'Une hirondelle qui tournoie dans l’air en chassant les insectes a, par rapport à moi qui la regarde, un mouvement ',
    choix: ['de rotation', 'quelconque', 'de translation'],
    correct: 'quelconque' },

  { intit: 'Le train qui va s’arrêter en gare a, par rapport au quai, un mouvement de ',
    choix: ['translation rectiligne accélérée', 'translation rectiligne décélérée', 'rotation constante'],
    correct: 'translation rectiligne décélérée' },

  { intit: '… et la roue de ce même train a, toujours par rapport au quai, un mouvement ',
    choix: ['de rotation', 'quelconque', 'de translation et de rotation'],
    correct: 'de translation et de rotation' },

  { intit: 'Pour déboucher ma bouteille d’eau, je dévisse son bouchon. Celui-ci a, par rapport à la bouteille, un mouvement de ',
    choix: ['rotation', 'translation', 'rotation + translation'],
    correct: 'rotation + translation' },

  { intit: 'Si je double ma vitesse moyenne pour aller de Paris à Bordeaux, la longueur de mon déplacement est ',
    choix: ['divisée par deux', 'multipliée par deux', 'inchangée'],
    correct: 'inchangée' },

  { intit: 'En même temps que j’ouvre la porte, j’en relève la poignée. La trajectoire de l’extrémité de cette poignée est ',
    choix: ['un cercle', 'une ligne droite', 'une ligne quelconque'],
    correct: 'une ligne quelconque' },

  { intit: 'Le bus 39 dans lequel je me trouve roule en ligne droite vers la station Pasteur, à la vitesse de 39 km/h. Une ambulance de l’hôpital Necker le dépasse. Sa vitesse par rapport au bus vaut 21 km/h.<br>La vitesse à laquelle roule l’ambulance vaut ',
    choix: ['18 km/h', '60 km/h', '78 km/h'],
    correct: '18 km/h' }
];

// ————————————————————————————
// TEINTE DE LA COULEUR DU FOND
// ————————————————————————————
const COULEUR = 200; // —> bleu
                     // la teinte peut être choisie sur
		     // https://codepen.io/HunorMarton/pen/dvXVvQ
		     // la saturation est fixée à 70%
		     // la luminosité évolue entre 100% et (100 - avancement×2)%
		     // la page finale affiche une luminosité de 60%

// ————————————
// MOT DE PASSE
// ————————————
const MDP = 'translatio';
