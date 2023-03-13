//*********************************/ EXERCICE 1 **************************************//

//********************* */ Je retourne la valeur C de ma console ********************//

A = 12
B = 2
C = A * B
console.log(C);


//*********************************/ EXERCICE 2 **************************************//

//************* */ Je retourne la valeur de C à la fin de cet Algorithme dans ma console.**********//

A = "123"
B = "12"
C = A + B
console.log(C)

//******************************* */ EXERCICE 3   ************************************//

//********* J'écris un algorithme qui demande à l'utilisateur le prix Hors taxe d'un objet et qui donne sa valeur TTC *********//


let ht = 20
let ttc = ht + 1.196
console.log(ttc)

prompt('Quel est le prix hors taxe de cet objet si sa valeur TTC est de 1.196 de plus ?');

if (ht === 20){
    alert('félicitation, vous avez réussi');
}
else('Désolé vous avez donné le mauvais prix');


//************************************** */ EXERCICE 4 ********************************//

// **** J'écris un algorithme qui demade le nom et prénom de l'utilisateur ************//

let nom = 'Martins'
let prenom = 'Brunolf'
prompt('Quel est votre nom et prénom')

console.log("Bonjour prénom votre nom est nom");


//*********************************** */ EXERCICE 5 ***************************************//

//***** */ J'écris un algorithme qui demande 2 nombres à un utilisateur.  (A * B)est positif ou négatif *****//

prompt('Donnez-moi deux nombres difféfents');

let number = Math.floor((Math.random() * 21) - 10);
if (number > 0)
{alert ("c'est positif");}
else if (number < 0)
{alert ("C'est négatif")}
else {alert("C'est zéro");}




//******************************* */ EXERCICE 6 ****************************************//
//**************** Écrire un algorithme qui demande à l'utilisateur son age *******//



//******************************** */ EXERCICE 7 ************************************//


let str = 6;

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);


//********************************* */ EXERCICE 8 ************************************//

// let str = '';

// for (let i = 0; i < 9; i++) {
//     str = str +i;
// }

// console.log(str)

  
//******************************* */ EXERCICE 21 ************************************//


const array = ['Bonjour', 'tout', 'le', 'monde'];

console.log(array.reverse().join(' '));