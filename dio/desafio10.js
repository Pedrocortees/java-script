const {gets, print} = require = ('./funcoes2.js')



const salarioBruto = gets();
const adicionalBeneficios = gets();

function calcularPorcentagem(valor,percentual) {
 return valor * (percentual/ 100)  
}

function pegarAliquota(salario){
    if(salario >= 0.00 && salario <= 1100.00) {
        return 5;
    }else if (salario >= 1100.01 && salario <= 2500){
    return 10} else {
        return 15;
    }
}

const aliquotaImposto =  pegarAliquota(salarioBruto)
const valorImposto= calcularPorcentagem(salarioBruto, aliquotaImposto)


const valorAtransferir = salarioBruto - valorImposto + adicionalBeneficios
print(valorAtransferir)