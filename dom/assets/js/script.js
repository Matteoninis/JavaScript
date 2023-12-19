// je recupere les elements du DOM (le bouton et la div qui a la classe carre)
let btnTop = document.querySelector('#btnTop');
let btnLeft = document.querySelector('#btnLeft');
let btnRight = document.querySelector('#btnRight');
let btnDown = document.querySelector('#btnDown');
let carre = document.querySelector('.carre');


// Je definis la position de depart du carre (left)

let leftPosition = 0;
let bottomPosition = 0;
let rightPosition = 0;
let downPosition = 0;

/**
 * --2-- DECLARATIONS DES FONCTIONS
 */
// je definis la fonction qui va deplacer le carre


function goUp(){
    bottomPosition += 10;
    console.log('up : ' + bottomPosition);
    carre.style.bottom = bottomPosition +'px';

    carre.style.borderRadius = Math.floor(Math.random() * 51) + '%';

    

    colorRandom();
}

function goLeft(){
    leftPosition -= 10;
    console.log('left : ' + leftPosition);
    carre.style.left = leftPosition + 'px';
    
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    carre.style.border = '3px dashed rgb(' + + red + ', ' + green + ', ' + blue + ')';
    
    colorRandom()
    
}

function goRight(){
    rightPosition -= 10;
    console.log('right : ' + rightPosition);
    carre.style.right = rightPosition + 'px';

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    carre.style.border = '3px dashed rgb(' + + red + ', ' + green + ', ' + blue + ')';

    colorRandom()
}

function goDown(){
    downPosition += 10;
    console.log('down : ' + downPosition);
    carre.style.top = downPosition + 'px';


    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    carre.style.border = '3px dashed rgb(' + + red + ', ' + green + ', ' + blue + ')';

    colorRandom()

}


// border-radius

// rgb(23, 65, 157)
function colorRandom() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let alpha = Math.random().toFixed(2);
    carre.style.backgroundColor = 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha +')';
}


/*function deplacement() {
    // Je fais evoluer la position du carré de 10px
    leftPositions += 10;
    // Je modifie la position du carré
    carre.style.left = leftPositions +'px';
}*/




/**
 * --3-- ECOUTEUR D'EVENEMENTS
 */
// on écoute le clic sur le boutoun 
/*bouton.addEventListener('click', deplacement);
bouton.addEventListener('click', couleur)*/
btnTop.addEventListener('click', goUp);
btnLeft.addEventListener('click', goLeft);
btnRight.addEventListener('click', goRight);
btnDown.addEventListener('click', goDown);

/**
addEventLister('nom de l'évènement', nom de la fonction qui va etre executée)

/!\ on ne met pas les parenthèses a la fin de la fonction, sinon elle sera exécutée directement
 */



