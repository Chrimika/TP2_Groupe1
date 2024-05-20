function genererTableau() {
    var taille = Math.floor(Math.random() * (8 - 4 + 1)) + 4;
    var tableau = [];
    for (var i = 0; i < taille; i++) {
        var nombreAleatoire = Math.floor(Math.random() * 10) + 1;
        tableau.push(nombreAleatoire);
    }
    return tableau;
}
function remplirTableauOp(taille) {
    var caracteres = ['/', '-', '+', '*'];
    var tableau = [];
    for (var i = 0; i < taille; i++) {
        var caractereAleatoire = caracteres[Math.floor(Math.random() * caracteres.length)];
        tableau.push(caractereAleatoire);
    }
    return tableau;
}
var divParente = document.getElementById("afficher");
var opperand = genererTableau();
var opperation = remplirTableauOp(opperand.length - 1);
for (var i = 0; i < opperand.length; i++) {
    var nouvelleDiv = document.createElement("div");
    var opp = opperation[i];
    var statement;
    switch (opp) {
        case "*":
            statement = "Multipliez par";
            break;
        case "-":
            statement = "Soustrayez ";
            break;
        case "+":
            statement = "Ajoutez ";
            break;
        case "/":
            statement = "Divisez par";
            break;
    }
    nouvelleDiv.textContent = statement + " " + opperand[i];
    // Ajout de la nouvelle div à la div parente
    divParente.appendChild(nouvelleDiv);
}
