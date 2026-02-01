const gatilho = document.querySelector("#campoCupom");
const containerCupom = document.querySelector(".cupom");

gatilho.addEventListener("click", () => {
  containerCupom.classList.toggle("cupom");
});

const botao = document.querySelector("#btnAplicar");

botao.addEventListener("click", () => {
  let valorAssinatura = 1200.0;

  function valorComDesconto() {
    return valorAssinatura * (1 - 0.1);
  }

  function valorDoDesconto() {
    return valorAssinatura * 0.1;
  }

  const campoDesc = document.querySelector("#campoDesc");
  const valorComDesc = document.querySelector("#valorDesc");

  const cupom = document.querySelector("#textDesc").value.toUpperCase();

  campoDesc.innerHTML = "";

  if (cupom === "CLIENTE10") {
    let descontoValor = document.createElement("span");
    descontoValor.textContent = `Desconto: - R$ ${valorDoDesconto().toFixed(
      2
    )}`;
    campoDesc.appendChild(descontoValor);

    valorComDesc.textContent = valorComDesconto().toFixed(2);
  } else {
    alert("Cupom inválido");
  }
});
