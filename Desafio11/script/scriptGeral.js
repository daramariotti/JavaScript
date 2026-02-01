const formulario = document.querySelector("#form");

function valueName(string) {
  for (let index = 0; index < string.length; index++) {
    let char = string[index];

    if (
      !(
        (char >= "A" && char <= "Z") ||
        (char >= "a" && char <= "z") ||
        char === " "
      )
    ) {
      return false;
    }
  }
  return true;
}

function valueCpf(cpf) {
  return cpf.length === 11 && !isNaN(cpf);
}

function valuePhone(phone) {
  return phone.length === 11 && !isNaN(phone);
}

function valueCep(cep) {
  return cep.length === 8 && !isNaN(cep);
}

function valueRuaBairroCidade(stringEnd) {
  for (let index = 0; index < stringEnd.length; index++) {
    let charEnd = stringEnd[index];

    if (
      !(
        (charEnd >= "A" && charEnd <= "Z") ||
        (charEnd >= "a" && charEnd <= "z") ||
        charEnd === " "
      )
    ) {
      return false;
    }
  }
  return true;
}

function valueNum(num) {
  return num >= 1 && !isNaN(num);
}

const dadosSalvosAnt = localStorage.getItem("dadosBrowser");

if (dadosSalvosAnt) {
  const dadosConvertidos = JSON.parse(dadosSalvosAnt);

  document.querySelector("#nome").value = dadosConvertidos.Nome;
  document.querySelector("#cpf").value = dadosConvertidos.CPF;
  document.querySelector("#telefone").value = dadosConvertidos.Telefone;
  document.querySelector("#cep").value = dadosConvertidos.CEP;
  document.querySelector("#rua").value = dadosConvertidos.Rua;
  document.querySelector("#numero").value = dadosConvertidos.Número;
  document.querySelector("#complemento").value = dadosConvertidos.Complemento;
  document.querySelector("#bairro").value = dadosConvertidos.Bairro;
  document.querySelector("#cidade").value = dadosConvertidos.Cidade;
  document.querySelector("#estado").value = dadosConvertidos.Estado;
}

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.querySelector("#nome").value.trim();
  const cpf = document.querySelector("#cpf").value.trim();
  const telefone = document.querySelector("#telefone").value.trim();
  const cep = document.querySelector("#cep").value.trim();
  const rua = document.querySelector("#rua").value.trim();
  const numero = document.querySelector("#numero").value.trim();
  const complemento = document.querySelector("#complemento").value.trim();
  const bairro = document.querySelector("#bairro").value.trim();
  const cidade = document.querySelector("#cidade").value.trim();
  const estado = document.querySelector("#estado").value;

  console.log(estado);

  if (!valueName(nome)) {
    window.alert("O nome deve conter apenas letras e espaços");
    return;
  }

  if (!valueCpf(cpf)) {
    window.alert("O CPF deve conter 11 dígitos númericos");
    return;
  }

  if (!valuePhone(telefone)) {
    window.alert("O telefone deve conter 11 dígitos númericos");
    return;
  }

  if (!valueCep(cep)) {
    window.alert("O CEP deve conter 8 dígitos númericos");
    return;
  }

  if (!valueRuaBairroCidade(rua)) {
    window.alert("A rua deve conter apenas letras e espaços");
    return;
  }

  if (!valueNum(numero)) {
    window.alert("O número deve ser maior que 1 e ser dígitos númericos");
    return;
  }

  if (!valueRuaBairroCidade(bairro)) {
    window.alert("O bairro deve conter apenas letras e espaços");
    return;
  }

  if (!valueRuaBairroCidade(cidade)) {
    window.alert("A cidade deve conter apenas letras e espaços");
    return;
  }

  const dadosForm = new FormData(formulario);

  const dadosSalvos = {
    Nome: nome,
    CPF: cpf,
    Telefone: telefone,
    CEP: cep,
    Rua: rua,
    Número: numero,
    Complemento: complemento,
    Bairro: bairro,
    Cidade: cidade,
    Estado: estado,
  };

  localStorage.setItem("dadosBrowser", JSON.stringify(dadosSalvos));

  window.alert = "Dados salvos";

  formulario.reset();
});
