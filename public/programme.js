'use strict';
const BODY = document.body;
const MAIN = document.querySelector('main');
const FLECHE = document.querySelector('.fleche');
const QUESTION = document.querySelector('.question');
const Q_DEBUT = document.querySelector('.q-debut');
const CHAMP = document.querySelector('input');
const Q_FIN = document.querySelector('.q-fin');
const CHAMPOINT = document.querySelector('.champoint');
const LISTE = document.querySelector('ul');
const CONSIGNE = document.querySelector('.consigne');
const CONSIGNE_DEBUT = document.querySelector('.consigne-debut');
const CONSIGNE_FIN = document.querySelector('.consigne-fin');

let numQ;
let tailleChamp = 0;
let num;
let avanc;
let bloc;
let points;
let resultats = '';


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


function initialisation() {
  num = 0;
  avanc = 0;
  points = 0;
  CHAMP.value = '';
  CHAMP.focus();
  Q_DEBUT.textContent = 'Ceci est un questionnaire sur ';
  Q_FIN.textContent = '.';
  QUESTION.style.fontSize = '35px';
  QUESTION.style.fontWeight = '600';
  CHAMP.style.fontSize = '32px';
  for (let i = 0; i < Q.length; i++) {
    if (tailleChamp < Q[i][0].titre.length) {
      tailleChamp = Q[i][0].titre.length;
    }
  }
  CHAMP.setAttribute('size', tailleChamp);
  CONSIGNE_DEBUT.textContent = 'Saisis dans le champ le titre du ' +
    'questionnaire noté au tableau et valide par la touche'
  CONSIGNE_FIN.textContent = 'Entrée.';
  CONSIGNE_FIN.style.fontVariant = 'small-caps';
}

initialisation();

function afficheResultats() {
  Q_DEBUT.textContent = 'Note obtenue : ';
  Q_FIN.style.display = 'inline';
  Q_FIN.style.fontSize = '42px';
  const SUP = document.createElement('sup');
  const FRASL = document.createTextNode ('\u2044');
  const SUB = document.createElement('sub');
  SUP.textContent = points * COEFF[numQ];
  SUB.textContent = '20';
  Q_FIN.textContent = '';
  Q_FIN.appendChild(SUP);
  Q_FIN.appendChild(FRASL);
  Q_FIN.appendChild(SUB);
  MAIN.removeChild(MAIN.lastChild);
  MAIN.style.width = 'auto';
  QUESTION.style.textAlign = 'center';
  FLECHE.style.display = 'inline-block';
  QUESTION.style.display = 'inline-block';
}

function details() {
  QUESTION.style.display = 'block';
  FLECHE.style.display = 'none';
  const DETAILS = document.createElement('p');
  MAIN.appendChild(DETAILS);
  DETAILS.style.whiteSpace = 'pre-line';
  DETAILS.textContent = resultats;
}

function fin() {
  avanc++;
  BODY.style.backgroundColor = 'hsl(' + COULEUR[numQ] + ', 70%, 60%)';
  Q_DEBUT.textContent = 'C’est terminé, restez sur cette page et attendez ' +
    'le passage du professeur.';
  CHAMP.style.display = 'none';
  Q_FIN.style.display = 'none';
  QUESTION.style.fontSize = '35px';
  LISTE.style.display = 'none';
  CONSIGNE.style.display = 'none';
  const CHAMP_MDP = document.createElement('input');
  MAIN.appendChild(CHAMP_MDP).type = 'password';
  CHAMP_MDP.setAttribute('class', 'orange');
  CHAMP_MDP.style.backgroundColor = 'hsl(' + COULEUR[numQ] + ', 70%, 50%)';
  CHAMP_MDP.onkeydown = function(e) {
    if (e.keyCode === 13 && CHAMP_MDP.value === MDP[numQ]) { afficheResultats(); }
  };
}

function melange(liste, min, max) {
  for (let i = max; i > min; i--) {
    const J = Math.floor(Math.random() * (max - min + 1)) + min;
    [liste[i], liste[J]] = [liste[J], liste[i]];
  }
  return liste;
}

function suivant() {
  if (num === 1) {
    QUESTION.style.fontSize = '20px';
    QUESTION.style.fontWeight = 'unset';
    CHAMP.style.fontSize = '17px';
    LISTE.style.display = 'block';
    CONSIGNE_DEBUT.textContent = 'Recopie la bonne réponse dans le champ ' +
      'sans te tromper et valide-la par la touche ';
  }
  if (num >= Q[numQ].length) {
    return;
  }
  avanc++;
  let lum = 100 - avanc * 2;
  BODY.style.backgroundColor = 'hsl(' + COULEUR[numQ] + ', 70%, ' + lum + '%)';
  document.title = 'Question ' + avanc;
  CHAMP.value = '';
  CHAMP.focus();
  CHAMP.style.backgroundColor = 'white';
  const Q_INTIT = Q[numQ][num].intit.split('(CHAMP)');
  Q_DEBUT.textContent =
    Q_INTIT[0].replace("'", "’").replace('<&', '« ').replace('&>', ' »');
  Q_FIN.textContent =
    Q_INTIT[1].replace("'", "’").replace('<&', '« ').replace('&>', ' »');
  if (Q_FIN.textContent === ".") {
    CHAMPOINT.style.whiteSpace = 'nowrap';
  } else {
    CHAMPOINT.style.whiteSpace = 'unset';
  }
  while (LISTE.firstChild) {
    LISTE.removeChild(LISTE.firstChild);
  }
  if (Q[numQ][num].hasOwnProperty('choix')) {
    tailleChamp = 0;
    for (let i = 0; i < Q[numQ][num].choix.length; i++) {
      if (tailleChamp < Q[numQ][num].choix[i].length) {
        tailleChamp = Q[numQ][num].choix[i].length;
      }
    }
    CHAMP.setAttribute('size', tailleChamp);
    CHAMP.style.width = 'unset';
    LISTE.style.display = 'block';
    const CHOIX_MELES =
      melange(Q[numQ][num].choix, 0, Q[numQ][num].choix.length - 1);
    for (let i = 0; i < Q[numQ][num].choix.length; i++) {
      const CHOIX_SUPPL = document.createElement('li');
      const CHOIX = document.createTextNode(CHOIX_MELES[i].replace("'", "’"));
      CHOIX_SUPPL.appendChild(CHOIX);
      LISTE.appendChild(CHOIX_SUPPL);
    }
  } else {
    LISTE.style.display = 'none';
    tailleChamp = Q[numQ][num].correct.length;
    if (tailleChamp < 21) {
      CHAMP.setAttribute('size', '20');
    } else {
      CHAMP.setAttribute('size', tailleChamp);
    }
  }
}

function verifieReponse() {
  if (CHAMP.value.replace("'", "’").replace(/^\s+|\s+$/g, '')
      === Q[numQ][num].correct.replace("'", "’")) {
    points++;
    if (num >= MELANGE[numQ][0] && num <= MELANGE[numQ][1]) {
      if (points === 1) {
        console.log('réponse [' + MELANGE[numQ][0] + ' – ' + MELANGE[numQ][1] +
          '] correcte : ' + points + ' point');
      } else {
        console.log('réponse [' + MELANGE[numQ][0] + ' – ' + MELANGE[numQ][1] +
          '] correcte : ' + points + ' points');
      }
      resultats += '[' + MELANGE[numQ][0] + ' – ' + MELANGE[numQ][1] + ']\r\n';
    } else {
      if (points === 1) {
        console.log('réponse [' + num + '] correcte : ' + points + ' point');
      } else {
        console.log('réponse [' + num + '] correcte : ' + points + ' points');
      }
      resultats += '[' + num + ']\r\n';
    }
  } else {
    if (Q[numQ][num].hasOwnProperty('choix')) {
      if (num >= MELANGE[numQ][0] && num <= MELANGE[numQ][1]) {
      console.log('réponse [' + MELANGE[numQ][0] + ' – ' + MELANGE[numQ][1] +
        '] : « ' + CHAMP.value + ' » (question : ' +
        Q[numQ][num].intit.replace('(CHAMP)', '[…]') + ')');
      resultats += '[' + MELANGE[numQ][0] + ' – ' + MELANGE[numQ][1] + '] « ' +
        CHAMP.value + ' » (' + Q[numQ][num].intit.replace('(CHAMP)', '[…]') +
        ')\r\n';
      } else {
      console.log('réponse [' + num + '] : « ' + CHAMP.value + ' »')
      resultats += '[' + num + '] « ' + CHAMP.value + ' »\r\n';
      }
    } else {
      if (num >= MELANGE[numQ][0] && num <= MELANGE[numQ][1]) {
      console.log('réponse libre [' + MELANGE[numQ][0] + ' – ' +
        MELANGE[numQ][1] + '] : « ' + CHAMP.value + ' » (question : ' +
        Q[numQ][num].intit.replace('(CHAMP)', '[…]') + ')');
      resultats += '[' + MELANGE[numQ][0] + ' – ' + MELANGE[numQ][1] +
        '] (libre) « ' + CHAMP.value + ' » (' +
        Q[numQ][num].intit.replace('(CHAMP)', '[…]') + ')\r\n';
      } else {
      console.log('réponse libre [' + num + '] : « ' + CHAMP.value + ' »')
      resultats += '[' + num + '] (libre) « ' + CHAMP.value + ' »\r\n';
      }
    }
  }
  redirection();
  suivant();
}

function reponseInvalide() {
  CHAMP.style.backgroundColor = 'crimson';
}

function traiteReponse() {
  const VALEUR_CHAMP =
    CHAMP.value.replace("'", "’").replace(/^\s+|\s+$/g, '');
  if (num === 0) {
    for (let i = 0; i < Q.length; i++) {
      if (VALEUR_CHAMP === Q[i][0].titre.replace("'", "’")) {
        numQ = i;
        num++;
        melange(Q[numQ], MELANGE[numQ][0], MELANGE[numQ][1]);
        suivant();
        return;
      }
    }
    reponseInvalide();
    return;
  } else {
    if (Q[numQ][num].hasOwnProperty('choix')) {
      for (let i = 0; i < Q[numQ][num].choix.length; i++) {
        if (VALEUR_CHAMP === Q[numQ][num].choix[i].replace("'", "’")) {
          verifieReponse();
          return;
        } else if (i === Q[numQ][num].choix.length - 1) {
          reponseInvalide();
          return;
        }
      }
    } else {
      verifieReponse();
      return;
    }
  }
}

CHAMP.onkeydown = function(e) {
  if (e.keyCode === 13) { traiteReponse(); }
};
