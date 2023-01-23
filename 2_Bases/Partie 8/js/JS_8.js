alert("Exercice 5");

var mot = prompt("Choisir un mot","");
var voy = "aeiouy"
var voyL = voy.length;
var nbvoy = 0;
var i =0;

do 
{
   i++;
   var letre = voy.substring(i,i+1);
   var index = mot.indexOf(letre)

   if(index!==-1){
    nbvoy++;
   }
   
} while (i < voyL);

alert(nbvoy);







alert("Exercice 4");

var Nx = prompt("Choisir un nombre positif non nul","");
var Nx = parseInt(Nx);
var Nb = prompt("Combien de multiples de ce nombre ?","");
var Nb = parseInt(Nb);
var i =0;
var mul = 0;
var txt =" ";

do 
{
   i++;
   var mul = i*Nx;
   var lgn = i+" x "+Nx+" = "+mul;
   var txt = txt+"\n"+lgn;

} while (i < Nb);

alert(txt);







alert("Exercice 3");

var N = 1;
var nb = 0;
var som = 0;
var moy = 0;


do 
{
   var N = prompt("Entrez un nombre non nul ou 0 pour arrêter","");

   nb++;
   som = parseFloat(som) + parseFloat(N);
   moy = parseFloat(som/(nb-1));

} while (N!=0);

alert("Moyenne : "+moy);







alert("Exercice 2");

var N = prompt("Entrez un nombre différent de 0","");
var txt = N;
var inf =N;

do 
{
   inf --;
   var txt = txt+", "+inf;
   
} while (inf > 0);

alert(txt);


alert("Exercice 1");

var txt = "";
var ent ="init";
var i = 0;
var Nb = 0;

do 
{
    i++;
    var ent = prompt("Entrez le prénom N°"+i,"");
    var txt = txt+" "+ent;
    var Nb = i-1;
   
} while (!ent =="");

alert("Les "+Nb+" prénoms "+txt);



