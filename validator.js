const validator = {
  isValid: function(creditCardNumber){
    let numtarj = creditCardNumber;
    let lnumtarj = numtarj.split("");
    let rlnumt = [];
    
    // bucle para sacar el reverso del número
    for (let i = lnumtarj.length - 1; i>=0; i--){
      rlnumt.push(parseInt(lnumtarj[i]));
    }
    
    // obteniendo el nuevo numero de las posiciones pares (en este caso impares)
    let j = 1;
    let aux1;
    let aux2;
    let doble; 
    while(j < rlnumt.length){
      aux1 = rlnumt[j];
      doble = aux1 * 2;
      // si el doble del numero es > 10 entonces se sumaran ambos dígitos
      if(doble >= 10){
        aux2 = doble.toString().split("")
        let num1 = parseInt(aux2[0])
        let num2 = parseInt(aux2[1])
        let numFinal = num1 + num2
        rlnumt[j] = numFinal;
      } else {
        rlnumt[j] = doble;
      }
      j += 2;
    }
    
    // suma de todos los digitos
    let suma = 0;
    for (let k = 0; k < rlnumt.length;  k++){
      suma += rlnumt[k];
    }
    
    // comprobando si la suma termina en cero
    let resultado =  suma % 10;
    if (resultado == 0){
      return true;
    } else {
      return false;
    }
  },
  maskify: function(creditCardNumber){
    let cadena = creditCardNumber;
    if (cadena.length <= 4){
      return cadena
    } else {
      let lis = cadena.split("");
      for (let i = 0; i < lis.length - 4; i++){
        lis[i] = "*";
      }
      let cadenaNew = lis.join("");
      return cadenaNew
    }
  }
};

export default validator;
