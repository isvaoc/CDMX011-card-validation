import validator from './validator.js';


let divBienvenida;
let divValid;
let divInvalid;
let creditCardNumber;

function readNumber(){
    divValid = document.getElementById("divValid");
    divInvalid = document.getElementById("divInvalid");
    creditCardNumber = document.getElementById("digito").value;
    if (creditCardNumber == ""){
        alert("Por favor, introduce un número para poder validarlo. Gracias!")
    } else {
        let res = validator.isValid(creditCardNumber);

        if (res == true){
            pantValid();
        } else {
        pantInvalid();
        }
    }
}

const btn1= document.getElementById("boton1");
btn1.addEventListener("click", readNumber);

function pantValid(){
    divBienvenida = document.getElementById("divBienvenida");
    divBienvenida.style="display:none;";
    divValid.style="display:block;";

    let texto = document.getElementById("vdigcard");
    texto.innerText = validator.maskify(creditCardNumber);
}

function pantInvalid(){
    divBienvenida = document.getElementById("divBienvenida");
    divBienvenida.style="display:none;";
    divInvalid.style="display:block;";

    let texto = document.getElementById("idigcard");
    texto.innerText = validator.maskify(creditCardNumber);
}

function reiniciar(){
    creditCardNumber = ""
    if(divValid.style.display == "block"){
        divValid.style="display:none;";
    }
    if (divInvalid.style.display == "block"){
        divInvalid.style="display:none;";
    }
    divBienvenida = document.getElementById("divBienvenida");
    divBienvenida.style="display:block;";
    document.getElementById("digito").value = "";
}

const btn2= document.getElementById("boton2");
btn2.addEventListener("click", reiniciar);

const btn3= document.getElementById("boton3");
btn3.addEventListener("click", reiniciar);