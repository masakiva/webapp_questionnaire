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


// —————————
// PROGRAMME
// —————————
const BODY = document.body;
const MAIN = document.querySelector('main');
const MESSAGE_FIN = document.querySelector('.message-fin');
const FLECHE = document.querySelector('.fleche');
const QUESTION = document.querySelector('.question');
const CHAMP = document.querySelector('input');
const LISTE = document.querySelector('ul');
const CONSIGNE = document.querySelector('.consigne');
let tailleChamp;
let num;
let avanc;
let points;
let bloc;
let resultats = '';


function initialisation() {
  num = 0;
  avanc = 0;
  points = 0;
  CHAMP.focus();
  QUESTION.innerHTML = 'Ceci est un questionnaire sur ';
  QUESTION.style.fontSize = '35px';
  QUESTION.style.fontWeight = '600';
  CHAMP.style.fontSize = '32px';
  CHAMP.setAttribute('size', Q[0].titre.length);
  CONSIGNE.innerHTML = 'Saisis dans le champ le titre du questionnaire noté au tableau et valide par la touche <span style="font-variant: small-caps;">Entrée</span>.';
}

initialisation();

function affichageResultats() {
  MESSAGE_FIN.innerHTML = 'Note obtenue : <span style="font-size: 42px;"><sup>' + points * 2 + '</sup>&frasl;<sub>20</sub></span>';
  MAIN.removeChild(MAIN.lastChild);
  MAIN.style.width = 'auto';
  MESSAGE_FIN.style.textAlign = 'center';
  FLECHE.style.display = 'inline-block'; 
  MESSAGE_FIN.style.display = 'inline-block'; 
}

function details() {
  FLECHE.style.visibility = 'hidden'; 
  const DETAILS = document.createElement('p');
  MAIN.appendChild(DETAILS);
  DETAILS.innerHTML = resultats;
}

function fin() {
  avanc++;
  BODY.style.backgroundColor = 'hsl(' + COULEUR + ', 70%, 60%)';
  MESSAGE_FIN.innerHTML = 'C’est terminé, restez sur cette page et attendez le passage du professeur.';
  MESSAGE_FIN.style.fontSize = '35px';
  LISTE.style.display = 'none';
  CONSIGNE.style.display = 'none';
  const CHAMP_MDP = document.createElement('input');
  MAIN.appendChild(CHAMP_MDP).type = 'password';
  CHAMP_MDP.setAttribute('class', 'orange');
  CHAMP_MDP.style.backgroundColor = 'hsl(' + COULEUR + ', 70%, 50%)';
  CHAMP_MDP.onkeydown = function(e) {
    if (e.keyCode === 13 && CHAMP_MDP.value === MDP) { affichageResultats(); }
  };
}

function redirection() {
  if ( num !== 5
    && num !== 8
    && num !== 10
    && num !== 12
    && num !== 14
    && num !== 16
    && num !== 19
    && num !== 20
    || num === 8 && bloc === 2
    || num === 10 && bloc === 3
    || num === 19 && bloc === 7) {
    num++;
  } else if (num === 5) {
    switch (points) {
      case 3:
      case 4:
        num = 8;
	bloc = 2;
	console.log('saut —> question 8');
	break;
      case 5:
        num = 10;
	bloc = 3;
	console.log('saut —> question 10');
	break;
      default:
        num++;
	bloc = 1;
	break;
    }
  } else if (num === 8 && bloc === 1
          || num === 10 && bloc === 2
	  || num === 12 && bloc === 3) {
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
  } else if (num === 14
          || num === 16
	  || num === 19 && bloc === 6
	  || num === 20) {
    num = 50;
    fin();
  }
}

function melange(liste) {
  for (let i = liste.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [liste[i], liste[j]] = [liste[j], liste[i]];
  }
  return liste;
}

function suivant() {
  if (num === 1) {
    QUESTION.style.fontSize = '20px';
    QUESTION.style.fontWeight = 'initial';
    CHAMP.style.fontSize = '17px';
    LISTE.style.display = 'block';
    CONSIGNE.innerHTML = 'Recopie la bonne réponse dans le champ <em>sans te tromper</em> puis valide-la par</span> la touche <span style="font-variant: small-caps;">Entrée.'
  }
  if (num === 50) {
    return;
  }
  avanc++;
  let lumbleu = 100 - avanc * 2;
  BODY.style.backgroundColor = 'hsl(' + COULEUR + ', 70%, ' + lumbleu + '%)';
  document.title = 'Question ' + avanc;
  tailleChamp = 0;
  for (let i = 0; i < Q[num].choix.length; i++) {
    if (Q[num].choix[i].length > tailleChamp) {
      tailleChamp = Q[num].choix[i].length;
    }
  }
  CHAMP.setAttribute('size', tailleChamp);
  CHAMP.value = '';
  CHAMP.focus();
  CHAMP.style.backgroundColor = 'white';
  QUESTION.innerHTML = Q[num].intit;
  while (LISTE.firstChild) {
    LISTE.removeChild(LISTE.firstChild);
  }
  const choixMelanges = melange(Q[num].choix);
  for (let i = 0; i < Q[num].choix.length; i++) {
    const CHOIX_SUPPL = document.createElement('li');
    const CHOIX = document.createTextNode(choixMelanges[i]);
    CHOIX_SUPPL.appendChild(CHOIX);
    LISTE.appendChild(CHOIX_SUPPL);
  }
}

function faux() {
  CHAMP.style.backgroundColor = 'crimson';
}

function verifierChoix() {
  if (num === 0) {
    if (CHAMP.value === Q[0].titre) {
      num++;
      suivant(num);
    } else {
      faux();
    }
  } else {
    for (let i = 0; i < Q[num].choix.length; i++) {
      if (CHAMP.value === Q[num].choix[i]) {
	if (CHAMP.value === Q[num].correct) {
	  points++;
	  if (points === 1) {
	    console.log('réponse ' + num + ' correcte : ' + points + ' point');
	  } else {
	    console.log('réponse ' + num + ' correcte : ' + points + ' points');
	  }
          resultats += '<span style="color: darkgreen">[' + num + ']</span><br>';
	} else {
	  console.log('réponse ' + num + ' : « ' + CHAMP.value + ' »')
	    resultats += '<span style="color: crimson">[' + num + '] <em>' + CHAMP.value + '</em></span><br>';
	}
	redirection();
	suivant();
	return;
      }
    }
    faux();
  }
}

CHAMP.onkeydown = function(e) {
  if (e.keyCode === 13) { verifierChoix(); }
};
