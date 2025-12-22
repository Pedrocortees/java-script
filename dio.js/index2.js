const pessoa = {
    nome: 'Pedro',
    idade: 21,
    peso: 72,
    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};
pessoa.nome= 'Renan';
pessoa.idade= 11;

pessoa.descrever();
