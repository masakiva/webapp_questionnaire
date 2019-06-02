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
// num = 1
  { intit: 'Un changement de position est ',
    choix: ['un déplacement', 'un mouvement', 'un retournement', 'une direction'],
    correct: 'un déplacement' },
// num = 2
  { intit: 'La ligne suivie par le point central d’un objet en mouvement s’appelle ',
    choix: ['trajectoire', 'vitesse', 'déplacement'],
    correct: 'trajectoire' },
// num = 3
  { intit: 'Un objet qui tourne autour d’un axe est en ',
    choix: ['rotation', 'équilibre', 'translation'],
    correct: 'rotation' },
// num = 4
  { intit: 'Un objet qui se déplace en ligne droite sans tourner est en ',
    choix: ['rotation circulaire', 'translation rectiligne', 'accélération'],
    correct: 'translation rectiligne' },
// num = 5
  { intit: 'La durée d’un mouvement peut se mesurer en ',
    choix: ['mètre', 'kilomètre', 'seconde'],
    correct: 'seconde' },
// num = 6
  { intit: 'Un mouvement qui va de plus en plus vite est un mouvement ',
    choix: ['rapide', 'accéléré', 'moins lent'],
    correct: 'accéléré' },
// num = 7
  { intit: 'La vitesse d’un objet correspond à la longueur qu’il parcourt dans une unité de ',
    choix: ['masse', 'temps', 'longueur'],
    correct: 'temps' },
// num = 8
  { intit: 'Le lieu précis où se trouve un objet dans l’espace est sa ',
    choix: ['position', 'trajectoire', 'précision'],
    correct: 'position' },
// num = 9
  { intit: 'Si je marche d’un pas de plus en plus rapide, je peux augmenter ma ',
    choix: ['translation', 'trajectoire', 'vitesse'],
    correct: 'vitesse' },
// num = 10
  { intit: 'À la vitesse de 5 m/s, je parcours en 1 min ',
    choix: ['50 m', '30 m', '300 m'],
    correct: '300 m' },
// num = 11
  { intit: 'J’ai parcouru 3 km en 20 min. Ma vitesse moyenne était de ',
    choix: ['1 km/h', '1 m/s', '9 km/h'],
    correct: '9 km/h' },
// num = 12
  { intit: 'Ma gomme est tombée de ma poche. Elle n’a rencontré aucun obstacle au milieu de la cage d’escalier. Son mouvement était ',
    choix: ['décéléré', 'accéléré', 'à vitesse constante'],
    correct: 'accéléré' },
// num = 13
  { intit: 'La vitesse peut se mesurer en ',
    choix: ['g/L', 'km', 'km/h'],
    correct: 'km/h' },
// num = 14
  { intit: 'Une hirondelle qui tournoie dans l’air en chassant les insectes a, par rapport à moi qui la regarde, un mouvement ',
    choix: ['de rotation', 'quelconque', 'de translation'],
    correct: 'quelconque' },
// num = 15
  { intit: 'Le train qui va s’arrêter en gare a, par rapport au quai, un mouvement de ',
    choix: ['translation rectiligne accélérée', 'translation rectiligne décélérée', 'rotation constante'],
    correct: 'translation rectiligne décélérée' },
// num = 16
  { intit: '… et la roue de ce même train a, toujours par rapport au quai, un mouvement ',
    choix: ['de rotation', 'quelconque', 'de translation et de rotation'],
    correct: 'de translation et de rotation' },
// num = 17
  { intit: 'Pour déboucher ma bouteille d’eau, je dévisse son bouchon. Celui-ci a, par rapport à la bouteille, un mouvement de ',
    choix: ['rotation', 'translation', 'rotation + translation'],
    correct: 'rotation + translation' },
// num = 18
  { intit: 'Si je double ma vitesse moyenne pour aller de Paris à Bordeaux, la longueur de mon déplacement est ',
    choix: ['divisée par deux', 'multipliée par deux', 'inchangée'],
    correct: 'inchangée' },
// num = 19
  { intit: 'En même temps que j’ouvre la porte, j’en relève la poignée. La trajectoire de l’extrémité de cette poignée est ',
    choix: ['un cercle', 'une ligne droite', 'une ligne quelconque'],
    correct: 'une ligne quelconque' },
// num = 20
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
	console.log('saut —> question 8'); // ce qui s’affiche dans la console
	break;                  // fin des opérations pour ce bloc conditionnel
      case 5:                   // si points = 5
        num = 10;               // —> question 10 …
	bloc = 3;               // … du bloc 3
	console.log('saut —> question 10');
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
      	console.log('saut —> question 15');
      	break;
      case 7:
        num = 17;
	bloc = 6;
	console.log('saut —> question 17');
	break;
      case 8:
        num = 18;
	bloc = 7;
	console.log('saut —> question 18');
	break;
      default:
        num = 13;
	bloc = 4;
      	console.log('saut —> question 13');
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
