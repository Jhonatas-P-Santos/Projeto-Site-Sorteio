function getRandom() {
	maxNum = 60;
	qtdMax = 6
	maxNum2 = 25;
	qtdMax2 = 15
	maxNum3 = 80;
	qtdMax3 = 5
	
	 let n = 1;
	  const lista = [];
	  const val = () => Math.floor(Math.random() * maxNum + 1);
	  var checkboxsSelecionados = document.getElementsByName('jogos');
	  do {
	    while (n <= qtdMax) {
	      let numero = val();

	      if (lista.indexOf(numero) === -1) {
	        lista.push(numero)
	      } else {n -= 1};
	      n += 1
	    };
	  } while (lista.length < qtdMax);

	  lista.sort((a, b) => a - b);
	 
	  for (var ck of checkboxsSelecionados){
			 if(ck.checked)
				criarTabela(lista.join(', '), "tbl-megasena", "Mega Sena")
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
	      } else {n2 -= 1};
	      n2 += 1
	    };
	  } while (lista2.length < qtdMax2);

	  lista2.sort((a, b) => a - b);
	 
	  for (var ck of checkboxsSelecionados){
			 if(ck.checked)
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
	      } else {n3 -= 1};
	      n3 += 1
	    };
	  } while (lista3.length < qtdMax3);

	  lista3.sort((a, b) => a - b);
	 
	  for (var ck of checkboxsSelecionados3){
			 if(ck.checked)
					criarTabela(lista3.join(', '), "tbl-quina", "Quina")
				  // document.body.append(ck.value , ": " , lista3.join(', '), "    |   " );
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