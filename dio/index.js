const combus = 5.79;
const kmPorLitro = 12;
const distancia = 1580;

const litrosConsumidos = distancia/kmPorLitro;
const valorGasto = litrosConsumidos * combus;
console.log(valorGasto.toFixed(2));
