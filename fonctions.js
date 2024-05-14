//Generer un nombre aleatoire entre 1 et 10
function genererEntier() {
    return Math.floor(Math.random() * 10)+1;
}
//Generer un operateur
function genererOperateur() {
    var operateurs = ["+", "-", "x", "/"];
    var randomIndex = Math.floor(Math.random() * operateurs.length);
    return operateurs[randomIndex];
}
//Retourne l'action de l'operation et le resultat
function Operation(a, b, operator) {
    switch (operator) {
        case "+":
            return ["Additionnez par ".concat(b), a + b];
            break;
        case "-":
            return ["Faites moins ".concat(b), a - b];
            break;
        case "x":
            while (b == 0) {
                b = genererEntier();
            }
            return ["Multipliez par ".concat(b), a * b];
        case "/":
            while (a % b != 0) {
                b = genererEntier();
            }
            return ["Divisez par ".concat(b), a / b];
            break;
        default:
            throw new Error("Opérateur non valide");
    }
}
//Retourne l'action inverse de l'operation et le resultat
function OperationInverse(a, b, operator) {
    switch (operator) {
        case "+":
            return ["Faites moins ".concat(b), a - b];
            break;
        case "-":
            return ["Additionnez par ".concat(b), a + b];
            break;
        case "x":
            return ["Divisez par ".concat(b), a / b];
        case "/":
            return ["Multipliez par ".concat(b), a * b];
            break;
        default:
            throw new Error("Opérateur non valide");
    }
}
function LireDansLeFutur() {
    var i = 0, a = genererEntier(), b = 0;
    var operateur = '';
    var operation = ['', 0];
    var output = document.getElementById("output");
    var result = { resultat: 0, valeursDeB: [], valeursOperations: [] };
    output.innerHTML = "Imaginez un nombre<br>";
    while (i < 6) {
        b = genererEntier();
        operateur = genererOperateur();
        operation = Operation(a, b, operateur);
        output.innerHTML += operation[0] + "<br>";
        a = operation[1];
        result.valeursDeB[i] = b;
        result.valeursOperations[i] = operateur;
        if (i == 3) {
            for (var j = i; j >= 0; j--) {
                b = result.valeursDeB[j];
                operateur = result.valeursOperations[j];
                operation = OperationInverse(a, b, operateur);
                output.innerHTML += operation[0] + "<br>";
                a = operation[1];
            }
            output.innerHTML += "Faites moins le nombre choisi <br>";
            a = 0;
        }
        i++;
    }
    result.resultat = a;
    output.innerHTML += "Le resultat est " + result.resultat;
}

var result1 = { valeursDeB: [], valeursOperations: [] };
function LireDansLaPensee() {
    var i = 0;
    var a = genererEntier();
    var b = 0;
    var operateur = '';
    var operation = ['', 0];
    var output = document.getElementById("output");
    output.innerHTML = "Imaginez un nombre<br>";

    while (i < 8) {
        b = genererEntier();
        operateur = genererOperateur();
        operation = Operation(a, b, operateur);
        output.innerHTML += operation[0] + "<br>";
        a = operation[1];
        result1.valeursDeB[i] = b;
        result1.valeursOperations[i] = operateur;
        i++;
    }
}

function getValue() {
    var x = parseInt(document.getElementById('resultatFinal').value);
    var nombreDepart = document.getElementById("nombreDepart");

    for (var j = result1.valeursDeB.length - 1; j >= 0; j--) {
        var operationInv = OperationInverse(x, result1.valeursDeB[j], result1.valeursOperations[j]);
        x = operationInv[1];

    }
    nombreDepart.innerHTML = "<br>Le nombre que vous avez pensé est " + x + "<br>";
}
