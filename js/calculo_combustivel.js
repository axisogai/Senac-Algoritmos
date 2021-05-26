alert('Gasolina ou Álcool - Descubra qual é mais vantajoso.')

var precoGasolina, precoAlcool, continuar, relacao;
do {

	precoGasolina = parseFloat(prompt('Informe o preço da gasolina.'));

	while (precoGasolina == null || isNaN(precoGasolina) || precoGasolina <= 0) {
		precoGasolina = parseFloat(prompt('Valor informado está incorreto. Por favor informe o preço da gasolina.'))
	}

	precoAlcool = parseFloat(prompt('Informe o preço do álcool.'));

	while (precoAlcool == null || isNaN(precoAlcool) || precoAlcool <= 0) {
		precoAlcool = parseFloat(prompt('Valor informado está incorreto.Por favor informe o preço do álcool.'))
	}

	relacao = (precoAlcool / precoGasolina).toFixed(2);

	alert(relacao);
	alert(precoAlcool / precoGasolina);

	if (relacao > 0.7) {
		alert('Abasteça com gasolina.');
	} else if (relacao < 0.7) {
		alert('Abasteça com álcool.');
	} else {
		alert('Você pode abastecer com gasolina ou álcool.');
	}
	continuar = prompt('Deseja efetuar um novo cálculo? Responda Sim ou Não.');
	while (continuar == null || continuar !== 'Sim' && continuar !== 'Não') {
		continuar = prompt('Resposta Incorreta.Por favor digite Sim ou Não.')
	}
} while (continuar == 'Sim')
if (continuar == 'Não') { alert('Obrigado e boa viagem') }
