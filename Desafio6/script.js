let badd = document.querySelector("#botao");
badd.addEventListener("click", add);

let bfim = document.querySelector("#botao2");
bfim.addEventListener("click", fim);

let inf = document.querySelector("#inf");
let text = document.querySelector("#camp");

let valores = [];

function add() {
  let fnum = document.querySelector("#num");
  let num = Number(fnum.value);

  if (num >= 1 && num <= 100 && !valores.includes(num)) {
    valores.push(num);
    let item = document.createElement("option");
    item.text = `Valor ${num} adicionado`;
    inf.appendChild(item);
    text.innerHTML = "";
  } else {
    window.alert("Valor inválido ou já encontrado na lista.");
  }
  fnum.value = "";
  fnum.focus();
}

function fim() {
  if (valores.length == 0) {
    window.alert("Valor invalido, adicione um valor valido para finalizar");
  } else {
    let total = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;

    for (let pos in valores) {
      soma += valores[pos];
      if (valores[pos] > maior) maior = valores[pos];
      if (valores[pos] < menor) menor = valores[pos];
    }

    let media = soma / total;

    text.innerHTML = `<p>Ao todo, temos ${total} números cadastrados.</p><br>`;
    text.innerHTML += `<p>O maior valor informado foi ${maior}.</p><br>`;
    text.innerHTML += `<p>O menor valor informado foi ${menor}.</p><br>`;
    text.innerHTML += `<p>A soma de todos os valores é ${soma}.</p><br>`;
    text.innerHTML += `<p>A média dos valores é ${media}.</p>`;

    text.style.padding = "5px";
  }
}
