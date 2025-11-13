const produto = 1000;
const pagDebito = 10;
const pagDinOuPix = 15;
const duasParcelas = 0;
const acimaDeDuasParce = 0.1;
const formaDePag = pagDinOuPix;


const debito = produto * pagDebito / 100;
const din = produto * pagDinOuPix / 100;
const duasvez = produto / 2;
const parcela = produto * acimaDeDuasParce / 2;

if (formaDePag == pagDebito) {
    console.log('Você terá R$', debito, 'de desconto!')
} else if (formaDePag == pagDinOuPix) {
    console.log('Você terá R$', din, 'de desconto!')
} else if (formaDePag == duasParcelas) {
    console.log('Sua parcela ficará em R$', duasvez,)
} else {
    console.log('Sua parcerla terá R$', parcela, 'de Juros!')
}