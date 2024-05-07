function devinage() {
    var nbr = parseFloat(document.getElementById("result").value);
    var initialNumber = (((((((nbr / 10) + 5) * 100) + 10) / 3) - 15) - 6) * 2;
    var paragraphe = document.getElementById("nombre");
    paragraphe.textContent = initialNumber.toString();
}
