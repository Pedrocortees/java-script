const nota1 = 5;
const nota2 = 7;
const nota3 = 10;

const média = (nota1 + nota2 + nota3) / 3;

if (média < 5) {
    console.log('Reprovado!')
    console.log(média.toFixed(2))
}
else if (média >=5 && média <= 7) {
    console.log('Recuperação!')
    console.log(média.toFixed(2))
} else {
    console.log('Aprovado!')
    console.log(média.toFixed(2))
}
