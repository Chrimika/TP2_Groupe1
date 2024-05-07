function devinage() {
    var nbr = document.getElementById("result").value;
    var result = ((((((((nbr / 10) + 5) * 100) + 10) / 3) - 15) - 6) * 2);
    var initialNumber = Math.floor(result);
    var decimalPart = result - initialNumber;
    if (decimalPart >= 0.5) {
        initialNumber += 1;
    }
    var paragraphe = document.getElementById("nombre");
    paragraphe.textContent = initialNumber.toString();
}
