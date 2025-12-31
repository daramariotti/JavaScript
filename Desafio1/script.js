/* 1. O botão fica esperando o clique (fora de qualquer função) */
let botao = document.querySelector(".botao");
botao.addEventListener("click", verificar);

/* 2. A função que contém toda a lógica */
function verificar() {
  let km = document.querySelector(".km");
  let vel = Number(km.value);
  let res = document.querySelector(".msg");

  res.innerHTML += `<p>A velocidade do seu carro é <strong>${vel}Km/h</strong></p>`;

  if (vel > 60) {
    res.innerHTML += "<p>Você ultrapassou a velocidade permitida. MULTADO</p>";
  } else {
    res.innerHTML += "<p>Você está dentro da velocidade permitida.</p>";
  }
}
