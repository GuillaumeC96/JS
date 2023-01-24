






alert("Exercice 2");

var A = parseInt(prompt("Choisir le chiffre de la table de multiplication",""));


function TableMultiplication(X) {
var i = 0;
var mul = 0;
var txt = "Table de "+A+" :";

while (i < 10)
{
   i++;
   var mul = i*X;
   var lgn = i+" x "+X+" = "+mul;
   var txt = txt+"\n"+lgn;

}

return txt;

}

alert(TableMultiplication(A));









alert('Exercice 1');

var tranche1 = 0;
var tranche2 = 0;
var tranche3 = 0;

var age = 0;

var fin = false;

while (fin==false) {

    var age = prompt('Entrez un age','');

    if(age>=100){
        var fin = true;
        tranche3++;
    } else if(age<20){
        tranche1++;
    } else if(age>40){
        tranche3++;
    } else if(age>=20 && age<=40){
        tranche2++;
    }
    
}


alert('Strictement inférieur à 20 ans : '+tranche1);
alert('Compris entre 20 ans et 40 ans : '+tranche2);
alert('Strictement supérieur à 40 ans : '+tranche3);


