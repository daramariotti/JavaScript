const formulario = document.querySelector("#formImc");

formulario.addEventListener("submit", function (event) {
  event.preventDefault(formulario);

  const dadosForm = new FormData(formulario);

  const listaDeErros = document.querySelectorAll(".error");
  let indice = 0;

  for (let [campo, valor] of dadosForm.entries()) {
    const divDeErroAtual = listaDeErros[indice];

    if (valor.trim() === "") {
      const newError = document.createElement("p");
      newError.textContent = "Preencha este campo!";

      divDeErroAtual.innerHTML = "";
      divDeErroAtual.appendChild(newError);
    } else {
      divDeErroAtual.innerHTML = "";
      console.log(campo, valor);
    }

    indice++;
  }
  let resultadoCalculo = calculo(
    dadosForm.get("peso"),
    dadosForm.get("altura")
  ).toFixed(2);

  let nome = dadosForm.get("nome");

  const resultadoBloco = document.querySelector("#resultado");

  let resultado = document.createElement("p");

  if (resultadoCalculo < 18.5) {
    resultado.textContent = `${nome}, seu IMC é ${resultadoCalculo}. Você está na categoria: Abaixo do peso (Magreza)`;
    resultadoBloco.appendChild(resultado);
    resultado.classList.toggle("resultado-abaixo");
  } else if (resultadoCalculo < 24.9) {
    resultado.textContent = `${nome}, seu IMC é ${resultadoCalculo}. Você está na categoria: Peso normal, ideal`;
    resultadoBloco.appendChild(resultado);
    resultado.classList.toggle("resultado-normal");
  } else if (resultadoCalculo < 29.9) {
    resultado.textContent = `${nome}, seu IMC é ${resultadoCalculo}. Você está na categoria: Sobrepeso (pré-obesidade)`;
    resultadoBloco.appendChild(resultado);
    resultado.classList.toggle("resultado-sobrepeso");
  } else if (resultadoCalculo < 34.9) {
    resultado.textContent = `${nome}, seu IMC é ${resultadoCalculo}. Você está na categoria: Obesidade grau I`;
    resultadoBloco.appendChild(resultado);
    resultado.classList.toggle("resultado-obesidade");
  } else if (resultadoCalculo < 39.9) {
    resultado.textContent = `${nome}, seu IMC é ${resultadoCalculo}. Você está na categoria: Obesidade grau II (severa)`;
    resultadoBloco.appendChild(resultado);
    resultado.classList.toggle("resultado-obesidade");
  } else {
    resultado.textContent = `${nome}, seu IMC é ${resultadoCalculo}. Você está na categoria: Obesidade grau III (mórbida ou grave) `;
    resultadoBloco.appendChild(resultado);
    resultado.classList.toggle("resultado-obesidade");
  }
});

function calculo(peso, altura) {
  return peso / (altura * altura);
}
