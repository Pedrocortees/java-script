const etanol = 4.45;
const gasolina = 5.79;
const Tcombus = 'etanol';
const gastoMedio = 10;
const distancia = 100;

const litrosConsumidos = distancia / gastoMedio;
if (Tcombus === 'etanol') {
    const valorGasto = litrosConsumidos * etanol;
    console.log(valorGasto.toFixed(2))
} else {
    const valorGasto = litrosConsumidos * gasolina;
console.log(valorGasto.toFixed(2))
}
