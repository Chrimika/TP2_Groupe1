//Generer un nombre aleatoire entre 0 et 100
function genererEntier(): number {
  return Math.floor(Math.random() * 11);
}

//Generer un operateur
function genererOperateur(): string {
  const operateurs: string[] = ["+", "-", "x", "/"];
  const randomIndex: number = Math.floor(Math.random() * operateurs.length);
  return operateurs[randomIndex];
}

//Retourne l'action de l'operation et le resultat
function Operation(a: number, b: number, operator: string): [string,number] {
  switch (operator) {
    case "+":
      return [`Additionnez par ${b}`,a+b];
      break;
    case "-":
      return [`Faites moins ${b}`,a-b];
      break;
    case "x":
      return [`Multipliez par ${b}`,a*b];
    case "/":
      while(b==0||a%b!=0){
          b=genererEntier();
      }
      return [`Divisez par ${b}`,a/b];
      break;
    default:
      throw new Error("Opérateur non valide");
  }
}

//Retourne l'action inverse de l'operation et le resultat
function OperationInverse(a:number,b:number,operator:string):[string,number]{
  switch (operator) {
    case "+":
      return [`Faites moins ${b}`,a-b];
      break;
    case "-":
      return [`Additionnez par ${b}`,a+b];
      break;
    case "x":
      return [`Divisez par ${b}`,a/b];
    case "/":
      return [`Multipliez par ${b}`,a*b];
      break;
    default:
      throw new Error("Opérateur non valide");
  }
}


function LireDansLeFutur():void{
  let i:number=0,a:number=genererEntier(),b:number=0;
  let operateur:string='';
  let operation:[string,number]=['',0];
  let output:string = document.getElementById("output");
  let result:{resultat:number,
    valeursDeB:Array<number>,
    valeursOperations:Array<string>
  }={resultat:0,valeursDeB:[],valeursOperations:[]};
  output.innerHTML = "Imaginez un nombre<br>";
  while(i<6){
      b=genererEntier();
      operateur=genererOperateur();
      operation=Operation(a,b,operateur);
      output.innerHTML+=operation[0]+"<br>";
      a=operation[1];
      result.valeursDeB[i]=b;
      result.valeursOperations[i]=operateur;
      if(i==3){
        for(let j:number=i;j>=0;j--){
          b=result.valeursDeB[j];
          operateur=result.valeursOperations[j];
          operation=OperationInverse(a,b,operateur);
          output.innerHTML+=operation[0]+"<br>";
          a=operation[1];
        }
        output.innerHTML+="Faites moins le nombre choisi <br>";
        a=0;
      }
      i++;
  }
  result.resultat=a;
  output.innerHTML+="Le resultat est "+result.resultat;
}

function LireDansLaPensee():void{
  let i:number=0,a:number=genererEntier(),b:number=0;
  let operateur:string='';
  let operation:[string,number]=['',0];
  let output:string = document.getElementById("output");
  let result:{resultat:number,
    valeursDeB:Array<number>,
    valeursOperations:Array<string>
  }={resultat:0,valeursDeB:[],valeursOperations:[]};
  output.innerHTML = "Imaginez un nombre<br>";
  while(i<8){
      b=genererEntier();
      operateur=genererOperateur();
      operation=Operation(a,b,operateur);
      output.innerHTML+=operation[0]+"<br>";
      a=operation[1];
      result.valeursDeB[i]=b;
      result.valeursOperations[i]=operateur;
      i++;
  }
  let x:number = parseInt(document.getElementById('valeur').value);
  for(let j:number=result.valeursDeB.length-1;j>=0;j--){
    let operationInv:[string,number]=OperationInverse(x,result.valeursDeB[j],result.valeursOperations[j]);
    x=operation[1];
  }
  output.innerHTML+="<br>Le nombre que vous avez pensé est "+x+"<br>";
}


