function getDados(){
	var nome = document.getElementById('nome').value
	var idade = document.getElementById('idade').value
	var peso = document.getElementById('peso').value
	var altura = document.getElementById('altura').value
	var objetivo = document.getElementById('objetivo').value
	var sexo = document.getElementById('sexo').value

	var dados = [nome,idade,peso,altura,objetivo,sexo]
	var text = ['Nome: ', 'Idade: ', 'Peso: ', 'Altura: ', 'Objetivo: ', 'Sexo: ']
	if (sexo == "feminino"){
		document.write("<img src=img/female-512.png width=200px height=124px><br><br>")
	}else{
		document.write("<img src=img/download.png width=200px height=124px><br><br>")
	}
	var c = 0
	for(dado of dados){
		document.write(text[c] + dado + "<br><br>")
		c+=1
	}
}
