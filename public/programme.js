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

let tailleChamp = 0;
let num;
let avanc;
let bloc;
let points;
let resultats = '';


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
  CHAMP.setAttribute('size', Q[0].titre.length);
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
  SUP.textContent = points * COEFF;
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
  BODY.style.backgroundColor = 'hsl(' + COULEUR + ', 70%, 60%)';
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
  CHAMP_MDP.style.backgroundColor = 'hsl(' + COULEUR + ', 70%, 50%)';
  CHAMP_MDP.onkeydown = function(e) {
    if (e.keyCode === 13 && CHAMP_MDP.value === MDP) { afficheResultats(); }
  };
}

function melange(liste, min, max) {
  for (let i = max; i > min; i--) {
    const J = Math.floor(Math.random() * (max - min + 1)) + min;
    [liste[i], liste[J]] = [liste[J], liste[i]];
  }
  return liste;
}
melange(Q, MELANGE[0], MELANGE[1]);

function suivant() {
  if (num === 1) {
    QUESTION.style.fontSize = '20px';
    QUESTION.style.fontWeight = 'unset';
    CHAMP.style.fontSize = '17px';
    LISTE.style.display = 'block';
    CONSIGNE_DEBUT.textContent = 'Recopie la bonne réponse dans le champ ' +
      'sans te tromper et valide-la par la touche ';
  }
  if (num >= Q.length) {
    return;
  }
  avanc++;
  let lumbleu = 100 - avanc * 2;
  BODY.style.backgroundColor = 'hsl(' + COULEUR + ', 70%, ' + lumbleu + '%)';
  document.title = 'Question ' + avanc;
  CHAMP.value = '';
  CHAMP.focus();
  CHAMP.style.backgroundColor = 'white';
  const Q_INTIT = Q[num].intit.split('(CHAMP)');
  Q_DEBUT.textContent = Q_INTIT[0].replace("'", "’");
  Q_FIN.textContent = Q_INTIT[1].replace("'", "’");
  if (Q_FIN.textContent === ".") {
    CHAMPOINT.style.whiteSpace = 'nowrap';
  } else {
    CHAMPOINT.style.whiteSpace = 'unset';
  }
  while (LISTE.firstChild) {
    LISTE.removeChild(LISTE.firstChild);
  }
  if (Q[num].hasOwnProperty('choix')) {
    tailleChamp = 0;
    for (let i = 0; i < Q[num].choix.length; i++) {
      if (Q[num].choix[i].length > tailleChamp) {
        tailleChamp = Q[num].choix[i].length;
      }
    }
    CHAMP.setAttribute('size', tailleChamp);
    CHAMP.style.width = 'unset';
    LISTE.style.display = 'block';
    const CHOIX_MELES = melange(Q[num].choix, 0, Q[num].choix.length - 1);
    for (let i = 0; i < Q[num].choix.length; i++) {
      const CHOIX_SUPPL = document.createElement('li');
      const CHOIX = document.createTextNode(CHOIX_MELES[i].replace("'", "’"));
      CHOIX_SUPPL.appendChild(CHOIX);
      LISTE.appendChild(CHOIX_SUPPL);
    }
  } else {
    LISTE.style.display = 'none';
    tailleChamp = Q[num].correct.length;
    if (tailleChamp < 21) {
      CHAMP.setAttribute('size', '20');
    } else {
      CHAMP.setAttribute('size', tailleChamp);
    }
  }
}

function verifieReponse() {
  if (CHAMP.value.replace("'", "’").replace(/^\s+|\s+$/g, '')
      === Q[num].correct.replace("'", "’")) {
    points++;
    if (num >= MELANGE[0] && num <= MELANGE[1]) {
      if (points === 1) {
        console.log('réponse [' + MELANGE[0] + ' – ' + MELANGE[1] +
          '] correcte : ' + points + ' point');
      } else {
        console.log('réponse [' + MELANGE[0] + ' – ' + MELANGE[1] +
          '] correcte : ' + points + ' points');
      }
      resultats += '[' + MELANGE[0] + ' – ' + MELANGE[1] + ']\r\n';
    } else {
      if (points === 1) {
        console.log('réponse [' + num + '] correcte : ' + points + ' point');
      } else {
        console.log('réponse [' + num + '] correcte : ' + points + ' points');
      }
      resultats += '[' + num + ']\r\n';
    }
  } else {
    if (Q[num].hasOwnProperty('choix')) {
      if (num >= MELANGE[0] && num <= MELANGE[1]) {
      console.log('réponse [' + MELANGE[0] + ' – ' + MELANGE[1] + '] : « ' +
        CHAMP.value + ' » (question : ' +
        Q[num].intit.replace('(CHAMP)', '[…]') + ')');
      resultats += '[' + MELANGE[0] + ' – ' + MELANGE[1] + '] « ' +
        CHAMP.value + ' » (' + Q[num].intit.replace('(CHAMP)', '[…]') + ')\r\n';
      } else {
      console.log('réponse [' + num + '] : « ' + CHAMP.value + ' »')
      resultats += '[' + num + '] « ' + CHAMP.value + ' »\r\n';
      }
    } else {
      if (num >= MELANGE[0] && num <= MELANGE[1]) {
      console.log('réponse libre [' + MELANGE[0] + ' – ' + MELANGE[1] +
        '] : « ' + CHAMP.value + ' » (question : ' +
        Q[num].intit.replace('(CHAMP)', '[…]') + ')');
      resultats += '[' + MELANGE[0] + ' – ' + MELANGE[1] + '] (libre) « ' +
        CHAMP.value + ' » (' + Q[num].intit.replace('(CHAMP)', '[…]') + ')\r\n';
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
  if (num === 0) {
    if (CHAMP.value.replace("'", "’").replace(/^\s+|\s+$/g, '')
      === Q[0].titre.replace("'", "’")) {
      num++;
      suivant(num);
    } else {
      reponseInvalide();
    }
  } else {
    if (Q[num].hasOwnProperty('choix')) {
      for (let i = 0; i < Q[num].choix.length; i++) {
        if (CHAMP.value.replace("'", "’").replace(/^\s+|\s+$/g, '')
          === Q[num].choix[i].replace("'", "’")) {
          verifieReponse();
          return;
        } else if (i === Q[num].choix.length - 1) {
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
