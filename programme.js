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
  if (points === 11) {
    points = 10.5;
  }
  MESSAGE_FIN.innerHTML = 'Note obtenue : <span style="font-size: 42px;"><sup>' + noteFinale + '</sup>&frasl;<sub>20</sub></span>';
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
    CONSIGNE.innerHTML = 'Recopie la bonne réponse dans le champ <em>sans te tromper</em> puis valide-la par</span> la touche <span style="font-variant: small-caps;">Entrée.';
  }
  if (num >= Q.length) {
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
