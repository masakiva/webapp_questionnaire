// Pour inclure des guillemets français dans l’intitulé d’une question, on
// pourra écrire les caractères <& et &> à la place, qui seront transformés
// lors de l’exécution du programme. Par exemple, <&ceci&> sera changé en
// « ceci ». Cette transformation n’est pas disponible pour les textes des choix
// proposés ou de la réponse correcte.

'use strict';
const Q = [], COULEUR = [], MDP = [], COEFF = [], MELANGE = [];



// ——————————————————
// TITRE ET QUESTIONS
// ——————————————————
const Q_MOUVEMENT = [
  { titre: 'le mouvement' },
// num = 1
  { intit: 'Un changement de position est (CHAMP).',
    choix: ['un déplacement', 'un mouvement', 'un retournement', 'une direction'],
    correct: 'un déplacement' },
// num = 2
  { intit: 'La ligne suivie par le point central d’un objet en mouvement s’appelle (CHAMP).',
    choix: ['trajectoire', 'vitesse', 'déplacement'],
    correct: 'trajectoire' },
// num = 3
  { intit: 'Un objet qui tourne autour d’un axe est en (CHAMP).',
    choix: ['rotation', 'équilibre', 'translation'],
    correct: 'rotation' },
// num = 4
  //
  { intit: 'Un objet qui se déplace en ligne droite sans tourner est en (CHAMP).',
    choix: ['rotation circulaire', 'translation rectiligne', 'accélération'],
    correct: 'translation rectiligne' },
// num = 5
  { intit: 'La durée d’un mouvement peut se mesurer en (CHAMP).',
    choix: ['mètre', 'kilomètre', 'seconde'],
    correct: 'seconde' },
// num = 6
  { intit: 'Un mouvement qui va de plus en plus vite est un mouvement (CHAMP).',
    choix: ['rapide', 'accéléré', 'moins lent'],
    correct: 'accéléré' },
// num = 7
  { intit: 'La vitesse d’un objet correspond à la longueur qu’il parcourt dans une unité de (CHAMP).',
    choix: ['masse', 'temps', 'longueur'],
    correct: 'temps' },
// num = 8
  { intit: 'Le lieu précis où se trouve un objet dans l’espace est sa (CHAMP).',
    choix: ['position', 'trajectoire', 'précision'],
    correct: 'position' },
// num = 9
  { intit: 'Si je marche d’un pas de plus en plus rapide, je peux augmenter ma (CHAMP).',
    choix: ['translation', 'trajectoire', 'vitesse'],
    correct: 'vitesse' },
// num = 10
  { intit: 'À la vitesse de 5 m/s, je parcours en 1 min (CHAMP).',
    choix: ['50 m', '30 m', '300 m'],
    correct: '300 m' },
// num = 11
  { intit: 'J’ai parcouru 3 km en 20 min. Ma vitesse moyenne était de (CHAMP).',
    choix: ['1 km/h', '1 m/s', '9 km/h'],
    correct: '9 km/h' },
// num = 12
  { intit: 'Ma gomme est tombée de ma poche. Elle n’a rencontré aucun obstacle au milieu de la cage d’escalier. Son mouvement était (CHAMP).',
    choix: ['décéléré', 'accéléré', 'à vitesse constante'],
    correct: 'accéléré' },
// num = 13
  { intit: 'La vitesse peut se mesurer en (CHAMP).',
    choix: ['g/L', 'km', 'km/h'],
    correct: 'km/h' },
// num = 14
  { intit: 'Une hirondelle qui tournoie dans l’air en chassant les insectes a, par rapport à moi qui la regarde, un mouvement (CHAMP).',
    choix: ['de rotation', 'quelconque', 'de translation'],
    correct: 'quelconque' },
// num = 15
  { intit: 'Le train qui va s’arrêter en gare a, par rapport au quai, un mouvement de (CHAMP).',
    choix: ['translation rectiligne accélérée', 'translation rectiligne décélérée', 'rotation constante'],
    correct: 'translation rectiligne décélérée' },
// num = 16
  { intit: '… et la roue de ce même train a, toujours par rapport au quai, un mouvement (CHAMP).',
    choix: ['de rotation', 'quelconque', 'de translation et de rotation'],
    correct: 'de translation et de rotation' },
// num = 17
  { intit: 'Pour déboucher ma bouteille d’eau, je dévisse son bouchon. Celui-ci a, par rapport à la bouteille, un mouvement de (CHAMP).',
    choix: ['rotation', 'translation', 'rotation + translation'],
    correct: 'rotation + translation' },
// num = 18
  { intit: 'Si je double ma vitesse moyenne pour aller de Paris à Bordeaux, la longueur de mon déplacement est (CHAMP).',
    choix: ['divisée par deux', 'multipliée par deux', 'inchangée'],
    correct: 'inchangée' },
// num = 19
  { intit: 'En même temps que j’ouvre la porte, j’en relève la poignée. La trajectoire de l’extrémité de cette poignée est (CHAMP).',
    choix: ['un cercle', 'une ligne droite', 'une ligne quelconque'],
    correct: 'une ligne quelconque' },
// num = 20
  { intit: 'Le bus 39 dans lequel je me trouve roule en ligne droite vers la station Pasteur, à la vitesse de 39 km/h. Une ambulance de l’hôpital Necker le dépasse. Sa vitesse par rapport au bus vaut 21 km/h.<br>La vitesse à laquelle roule l’ambulance vaut (CHAMP).',
    choix: ['18 km/h', '60 km/h', '78 km/h'],
    correct: '18 km/h' }
];

// ————————————————————————————
// TEINTE DE LA COULEUR DU FOND
// ————————————————————————————
const COULEUR_MOUVEMENT = 200; // —> bleu
// la teinte peut être choisie sur https://codepen.io/HunorMarton/pen/dvXVvQ
// en fixant la saturation à 70%, et la luminosité, par exemple, à 60%
// par exemple, car la luminosité évolue entre 100% et (100 - avancement×2)%
// sachant que la luminosité de la page finale est fixée à 60%

// ————————————
// MOT DE PASSE
// ————————————
// pour accéder aux résultats, à la fin
const MDP_MOUVEMENT = 'translatio';

// ————
// NOTE
// ————
// coefficient à appliquer à une réponse juste pour le calcul de la note finale
const COEFF_MOUVEMENT = 2;

// ————————————————————————————————————————————————————————————————
// APPARITION D’UNE FOURCHETTE DE QUESTIONS DANS UN ORDRE ALÉATOIRE
// ————————————————————————————————————————————————————————————————
// les numéros correspondent aux limites inférieure et supérieure de la
// fourchette (incluses)
const MELANGE_MOUVEMENT = [1, 5];



// pour intégrer les constantes ci-dessus dans le programme
Q.push(Q_MOUVEMENT);
COULEUR.push(COULEUR_MOUVEMENT);
MDP.push(MDP_MOUVEMENT);
COEFF.push(COEFF_MOUVEMENT);
MELANGE.push(MELANGE_MOUVEMENT);




// ——————————————————
// TITRE ET QUESTIONS
// ——————————————————
const Q_ENERGIE = [
  { titre: "l’énergie" },
// num = 1
  { intit: "En physique, l’(CHAMP) s’appelle aussi <&chaleur&>.",
    correct: "énergie thermique" },
// num = 2
  { intit: "L'énergie chimique est le produit d'une (CHAMP).",
    choix: ["réaction chimique", "relation alimentaire", "expérience de laboratoire"],
    correct: "réaction chimique" },
// num = 3
  { intit: "<&Énergie atomique&> a pour synonyme <&énergie (CHAMP)&>.",
    correct: "nucléaire" },
// num = 4
  //
  { intit: "Le gaz naturel est une (CHAMP).",
    choix: ["forme d’énergie", "énergie renouvelable", "source d’énergie"],
    correct: "source d’énergie" },
// num = 5
  { intit: "Une conversion d’énergie est le passage d’une (CHAMP) d’énergie à une autre.",
    choix: ["version", "forme", "source"],
    correct: "forme" },
// num = 6
  { intit: "La lumière contient de l’énergie (CHAMP).",
    choix: ["électrique", "rayonnante", "thermique"],
    correct: "rayonnante" },
// num = 7
  { intit: "Dans une bouilloire électrique, l’énergie entrante est convertie en (CHAMP).",
    choix: ["chaleur", "vapeur", "énergie chimique"],
    correct: "chaleur" },
// num = 8
  { intit: "L’énergie de mouvement est une énergie (CHAMP).",
    choix: ["d’agitation", "rotative", "mécanique"],
    correct: "mécanique" },
// num = 9
  { intit: "Dans ma lampe de bureau, l’énergie électrique est convertie en énergie lumineuse au niveau de (CHAMP).",
    choix: ["l’interrupteur", "l’ampoule électrique", "l’abat-jour"],
    correct: "l’ampoule électrique" },
// num = 10
  { intit: "Les nutriments que j’assimile quand je mange fournissent à mon corps de l’(CHAMP).",
    choix: ["énergie chimique", "énergie hydraulique", "énergie atomique"],
    correct: "énergie chimique" },
// num = 11
  { intit: "L’uranium (CHAMP) une forme d’énergie.",
    choix: ["est", "n’est pas"],
    correct: "n’est pas" },
// num = 12
  { intit: "Le moteur du lave-linge convertit (CHAMP).",
    choix: ["l’énergie mécanique en énergie thermique", "l’énergie mécanique en énergie électrique", "l’énergie électrique en énergie mécanique"],
    correct: "l’énergie électrique en énergie mécanique" },
// num = 13
  { intit: "Mes muscles en action fournissent à mon corps de l’(CHAMP).",
    choix: ["énergie mécanique", "énergie électrique", "énergie chimique"],
    correct: "énergie mécanique" },
// num = 14
  { intit: "La masse, la température et l’énergie sont des (CHAMP).",
    choix: ["unités de mesure", "grandeurs physiques", "unités de pression"],
    correct: "grandeurs physiques" },
// num = 15
  { intit: "Le Joule (J) ou la calorie (cal) sont des (CHAMP).",
    choix: ["unités d’énergie", "grandeurs physiques", "unités de pression"],
    correct: "unités d’énergie" },
// num = 16
  { intit: "L’énergie électrique produite dans les centrales arrive chez les usagers (CHAMP).",
    choix: ["intégralement, sans aucune perte", "diminuée de 7% au cours du transport", "diminuée de 70% au cours du transport"],
    correct: "diminuée de 70% au cours du transport" },
// num = 17
  { intit: "(CHAMP) sont trois sources d’énergie renouvelable.",
    choix: ["Le charbon, l’acier et l’aluminium", "L’uranium, le bois et le soleil", "Le soleil, le vent et l’eau"],
    correct: "Le soleil, le vent et l’eau" },
// num = 18
  { intit: "La source d’énergie qui représente la plus grande part de la consommation française est (CHAMP).",
    choix: ["le charbon", "le vent", "le pétrole"],
    correct: "le pétrole" },
// num = 19
  { intit: "(CHAMP) sont deux conséquences d’une utilisation excessive des énergies fossiles.",
    choix: ["La déforestation et la baisse du niveau des océans", "Le réchauffement climatique et la pollution des grandes villes"],
    correct: "Le réchauffement climatique et la pollution des grandes villes" },
// num = 20
  { intit: "En France, l’électricité est produite en majorité par (CHAMP).",
    choix: ["des centrales nucléaires", "des éoliennes", "des centrales hydroélectriques", "des centrales à charbon"],
    correct: "des centrales nucléaires" }
];

// ————————————————————————————
// TEINTE DE LA COULEUR DU FOND
// ————————————————————————————
const COULEUR_ENERGIE = 0; // —> rouge
// la teinte peut être choisie sur https://codepen.io/HunorMarton/pen/dvXVvQ
// en fixant la saturation à 70%, et la luminosité, par exemple, à 60%
// par exemple, car la luminosité évolue entre 100% et (100 - avancement×2)%
// sachant que la luminosité de la page finale est fixée à 60%

// ————————————
// MOT DE PASSE
// ————————————
// pour accéder aux résultats, à la fin
const MDP_ENERGIE = "énergumène";

// ————
// NOTE
// ————
// coefficient à appliquer à une réponse juste pour le calcul de la note finale
const COEFF_ENERGIE = 2;

// ————————————————————————————————————————————————————————————————
// APPARITION D’UNE FOURCHETTE DE QUESTIONS DANS UN ORDRE ALÉATOIRE
// ————————————————————————————————————————————————————————————————
// les numéros correspondent aux limites inférieure et supérieure de la
// fourchette (incluses)
const MELANGE_ENERGIE = [1, 5];



// pour intégrer les constantes ci-dessus dans le programme
Q.push(Q_ENERGIE);
COULEUR.push(COULEUR_ENERGIE);
MDP.push(MDP_ENERGIE);
COEFF.push(COEFF_ENERGIE);
MELANGE.push(MELANGE_ENERGIE);
