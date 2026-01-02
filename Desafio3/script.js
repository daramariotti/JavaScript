let verificar = document.querySelector("#verificar");
verificar.addEventListener("click", calcular);

function calcular() {
  let fano = document.querySelector("#ano");
  let ano = Number(fano.value);
  let res = document.querySelector(".res");

  let data = new Date();
  let anoatual = data.getFullYear();

  let sexo = document.getElementsByName("sexo");

  if (
    fano.value.length == 0 ||
    ano > anoatual ||
    (!sexo[0].checked && !sexo[1].checked)
  ) {
    window.alert("[ERRO] Verifique os dados e tente novamente");
  } else {
    let idade = anoatual - ano;
    let genero = " ";

    let img = document.createElement("img");

    if (sexo[0].checked) {
      genero = "mulher";
      if (idade >= 0 && idade < 5) {
        img.src = "./imagens/bb-m.png";
      } else if (idade < 10) {
        img.src = "./imagens/crianca-m.png";
      } else if (idade < 18) {
        img.src = "./imagens/adolescente-m.png";
      } else if (idade < 40) {
        img.src = "./imagens/adulto-m.png";
      } else if (idade < 60) {
        img.src = "./imagens/adultomaduro-m.png";
      } else {
        img.src = "./imagens/idoso-m.png";
      }
    } else if (sexo[1].checked) {
      genero = "homem";
      if (idade >= 0 && idade < 5) {
        img.src = "./imagens/bb-h.png";
      } else if (idade < 10) {
        img.src = "./imagens/crianca-h.png";
      } else if (idade < 18) {
        img.src = "./imagens/adolescente-h.png";
      } else if (idade < 40) {
        img.src = "./imagens/adulto-h.png";
      } else if (idade < 60) {
        img.src = "./imagens/adultomaduro-h.png";
      } else {
        img.src = "./imagens/idoso-h.png";
      }
    }
    res.style.display = "flex";
    res.style.flexDirection = "column";
    res.style.alignItems = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    img.style.borderRadius = "50%";
    res.appendChild(img);
  }
}
