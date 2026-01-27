const n = gets();
let maiorNumeroPar = 0;
let menorNumeroImpar = 0;
for (let i = 0; index < n; i++) {
    const numero = gets();
    if (gets % 2 === 0) {
        if (numero > maiorNumeroPar) {
            maiorNumeroPar = numero;
        }
    }
    else {
        if (menorNumeroImpar === 0) {
            menorNumeroImpar = numero;
        }
    else if(numero < menorNumeroImpar){
        menorNumeroImpar = numero;
    }
}
}
print('Maior número par: ' + maiorNumeroPar);
print('Menor número impar' + menorNumeroImpar);







const { gets, print } = require('./funcoesauxiliares2');