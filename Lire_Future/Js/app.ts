function genererTableau(): number[] {
  const taille = Math.floor(Math.random() * (8 - 4 + 1)) + 4;
  const tableau: number[] = [];

  for (let i = 0; i < taille; i++) {
      const nombreAleatoire = Math.floor(Math.random() * 10) + 1;
      tableau.push(nombreAleatoire);
  }

  return tableau;
}

function remplirTableauOp(taille: number): string[] {
  const caracteres = ['/', '-', '+', '*'];
  const tableau: string[] = [];

  for (let i = 0; i < taille; i++) {
      const caractereAleatoire = caracteres[Math.floor(Math.random() * caracteres.length)];
      tableau.push(caractereAleatoire);
  }

  return tableau;
}

const divParente = document.getElementById("afficher");

const opperand = genererTableau();
const opperation = remplirTableauOp(opperand.length-1);

for (let i = 0; i < opperand.length; i++) {
  const nouvelleDiv = document.createElement("div");
  var opp = opperation[i];
  var statement;
  switch(opp){
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
  nouvelleDiv.textContent = statement+` `+opperand[i];

  // Ajout de la nouvelle div à la div parente
  divParente.appendChild(nouvelleDiv);
}


