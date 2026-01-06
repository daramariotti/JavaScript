let botao = document.querySelector("#botao");
botao.addEventListener("click", adicionar);

function adicionar() {
  let nome = document.querySelector("#nome");
  let sobrenome = document.querySelector("#sobrenome");
  let peso = document.querySelector("#peso");
  let altura = document.querySelector("#altura");
  let usuarios = document.querySelector(".usuarios");

  const novoUsuario = {
    nome: nome.value,
    sobrenome: sobrenome.value,
    peso: peso.value,
    altura: altura.value,
  };
  usuarios.innerHTML += `<p> Seu nome é ${novoUsuario.nome} ${novoUsuario.sobrenome}, seu peso é ${novoUsuario.peso} kg e sua altura é ${novoUsuario.altura}</p>`;
}
