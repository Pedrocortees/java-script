class pessoas {
    nome ;
    peso ;
    altura ;
    constructor (nome, peso, altura){
    this.nome = nome 
    this.peso = peso
    this.altura = altura
    
}
calcularImc() 
{
    return this.peso/ (this.altura * this.altura);
}
classificarImc()
{
const imc = this.calcularImc();
 if (imc < 18.5) return(
    'Pessoa abaixo do peso'
 ); else if (imc >= 18.5 && imc < 24.9 ) return(
   'Peso normal'
 ); else if ( imc > 25 && imc < 29.9) return(
    'Sobre peso'
 ); else ( imc > 30); return(
    'Obesidade'
 )


}
}


const pedro = new pessoas ('Pedro Cortes', 75, 1.82 )
const jose = new pessoas ('José', 110, 1.75 )
console.log(jose.classificarImc());

