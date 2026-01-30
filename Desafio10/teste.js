const formulario = document.querySelector("#formImc");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const resultadoBloco = document.querySelector("#resultado");
  resultadoBloco.innerHTML = "";

  const listaDeErros = document.querySelectorAll(".error");
  listaDeErros.forEach((div) => (div.innerHTML = ""));

  const dadosForm = new FormData(formulario);
  let indice = 0;
  let formularioValido = true;

  for (let [campo, valor] of dadosForm.entries()) {
    const divDeErroAtual = listaDeErros[indice];

    if (valor.trim() === "") {
      const newError = document.createElement("p");
      newError.textContent = "Preencha este campo!";
      divDeErroAtual.appendChild(newError);

      formularioValido = false;
    }
    indice++;
  }

  if (formularioValido) {
    const peso = parseFloat(dadosForm.get("peso"));
    const altura = parseFloat(dadosForm.get("altura"));
    const nome = dadosForm.get("nome");

    const valorImc = calculoImc(peso, altura).toFixed(2);

    const resultado = document.createElement("p");

    if (valorImc < 18.5) {
      resultado.textContent = `${nome}, seu IMC é ${valorImc}. Categoria: Abaixo do peso.`;
      resultado.classList.add("resultado-abaixo");
    } else if (valorImc < 24.9) {
      resultado.textContent = `${nome}, seu IMC é ${valorImc}. Categoria: Peso normal.`;
      resultado.classList.add("resultado-normal");
    } else if (valorImc < 29.9) {
      resultado.textContent = `${nome}, seu IMC é ${valorImc}. Categoria: Sobrepeso.`;
      resultado.classList.add("resultado-sobrepeso");
    } else {
      resultado.textContent = `${nome}, seu IMC é ${valorImc}. Categoria: Obesidade.`;
      resultado.classList.add("resultado-obesidade");
    }

    resultadoBloco.appendChild(resultado);
  }
});

function calculoImc(peso, altura) {
  return peso / (altura * altura);
}
