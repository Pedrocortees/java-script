const produto = 1000;
const pagDebito = 10;          // desconto 10%
const pagDinOuPix = 15;        // desconto 15%
const duasParcelas = 0;        // sem juros
const acimaDeDuasParce = 0.1;  // juros 10%
const formaDePag = pagDinOuPix; // escolha a forma de pagamento

function calcularValores() {
    const debito = produto - (produto * pagDebito / 100);
    const din = produto - (produto * pagDinOuPix / 100);
    const duasvez = produto / 2;
    const parcela = produto + (produto * acimaDeDuasParce);

    return { debito, din, duasvez, parcela };
}

function pagamento() {
    const { debito, din, duasvez, parcela } = calcularValores();

    if (formaDePag === pagDebito) {
        console.log("Você pagará R$", debito);
    } 
    else if (formaDePag === pagDinOuPix) {
        console.log("Você pagará R$", din);
    } 
    else if (formaDePag === duasParcelas) {
        console.log("Cada parcela será de R$", duasvez);
    } 
    else {
        console.log("Total com juros: R$", parcela);
    }
}

pagamento();
