window.addEventListener("DOMContentLoaded", carregar);

function carregar() {
  let mensagem = document.querySelector(".msg");
  let foto = document.querySelector(".img img");

  let agora = new Date();
  let hora = agora.getHours();
  let min = agora.getMinutes();

  mensagem.innerHTML = `Agora são ${hora} horas e ${min} minutos`;

  if (hora >= 5 && hora < 12) {
    document.body.style.backgroundColor = "#FFFF99";
    foto.src = "./imagens/amanhecer.jpg";
  } else if (hora >= 12 && hora < 18) {
    document.body.style.backgroundColor = "#FFA500";
    foto.src = "./imagens/meiodia.jpg";
  } else {
    document.body.style.backgroundColor = "#000080";
    foto.src = "./imagens/noite.jpg";
  }
}
