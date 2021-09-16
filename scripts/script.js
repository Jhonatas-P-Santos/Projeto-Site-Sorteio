function getRandom() {
	//Mega Sena
	maxNum = 60;
	qtdMax = 6
	//Lotofácil
	maxNum2 = 25;
	qtdMax2 = 15
	//Quina
	maxNum3 = 80;
	qtdMax3 = 5
	//Lotomania
	maxNum4 = 99;
	qtdMax4 = 20
	//Dupla Sena
	maxNum5 = 50;
	qtdMax5 = 6
	//Timemania
	maxNum6 = 80;
	qtdMax6 = 7


	let n = 1;
	const lista = [];
	const val = () => Math.floor(Math.random() * maxNum + 1);
	var checkboxsSelecionados = document.getElementsByName('jogos');
	do {
		while (n <= qtdMax) {
			let numero = val();

			if (lista.indexOf(numero) === -1) {
				lista.push(numero)
			} else {
				n -= 1
			};
			n += 1
		};
	} while (lista.length < qtdMax);

	lista.sort((a, b) => a - b);

	for (var ck of checkboxsSelecionados) {
		if (ck.checked)
			criarTabela(lista.join(', '), "tbl-megasena", "Mega-Sena")
		//document.body.append(ck.value , ": " , lista.join('  '), "    |   " );	 
	}

	let n2 = 1;
	const lista2 = [];
	const val2 = () => Math.floor(Math.random() * maxNum2 + 1);
	var checkboxsSelecionados = document.getElementsByName('jogos2');
	do {
		while (n2 <= qtdMax2) {
			let numero = val2();

			if (lista2.indexOf(numero) === -1) {
				lista2.push(numero)
			} else {
				n2 -= 1
			};
			n2 += 1
		};
	} while (lista2.length < qtdMax2);

	lista2.sort((a, b) => a - b);

	for (var ck of checkboxsSelecionados) {
		if (ck.checked)
			criarTabela(lista2.join(', '), "tbl-lotofacil", "Lotofacil")
		//document.body.append(ck.value , ": " , lista2.join(', '), "    |   " );
	}

	let n3 = 1;
	const lista3 = [];
	const val3 = () => Math.floor(Math.random() * maxNum3 + 1);
	var checkboxsSelecionados3 = document.getElementsByName('jogos3');
	do {
		while (n3 <= qtdMax3) {
			let numero = val3();

			if (lista3.indexOf(numero) === -1) {
				lista3.push(numero)
			} else {
				n3 -= 1
			};
			n3 += 1
		};
	} while (lista3.length < qtdMax3);

	lista3.sort((a, b) => a - b);

	for (var ck of checkboxsSelecionados3) {
		if (ck.checked)
			criarTabela(lista3.join(', '), "tbl-quina", "Quina")
		// document.body.append(ck.value , ": " , lista3.join(', '), "    |   " );
	}

	///////////Função da Lotomania adicionada//////////
	let n4 = 1;
	const lista4 = [];
	const val4 = () => Math.floor(Math.random() * maxNum4 + 1);
	var checkboxsSelecionados4 = document.getElementsByName('jogos4');
	do {
		while (n4 <= qtdMax4) {
			let numero = val3();

			if (lista4.indexOf(numero) === -1) {
				lista4.push(numero)
			} else {
				n4 -= 1
			};
			n4 += 1
		};
	} while (lista4.length < qtdMax4);

	lista4.sort((a, b) => a - b);

	for (var ck of checkboxsSelecionados4) {
		if (ck.checked)
			criarTabela(lista4.join(', '), "tbl-lotomania", "Lotomania")
		// document.body.append(ck.value , ": " , lista4.join(', '), "    |   " );
	}

	///////////Função da Dupla Sena adicionada//////////
	let n5 = 1;
	const lista5 = [];
	const val5 = () => Math.floor(Math.random() * maxNum5 + 1);
	var checkboxsSelecionados5 = document.getElementsByName('jogos5');
	do {
		while (n5 <= qtdMax5) {
			let numero = val5();

			if (lista5.indexOf(numero) === -1) {
				lista5.push(numero)
			} else {
				n5 -= 1
			};
			n5 += 1
		};
	} while (lista5.length < qtdMax5);

	lista5.sort((a, b) => a - b);

	for (var ck of checkboxsSelecionados5) {
		if (ck.checked)
			criarTabela(lista5.join(', '), "tbl-duplasena", "Dupla Sena")
		// document.body.append(ck.value , ": " , lista5.join(', '), "    |   " );
	}


	///////////Função da Timemania adicionada//////////
	let n6 = 1;
	const lista6 = [];
	const val6 = () => Math.floor(Math.random() * maxNum6 + 1);
	var checkboxsSelecionados6 = document.getElementsByName('jogos6');
	do {
		while (n6 <= qtdMax6) {
			let numero = val6();

			if (lista6.indexOf(numero) === -1) {
				lista6.push(numero)
			} else {
				n6 -= 1
			};
			n6 += 1
		};
	} while (lista6.length < qtdMax6);

	lista6.sort((a, b) => a - b);

	for (var ck of checkboxsSelecionados6) {
		if (ck.checked)
			criarTabela(lista6.join(', '), "tbl-timemania", "Timemania")
		// document.body.append(ck.value , ": " , lista6.join(', '), "    |   " );
	}

}

function criarTabela(valores, idElemento, nomeElemento) {
	var tabelaJs = document.createElement("table");
	tabelaJs.setAttribute("id", idElemento);
	tabelaJs.setAttribute("class", "table table-bordered");

	var thCabeca = document.createElement("tr"),
		tdCabeca = document.createElement("th"),
		trCorpo = document.createElement("tr"),
		tdCorpo = document.createElement("td");

	tdCabeca.innerText = nomeElemento;

	thCabeca.appendChild(tdCabeca);
	tabelaJs.appendChild(thCabeca);

	tdCorpo.innerText = valores;

	trCorpo.appendChild(tdCorpo);
	tabelaJs.appendChild(trCorpo);

	document.getElementById("visualizacao").appendChild(tabelaJs);
}