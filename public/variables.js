// Sur Firefox, pour afficher la console JavaScript —> Ctrl-Shift-K
// Sur IE, pour afficher les outils de développement (où se trouve la console) —> F12

// pour Samir?
// https://codepen.io/HunorMarton/full/BpvBeM
// https://codepen.io/HunorMarton/full/mRZemO


// ——————————————————
// TITRE ET QUESTIONS
// ——————————————————
const Q = [
  { titre: "l’énergie" },
// num = 1
  { intit: "En physique, l’(CHAMP) s’appelle aussi « chaleur ».",
    correct: "énergie thermique" },
// num = 2
  { intit: "L'énergie chimique est le produit d'une (CHAMP).",
    choix: ["réaction chimique", "relation alimentaire", "expérience de laboratoire"],
    correct: "réaction chimique" },
// num = 3
  { intit: "« Énergie atomique » a pour synonyme « énergie (CHAMP) ».",
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
    correct: "accéléré" },
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
const COULEUR = 0; // —> bleu
                     // la teinte peut être choisie sur
                     // https://codepen.io/HunorMarton/pen/dvXVvQ
                     // la saturation est fixée à 70%
                     // la luminosité évolue entre 100% et (100 - avancement×2)%
                     // la page finale affiche une luminosité de 60%

// ————————————
// MOT DE PASSE
// ————————————
const MDP = "énergumène";

// ———————————
// REDIRECTION
// ———————————
function redirection() {
  if (                          // si (
          num !== 5             // le numéro de la question n’est pas égal à 5
       && num !== 8             // num : numéro (fixe) de la question
       && num !== 10            // !== : ≠ (n’est pas égal à)
       && num !== 12            // && : « et » logique
       && num !== 14
       && num !== 16
       && num !== 19
       && num !== 20
    || num === 8 && bloc === 2  // ici : num = 8 et bloc = 2
    || num === 10 && bloc === 3 // || : « ou » logique
    || num === 19 && bloc === 7 // && est prioritaire par rapport à ||
  ) {
    num++;                      // alors num = num + 1 (sans saut)
  } else if (num === 5) {       // si num = 5
    switch (points) {           // conditions par rapport au nb de …
      case 3:                   // … réponses justes (points = note / 2)
      case 4:                   // ici : si on a donné 3 ou 4 réponses justes
        num = 8;                // alors on passe à la question 8 …
        bloc = 2;               // … du bloc 2
        console.log("saut —> question 8"); // ce qui s’affiche dans la console
        break;                  // fin des opérations pour ce bloc conditionnel
      case 5:                   // si points = 5
        num = 10;               // —> question 10 …
        bloc = 3;               // … du bloc 3
        console.log("saut —> question 10");
        break;
      default:                  // si points n’est pas égal à 3, 4 ou 5
        num++;                  // —> question suivante …
        bloc = 1;               // du bloc 1
        break;
    }
  } else if (
       num === 8 && bloc === 1
    || num === 10 && bloc === 2
    || num === 12 && bloc === 3
  ) {
    switch (points) {
      case 4:
      case 5:
      case 6:
        num = 15;
        bloc = 5;
        console.log("saut —> question 15");
        break;
      case 7:
        num = 17;
        bloc = 6;
        console.log("saut —> question 17");
        break;
      case 8:
        num = 18;
        bloc = 7;
        console.log("saut —> question 18");
        break;
      default:
        num = 13;
        bloc = 4;
        console.log("saut —> question 13");
        break;
    }
  } else if (
       num === 14
    || num === 16
    || num === 19 && bloc === 6
    || num === 20
  ) {
    num = 21;                   // pour terminer (peu importe la valeur donnée …
    fin();                      // … à num, tant qu’elle est supérieure au …
  }                             // … nombre de questions)
}

// ————
// NOTE
// ————
const COEFF = 2; // coefficient à appliquer à une réponse juste pour le calcul …
                 // … de la note finale

// ————————————————————————————————————————————————————————————————
// APPARITION D’UNE FOURCHETTE DE QUESTIONS DANS UN ORDRE ALÉATOIRE
// ————————————————————————————————————————————————————————————————
const MELANGE = [1, 5]; // les numéros correspondent aux limites inférieure …
                        // … et supérieure de la fourchette (incluses)
