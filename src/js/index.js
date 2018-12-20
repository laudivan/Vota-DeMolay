/*******************************************************************************
This file is part of Vota DeMolay.

Foobar is free software: you can redistribute it and/or modify it under the 
terms of the GNU General Public License as published by the Free Software 
Foundation, either version 3 of the License, or (at your option) any later 
version.

Vota DeMolay is distributed in the hope that it will be useful, but WITHOUT ANY 
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A 
PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with 
Vota DeMolay.  If not, see <https://www.gnu.org/licenses/>6.

********************************************************************************
[Vota DeMolay]/src/js/index.js
Author: Laudivan Freire de Almeida <laudivan AT gmail.com>
*******************************************************************************/

var votaram = [];

var idEleitor = null;

var selecionadosTemp = [];

var votoTemp = {
  candMC: null,
  cand1Cons: null,
  cand2Cons: null,
  candTes: null
};

$(function () { 
  votosAux = localStorage.getItem ('resultado');
  resultado = (votosAux) ? JSON.parse (votosAux) : resultado;
  
  eleitores = localStorage.getItem ('eleitoresQueVotaram');
  votaram = (eleitores) ? JSON.parse (eleitores) : votaram;
  
  preparaApp();

  $("#idEleitor").keyup(podeVotar);
    
  $("#inicio button").click (function () {  
    montarVotosTes();
    $("#inicio").slideUp (function () { $("#vtesoureito").show()});
  });
  
  $('#vtesoureito .btnconfirma button').click(function() { 
    votoTemp.candTes = parseInt ($("input[name=candTes]:checked").val());
    
    selecionadosTemp.push(votoTemp.candTes);
    
    montarVotos2Cons();
    $('#vtesoureito').slideUp (function () { $('#v2conselheiro').show(); });
  });
  
  $('#v2conselheiro .btnconfirma button').click(function() { 
    votoTemp.cand2Cons = parseInt ($("input[name=cand2Cons]:checked").val());
    
    selecionadosTemp.push(votoTemp.cand2Cons);
    
    montarVotos1Cons();
    $('#v2conselheiro').slideUp (function () { $('#v1conselheiro').show(); });
  });
  
  $('#v1conselheiro .btnconfirma button').click(function() {
    votoTemp.cand1Cons = parseInt ($("input[name=cand1Cons]:checked").val()); 
    
    selecionadosTemp.push(votoTemp.cand1Cons);
    
    montarVotosMC();
    $('#v1conselheiro').slideUp (function () { $('#vmc').show(); });
  });
  
  /* Exibir voto (diretoria escolhida) após confirmar o Mestre Conselheiro */
  $('#vmc .btnconfirma button').click(function() {
    votoTemp.candMC = parseInt ($("input[name=candMC]:checked").val());
    
    selecionadosTemp.push(votoTemp.candMC);
    
    $('#confirma .lista').empty();
    
    mc = getCandidato(votoTemp.candMC);
    c1 = getCandidato(votoTemp.cand1Cons);
    c2 = getCandidato(votoTemp.cand2Cons);
    tes= getCandidato(votoTemp.candTes);
    
    $('#confirma .lista').append(
      '<label class="col"><img src="./img/candidatos/'+ mc.id + '.jpg" /><h4>' 
        + mc.nome + '</h4><p>Mestre Conselheiro</p></label>' +
      '<label class="col"><img src="./img/candidatos/'+ c1.id + '.jpg" /><h4>' 
        + c1.nome + '</h4><p>Primeiro Conselheiro</p></label>' +
      '<label class="col"><img src="./img/candidatos/'+ c2.id + '.jpg" /><h4>' 
        + c2.nome + '</h4><p>Segundo Conselheiro</p></label>' +
      '<label class="col"><img src="./img/candidatos/'+ tes.id + '.jpg" /><h4>' 
        + tes.nome + '</h4><p>Tesoureiro</p></label>'
    );
    
    $('#vmc').slideUp (function () { $('#confirma').show(); });
  });
  
  /*
    Salvar
  */
  $('#confirma button').click(function() {
    salvar ();
    
    $('#confirma').slideUp (function () { $('#FIM').show();});
    
    setTimeout (function(){
      $("#idEleitor").val('');
      preparaApp();
    }, 10000);
  });
});




