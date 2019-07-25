
let bouton = document.getElementsByClassName("bouton");
let boutn = document.getElementsByClassName("boutn");
let egal = document.getElementsByClassName("egal")
let result =  document.getElementById("result")
for (let i = 0; i < bouton.length; i++) {
    bouton[i].addEventListener("click",affichage);
    }

for (let i = 0; i < boutn.length; i++) {
    boutn[i].addEventListener("click",affichage);
}

for (let i = 0; i < egal.length; i++) {
    egal[i].addEventListener("click",afficherResult);
    
}
    function afficherResult() {
        document.getElementById("result").innerHTML = (eval(result.textContent));
    }

    function affichage() {
        document.getElementById("result").innerHTML += this.value;
    }

