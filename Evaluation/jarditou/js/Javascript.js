
function txt(A){

    var B = '#'+A;

document.querySelector(B).oninput = function() 
{
    var texte = document.getElementById(A).value;
    var REGtxt = new RegExp("^[A-Za-z]+$");
    var resultat = REGtxt.test(texte);
    
    alert(texte+' '+resultat);

}
}


txt('nom');
txt('prenom');

