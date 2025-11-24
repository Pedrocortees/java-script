function calcularImc(peso, altura){
 return peso / (altura * altura); 
}
function classificarImc(imc){
    if (imc < 18.5) {
    return ('Abaixo do peso')
} else if (imc > 18.5 && imc < 25) {
    return ('Peso Normal')
} else if (imc > 25 && imc < 30) {
    return ('Acima do peso')
} else if (imc > 30 && imc < 40) {
    return ('Obeso')
} else {
    return ('Obsesidade Grave')
}
}

(function () {
const peso = 75;
const altura = 1.75;

const imc = calcularImc(peso,altura);
console.log(classificarImc(imc));
})();

