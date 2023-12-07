//exercice 15 \\



function calcul (param) {
    let addition = 0
    let multi = 1
    for (let i = 0; i < param.length; i++) {
      if (param[i] % 2 === 0 ) {
        addition += param[i];
      console.log(addition)
  
      } 
      else{
        multi *= param[i];
        console.log(multi)
     }
   }
     return addition, multi 
  }
  
  calcul([1, 24, 54, 77, 88, 91])




 

  //exercice 16 \\





  let prenom = ["Hugo", "clovis", "thomas"];

function listePrenom (param) {
  document.write("<ul>")
  for(let i = 0; i < param.length; i++ ) {
    document.write("<li>" + param[i].toUpperCase() + "</li>");  
  }
  document.write("<ul>")
}
listePrenom(prenom);



//exercice 17 \\ 


function conversion (h) 
{
  return h * 60
} 

conversion(3)




// exercice 18 \\

function affichage (nb) {
  if (nb % 7 === 0) {
    retrun (nb + ' est un mutltiple de 7' )
  } 
  else {
    return (nb + ' est un mutliple de 7' )
    
  }
}

console.log (affichage (8)) 


// exercice 19 \\ 








// Exercice 20 \\ 




