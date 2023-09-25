// ------ VARIAVEIS------------ //

let quantidadeSubtotal = document.getElementById("quantidade-subtotal");

let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

let btnAddProduto01 = document.querySelector("#btn-adicionar-produto-01")

let btnSubProduto01 = document.querySelector('#btn-subtrair-produto-01')

let quantidadeProduto01 = document.querySelector("#quantidade-produto-01")

let valorProduto01 = subtotalInfo.valor


// ------ FUNÇÕES -------------- //

function atualizarSubtotal() {
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
  valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
}

atualizarSubtotal()

function adicionarUm() {
  //Manipular input (add 1)
  quantidadeProduto01.value = Number(quantidadeProduto01.value) + 1

  //Manipular quantidade no subTotalInf
  subtotalInfo.quantidade = subtotalInfo.quantidade + 1
  subtotalInfo.valor = subtotalInfo.quantidade * valorProduto01

  //Atualizar DOM
  atualizarSubtotal()
}

function subtrairUm() {
  //Manipular input (subtrai 1)
  if (quantidadeProduto01.value > 0) {
    quantidadeProduto01.value = Number(quantidadeProduto01.value) - 1

    //Manipular quantidade no subTotalInf
    subtotalInfo.quantidade = subtotalInfo.quantidade - 1
    subtotalInfo.valor = subtotalInfo.quantidade * valorProduto01

    //Atualizar DOM
    atualizarSubtotal()
  }

}


// -------EVENTO --------------//

btnAddProduto01.addEventListener("click",adicionarUm)
btnSubProduto01.addEventListener("click",subtrairUm)