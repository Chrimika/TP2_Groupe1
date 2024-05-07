function devinage() {
  var nbr :number = parseFloat(document.getElementById("result").value);
  const initialNumber :number = (((((((nbr/10)+5)*100)+10)/3)-15)-6)*2;
  const paragraphe = document.getElementById("nombre");
  paragraphe.textContent = initialNumber.toString();
}

