function verificar() {
	//alert('Ok')
	var data = new Date()
	var ano = data.getFullYear()
	var fano = document.getElementById('txtano')
	var res = document.getElementById('res')

	if (fano.value.length == 0) {
		window.alert('[ERRO] o campo está em branco')
	}
	else if (Number(fano.value) > ano) {
		window.alert('[ERRO] o ano precisa ser anterior ao atual')
	}

	else {
		//alert('OK')
		var fsex = document.getElementsByName('radsex')
		var idade = ano - Number(fano.value)
		var genero = ''
		var img = window.document.getElementById("foto")

		if (fsex[0].checked) {
			genero = "mulher"
			res.innerHTML = `Detectamos uma ${genero} com ${idade} anos.<br>`
			if (idade >= 0 && idade < 10){
				img.setAttribute("src", "_img/bf.jpg")
			}
			else if (idade < 21){
				img.setAttribute("src", "_img/jf.jpg")
			}
			else if (idade < 50){
				img.setAttribute("src", "_img/af.jpg")
			}
			else {
				img.setAttribute("src", "_img/if.jpg")
			}
		}
		else if (fsex[1].checked){
			genero = "homem"
			res.innerHTML = `Detectamos um ${genero} com ${idade} anos.<br>`
			if (idade >= 10 && idade < 10){
				img.setAttribute("src", "_img/bm.jpg")
			}
			else if (idade < 21){
				img.setAttribute("src", "_img/jm.jpg")
			}
			else if (idade < 50){
				img.setAttribute("src", "_img/am.jpg")
			}
			else {
				img.setAttribute("src", "_img/im.jpg")
			}
		}
	}
}