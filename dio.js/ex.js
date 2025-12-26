class carro {
cor ;
marca ;
gastoMédioPorKm ;
distancia;
combustivel ;
conta ;


constructor (cor, marca, gastoMédioPorKm, distancia, combustivel, conta){
    this.cor = cor;
    this.marca = marca;
    this.gastoMedioPorKm = gastoMédioPorKm;
    this.distancia = distancia;
    this.combustivel= combustivel;
    this.conta = distancia * gastoMédioPorKm * combustivel;
}
    
}
const ka = new carro('prata', 'ford', 1/12, 70, 5,);
console.log(ka)
    
    


    
    
    
