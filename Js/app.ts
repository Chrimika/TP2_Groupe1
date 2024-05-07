function devinage() {
  var nbr :number = document.getElementById("result").value;
  const result :number = ((((((((nbr/10)+5)*100)+10)/3)-15)-6)*2);
  var initialNumber: number = Math.floor(result);
  const decimalPart: number = result - initialNumber;
  if (decimalPart >= 0.5) {
    initialNumber += 1;
  }
  const paragraphe = document.getElementById("nombre");
  paragraphe.textContent = initialNumber.toString();
}

