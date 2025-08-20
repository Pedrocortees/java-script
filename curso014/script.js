function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var fsex = document.getElementsByName('radsex')
    var res = document.getElementById('res')  // <- faltava isso

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade <=10){
                img.setAttribute('src', 'foto-menino.png')
            }else if(idade < 21){
                img.setAttribute('src', 'foto-jovem.jpeg')
            }else if(idade < 50){
                img.setAttribute('src', 'foto-homem.png')
            }else {
                img.setAttribute('src', 'foto-idoso.png')
            }
        }else if (fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade <=10){
                img.setAttribute('src', 'foto-menina.png')
            }else if(idade < 21){
                img.setAttribute('src', 'foto-jovem.jpeg')
            }else if(idade < 50){
                img.setAttribute('src', 'foto-mulher.png')
            }else {
                img.setAttribute('src', 'foto-idosa.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}
