function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas.`;

    if(hora >= 0 && hora < 12){
        // Bom dia!
        img.src = 'manha.JFIF';
        document.body.style.background = '#7b9be0';
    } else if(hora >= 12 && hora < 18){
        // Boa tarde!
        img.src = 'tarde.jpg';
        document.body.style.background = '#d18f15';
    } else{
        // Boa noite!
        img.src = 'noite.JFIF';
        document.body.style.background = '#515154';
    }
}
