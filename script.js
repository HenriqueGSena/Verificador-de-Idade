function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[Erro] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebemasc.png')
            } else if (idade <= 21) {
                img.setAttribute('src', 'jovemmasc.png')
            } else if (idade <= 50) {
                img.setAttribute('src', 'adultomasc.png')
            } else {
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebefeminino.png')
            } else if (idade <= 21) {
                img.setAttribute('src', 'jovemfem.png')
            } else if (idade <= 50) {
                img.setAttribute('src', 'adultofem.png')
            } else {
                img.setAttribute('src', 'idosafem.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }
}