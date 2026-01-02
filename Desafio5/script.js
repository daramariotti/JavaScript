let botao = document.querySelector("#botao");
botao.addEventListener("click", gerar);

function gerar() {
  let fnum = document.querySelector("#num");
  let num = Number(fnum.value);
  let tab = document.querySelector("#tab");

  if (fnum.value.length == 0) {
    window.alert("[ERRO] Preencha o número corretamente");
  } else {
    let mult = 0;

    tab.innerHTML = "";

    while (mult <= 10) {
      let item = document.createElement("option");
      item.text = `${num} x ${mult} = ${num * mult}`;
      tab.appendChild(item);
      mult++;
    }
  }
}
