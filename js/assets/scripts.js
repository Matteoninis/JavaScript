/*let nb1 = 1,
    nb2 = 2;
let res = nb1 + nb2;
// res = res + 10;
res += 10;
res;
// savoir quel type de donnée est stockée TYPEOF
let bool = false;
console.log(typeof bool);
// méthode pour convertir une string en Number
let str = '24';
str = parseInt(str);
console.log(str);
// méthode pour convertir une string en Number
let str = '24.56';
str = parseFloat(str);
console.log(typeof str);
// convertir un Int en string
let nbToStr = 10;
let res = nbToStr.toString();
console.log(typeof res);
// convertir un BOOLEEN en string
let tr = true;
let result = tr.toString();
console.log(typeof result);
console.log(result);
// -- Compter les lettres d'une chaîne de caractères
let phrase = "Si vous êtes agités, à la niche !";
console.log(phrase.length);
// -- Mettre en majuscules
console.log(phrase.toUpperCase());
// -- Mettre en mminuscules
console.log(phrase.toLowerCase());
// -- trouver la position d'un ou plusieurs caractères
console.log(phrase.indexOf('agités'));
*/


/** Les Conditions **/

/** 
 * LES CONDITIONS
 *
 *  IF ... ELSE
 if( 1 > 10 ){
    document.write('IF ... SI');
} else if (1 > -10) {
    document.write('ELSE IF ... SINON SI');
} else {
    document.write('ELSE ... SINON');
}
document.write('<hr>');
// SWITCH
let query = prompt('oui ou non ?');
switch (query.toLowerCase()) {
    case 'oui': // if
        document.write('vous avez dit oui');
        break; // si le cas est TRUE on sort du switch ici
    case 'non': // else if
        document.write('vous avez dit non');
        break; // si le cas est TRUE on sort du switch ici
    default: // else
        document.write('réponse non reconnue');
}
// NaN - Not A Number
let year = '2023';
if(isNaN(year)) {
  document.write('Ce n\'est pas un number après conversion <br>');
} else {
    document.write ('C\'est un number après conversion <br>');
}
 */

/**  
let resultat;

resultat = 10 + 5; // addition
resultat = 10 - 5; // soustraction
resultat = 10 * 5; // multiplication
resultat = 10 / 5; // division
resultat = 10 % 4; // modulo ; ex. des billes qui sont incassables 10 billes à répartir entre 5 personnes


let nb1 = 2,
    nb2 = 3;

resultat = nb1 + nb2; // 5
resultat += 10; // resultat = resultat + 10;

resultat -= 3; // resultat = resultat - 3;





let resultat;

resultat = 10 + 5; // addition
resultat = 10 - 5; // soustraction
resultat = 10 * 5; // multiplication
resultat = 10 / 5; // division
resultat = 10 % 4; // modulo ; ex. des billes qui sont incassables 10 billes à répartir entre 5 personnes

/*
let nb1 = 2,
    nb2 = 3;

resultat = nb1 + nb2; // 5
resultat += 10; // resultat = resultat + 10;

resultat -= 3; // resultat = resultat - 3;
// INCREMENTER - DECREMENTER
let x = 0; // déclaration avec affectation
x++; // ajoute 1 à x
console.log(x);
x = 20; // réaffectation
x--; // enlève 1 à x
console.log(x); 




let age = ( prompt('Quel âge avez-vous ? ') );
console.log(typeof age); // string
/*
- pourquoi alors rentre-t-on dans le ELSE ?
- car isNaN() commence par faire un parseFloat avant de vérifier si la valeur est NaN (si la valeur est bien un nombre)
*/

/*
if ( isNaN(age) ) {
    document.write('Vous n\'avez pas indiqué un nombre<br><hr>');
} else {
    document.write('Vous avez indiqué avoir '+ age + ' ans<br><hr>');*/
/*

    let pommes = "pommes",
    poires = "poires",
poidsPommes = 0.8,
poidsPoires = 0.7;
alert(`Vous avez acheté des ${pommes} et des ${poires} pour un poids total de ${poidsPommes + poidsPoires}kg`);

*/
/**
 * comparaisons
let a = 10; // déclaration de la variable a avec affectation d'un Integer valant 10
let b = 1 > 10; // comparaison
console.log(b);
let c = 1 == '1'; // comparaison de valeurs
console.log(c)
let d = 1 === '1'; // comparaison de valeurs ET de types
console.log(d);         
// NOT !
let e = 1 != '1';
console.log(e);
let f = 1 !== '1';
console.log(f);
 */


/**LES BOUCLES
let i = 1;
while ( i <= 10 ) {
    console.log('Tour n° ' + i);
    i++;
}
for ( let j = 100; j <= 110; j++){
   console.log('Tour n° ' + j);
} **/


/* LES OPERATEURS LOGIQUES
//L'opérateur ET : && ou AND
// -- Si je cumule 2 conditions :
// => mailBdd === mailLogin
// => mdpBdd === mdpLogin
// pour que les 2 correspondent pour être validés il faut les associer
if ( (mailLogin === mailBdd) && (mdpLogin === mdpBdd) ) {
    // ... code ...
    // je ne rentre ici que si les 2 conditions sont vraies
}
// TABLE LOGIQUE &&
if ((A) && (B)){...}
=> si A est FAUX et B est VRAI => FAUX
=> si A est VRAI et B est FAUX => FAUX
=> si A est FAUX et B est FAUX => FAUX
=> si A est VRAI et B est VRAI => VRAI
// L'opérateur OU : || ou OR (| pipe => alt gr + 6)
// TABLE LOGIQUE ||
if ( (C) || (D) ){...}
=> si C est FAUX et D est FAUX => FAUX
=> si C est FAUX et D est VRAI => VRAI
=> si C est VRAI et D est FAUX => VRAI
=> si C est VRAI et D est VRAI => VRAI
*/


//let str = 'Hello'; // true
//let compare = 8 < 10;
//let nb = 13;
//let vrai = true;
//let faux = false;
//let zero = 0;
//let vide = "";
//let rien = null;
//let indefini = undefined;
//let pasUnNombre = NaN;

