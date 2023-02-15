alert('Exercice 1');

var nbr = prompt('Entrez un nombre','');

var mod = nbr%2;

if(mod==0) {
    alert('pair');
} else {
    alert('impair');
}




alert('Exercice 2');

var nai = prompt('Entrez votre année de naissance','');

var age = 2023-nai;

alert(age+' ans');

if(age>=18) {
    alert('Majeur');
} else {
    alert('Mineur');
}




alert('Exercice 3');

var nbr1 = prompt('Entrez un premier nombre','');
var nbr2 = prompt('Entrez un deuxieme nombre','');

parseInt(nbr1);
parseInt(nbr2);

var ope = prompt('Entrez un opérateur','');

if(ope=="+") {
    var res = parseInt(nbr1)+parseInt(nbr2);
} else if (ope=="-"){
    var res = parseInt(nbr1)-parseInt(nbr2);
} else if (ope=="*"){
    var res = parseInt(nbr1)*parseInt(nbr2);
} else if (ope=="/"){
    var res = parseInt(nbr1)/parseInt(nbr2);
}

alert(res);
