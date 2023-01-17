var reponse1 = prompt('Entrez votre nom','');
var reponse2 = prompt('Entrez votre prénom','');
var reponse3 = window.confirm("Etes vous un homme ?");

if(reponse3==true) {
    reponse3="Monsieur"
} else {
    reponse3="Madame"
}

alert('Bonjour '+reponse3+' '+reponse1+' '+reponse2+' \nBienvenue sur notre site web');