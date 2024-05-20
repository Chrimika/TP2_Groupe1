var compteur = 1;
function commencer() {
    var moiMeme = document.getElementById("start");
    /*if(moiMeme!=null)
    moiMeme.style.display="none";*/
    var t1 = document.getElementById("t1");
    var t2 = document.getElementById("t2");
    var t3 = document.getElementById("t3");
    var t4 = document.getElementById("t4");
    var t5 = document.getElementById("t5");
    var t6 = document.getElementById("t6");
    var t7 = document.getElementById("t7");
    var t8 = document.getElementById("t8");
    var t9 = document.getElementById("t9");
    if (compteur === 1) {
        t1.style.display = "block";
        compteur++;
        moiMeme.textContent = "Continuer";
    }
    else if (compteur === 2) {
        t2.style.display = "block";
        compteur++;
        moiMeme.textContent = "Continuer";
    }
    else if (compteur === 3) {
        t3.style.display = "block";
        compteur++;
        moiMeme.textContent = "Continuer";
    }
    else if (compteur === 4) {
        t4.style.display = "block";
        compteur++;
        moiMeme.textContent = "Continuer";
    }
    else if (compteur === 5) {
        t5.style.display = "block";
        compteur++;
        moiMeme.textContent = "Continuer";
    }
    else if (compteur === 6) {
        t6.style.display = "block";
        compteur++;
        moiMeme.textContent = "Continuer";
    }
    else if (compteur === 7) {
        t7.style.display = "block";
        compteur++;
        moiMeme.textContent = "Continuer";
    }
    else if (compteur === 8) {
        t8.style.display = "block";
        compteur++;
        moiMeme.textContent = "Continuer";
    }
    else if (compteur === 9) {
        t9.style.display = "block";
        compteur++;
        moiMeme.textContent = "Continuer";
    }
    else if (compteur === 10) {
        var dev = document.getElementById("deviner");
        var resultat = document.getElementById("result");
        dev.style.display = "block";
        resultat.style.display = "block";
        moiMeme.style.display = "none";
    }
}
function deviner() {
    var myInput = document.getElementById("result");
    myInput.value = "16";
}
