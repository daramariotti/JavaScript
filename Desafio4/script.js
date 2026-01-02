let contar = document.querySelector("#contar");
contar.addEventListener("click", contarf);

function contarf() {
  let finicio = document.querySelector("#inicio");
  let inicio = Number(finicio.value);
  let ffim = document.querySelector("#fim");
  let fim = Number(ffim.value);
  let fpasso = document.querySelector("#passo");
  let passo = Number(fpasso.value);

  let res = document.querySelector(".res");

  if (
    finicio.value.length == 0 ||
    ffim.value.length == 0 ||
    fpasso.value.length == 0 ||
    passo <= 0
  ) {
    res.innerHTML = "Impossível contar!";
  } else {
    res.innerHTML = "Contando: ";

    if (inicio < fim) {
      // Contagem Crescente
      while (inicio < fim) {
        res.innerHTML += ` \u{1F449} ${inicio}`;
        inicio += passo;
      }
    } else {
      // Contagem Decrescente
      while (inicio >= fim) {
        res.innerHTML += ` \u{1F449} ${inicio}`;
        inicio -= passo;
      }
    }
    res.innerHTML += ` \u{1F3C1}`;
  }
}
