function inverserOperations(operations: string[]): string[] {
  const inverse: { [key: string]: string } = {
      '/': '*',
      '*': '/',
      '+': '-',
      '-': '+'
  };

  const resultat: string[] = [];

  for (let i = operations.length - 1; i >= 0; i--) {
      const operation = operations[i];
      if (inverse[operation]) {
          resultat.push(inverse[operation]);
      } else {
          console.error(`L'opération '${operation}' n'est pas prise en charge.`);
          // Vous pouvez choisir de gérer cette situation d'erreur selon vos besoins.
      }
  }

  return resultat;
}

function inverserOperands(tableau: number[]): number[] {
  const tableauInverse: number[] = [];

  for (let i = tableau.length - 1; i >= 0; i--) {
      tableauInverse.push(tableau[i]);
  }

  return tableauInverse;
}

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
function devinage(){
  var input = document.getElementById("result");
  input = input.value;
  const invOpperations = inverserOperations(opperation);
  const invOpperands = inverserOperands(opperand);
  
 
}
