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
[Vota DeMolay]/src/js/functions.js
Author: Laudivan Freire de Almeida <laudivan AT gmail.com>
*******************************************************************************/

/*
  Verifica se o eleitor (ID DeMolay) pode votar, ou seja, se ele está presente 
  na lista de votantes e se ele ainda não votou. 
*/
function podeVotar () {
  idEleitor = parseInt($("#idEleitor").val());
  
  if (isNaN(idEleitor)) {
    preparaApp();
    return;
  }
  
  eleitor = getEleitor (idEleitor);
  if (eleitor == false) {
    preparaApp();
    return;
  }
  $('#jaVotou,#votacaoLiberada').fadeOut();
  if (jaVotou(idEleitor)) {
    $('#jaVotou').fadeIn();
    $('#jaVotou span').html( eleitor.nome );
  } else {
    $('#votacaoLiberada').fadeIn();
    $('#votacaoLiberada span').html( eleitor.nome );
  }
}

/*
  Obtém as informações do eleitor identificado pelo ID DeMolay
  @param idEleitor Number Inteiro referente ao ID DeMolay do eleitor
*/
function getEleitor (idEleitor) {
  for (i in votantes) {
    if (idEleitor == votantes[i].id) return votantes[i];
  }
  
  return false;
}

/*
  Obtém as informações do candidado identificado pelo ID DeMolay
  @param idCandidato Number Inteiro referente ao ID DeMolay do candidato
*/
function getCandidato (idCandidato) {
  idCandidato = parseInt (idCandidato);
  
  for (r in resultado)
  for (c in resultado[r])
    if (resultado[r][c].id == idCandidato) return resultado[r][c];
    
  return false; 
}

/*
  Retorna TRUE se o eleitor já votou.
  @param idEleitor Number Inteiro referente ao ID DeMolay do eleitor
*/
function jaVotou (idEleitor) {  
  for (i in votaram) {
    if (idEleitor == votaram[i]) return true;
  }
  
  return false;
}

/*
  Prepara o aplicativo para a iniciar a votação.
*/
function preparaApp () {
  $("section:not(#inicio),#votacaoLiberada,#jaVotou,.btnconfirma").hide();
  //$("#idEleitor").val('');
  //$("#idEleitor").removeAttr('value');
  $("#inicio").show();
  $("#votacaoLiberada span,#jaVotou span").html("");
  $("input:checked").prop('checked', false);
  $('.lista').empty();
  
  selecionadosTemp = [];

  votoTemp = {candMC: null,cand1Cons: null,cand2Cons: null,candTes: null};
}

/*
  Prepara a tela para receber o voto de Tesoureiro
*/
function montarVotosTes () {
  for (i in resultado.candTes) {
    $("#vtesoureito .lista").append (
    '<label class="col"><input type="radio" name="candTes" value="' 
      + resultado.candTes[i].id + '" />' +
      '<img src="./img/candidatos/'+ resultado.candTes[i].id + '.jpg" /><p>' 
      + resultado.candTes[i].nome + 
    '</p></label>'
    );
  }
  
  $("input[name=candTes]").change (function () { 
    $('#vtesoureito .btnconfirma').slideDown(); 
  });
}

/*
  Prepara a tela para receber o voto de Segundo Conselheiro
*/
function montarVotos2Cons () {
  for (i in resultado.cand2Cons) {
    if (aindaNaoFoiEscolhido(resultado.cand2Cons[i])) {
      $("#v2conselheiro .lista").append (
      '<label class="col"><input type="radio" name="cand2Cons" value="' 
        + resultado.cand2Cons[i].id + '" />' +
        '<img src="./img/candidatos/'+ resultado.cand2Cons[i].id + '.jpg" /><p>' 
        + resultado.cand2Cons[i].nome + 
      '</p></label>'
      );
    }
  }
  
  $("input[name=cand2Cons]").change (function () { 
    $('#v2conselheiro .btnconfirma').slideDown(); 
  });
}

/*
  Prepara a tela para receber o voto de Primeiro Conselheiro
*/
function montarVotos1Cons () {
  for (i in resultado.cand1Cons) {
    if (aindaNaoFoiEscolhido(resultado.cand1Cons[i])) {
      $("#v1conselheiro .lista").append (
      '<label class="col"><input type="radio" name="cand1Cons" value="' 
        + resultado.cand1Cons[i].id + '" />' +
        '<img src="./img/candidatos/'+ resultado.cand1Cons[i].id + '.jpg" /><p>' + resultado.cand1Cons[i].nome + '</p></label>'
      );
    }
  }
  
  $("input[name=cand1Cons]").change (function () { $('#v1conselheiro .btnconfirma').slideDown(); });
}

/*
  Prepara a tela para receber o voto de Mestre Conselheiro
*/
function montarVotosMC () {
  for (i in resultado.candMC) {
    if (aindaNaoFoiEscolhido(resultado.candMC[i])) {
      $("#vmc .lista").append (
      '<label class="col"><input type="radio" name="candMC" value="' + resultado.candMC[i].id + '" />' +
      '<img src="./img/candidatos/'+ resultado.candMC[i].id + '.jpg" /><p>' + resultado.candMC[i].nome + '</p></label>'
      );
    }
  }
  
  $("input[name=candMC]").change (function () { $('#vmc .btnconfirma').slideDown(); });
}

/*
  Retorna verdadeiro se o candidato não foi escolhido pelo eleitor para outro
  cargo.
*/
function aindaNaoFoiEscolhido (candidato) {
  idCandidato = candidato.id;
  if (idCandidato == 0) return true;
  
  for (c in selecionadosTemp) {
    if (selecionadosTemp[c] == idCandidato) return false;
  }
  
  return true
}

/*
  Salva o voto no localStorage do navegador.
*/
function salvar () {
  for (c in resultado.candMC) {
    console.log (resultado.candMC[c].id + ' ' + votoTemp.candMC)
    if (resultado.candMC[c].id == votoTemp.candMC) {
      resultado.candMC[c].votos ++;
      break;
    }
  }
    
  for (c in resultado.cand1Cons) {
    if (resultado.cand1Cons[c].id == votoTemp.cand1Cons) {
      resultado.cand1Cons[c].votos ++;
      break;
    }
  }
  
  for (c in resultado.cand2Cons) {
    if (resultado.cand2Cons[c].id == votoTemp.cand2Cons) {
      resultado.cand2Cons[c].votos ++;
      break;
    }
  }
  
  for (c in resultado.candTes) {
    if (resultado.candTes[c].id == votoTemp.candTes) {
      resultado.candTes[c].votos ++;
      break;
    }
  }
  
  votaram.push(idEleitor);
  
  localStorage.setItem ('resultado', JSON.stringify (resultado));
  localStorage.setItem ('eleitoresQueVotaram', JSON.stringify (votaram));
}

/*
  Compara qual candidato teve mais cargo.
  Este método será usado por $.sort() em resultado.html.
*/
function compareCand (cand1, cand2) {
  if (cand1.id == 0 || cand2.id == 0) return 0;
  
  return cand2.votos - cand1.votos;
}



