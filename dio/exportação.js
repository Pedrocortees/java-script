const { gets, print } = require('./desafio7');

const numerosSorteados = [];

// Lê 5 números
for (let i = 0; i < 5; i++) {
    const numero = gets();
    numerosSorteados.push(numero);
}

let maiorValor = numerosSorteados[0];

// Percorre o array para achar o maior
for (let i = 1; i < numerosSorteados.length; i++) {
    if (numerosSorteados[i] > maiorValor) {
        maiorValor = numerosSorteados[i];
    }
}

print(maiorValor);
