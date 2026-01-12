// 1. Selecionar os elementos do HTML
const timer = document.querySelector("#timer");
const btnIniciar = document.querySelector("#iniciar");
const btnPausar = document.querySelector("#pausar");
const btnZerar = document.querySelector("#zerar");

// Variável para armazenar o total de segundos que se passaram
let segundos = 0;

// Variável que servirá de "controle" para o setInterval (para podermos pará-lo depois)
let meuTimer;

/* Função que recebe a quantidade de segundos e transforma em uma string formatada (00:00:00) usando o objeto Date.
 */
function criaHoraDosSegundos(segundos) {
  // Cria uma data do marco zero (1970) e soma os milissegundos (segundos * 1000)
  const data = new Date(segundos * 1000);

  // Retorna a hora formatada para o padrão brasileiro, mas usando UTC (para começar em 00:00:00)
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
}

/* Função que inicia a contagem do cronômetro
 */
function iniciaRelogio() {
  // setInterval executa a função anonima a cada 1000ms (1 segundo)
  meuTimer = setInterval(function () {
    segundos++; // Adiciona 1 aos segundos totais
    timer.innerHTML = criaHoraDosSegundos(segundos); // Atualiza o texto no HTML
  }, 1000);
}

// --- ESCUTADORES DE EVENTOS (CLICK) ---

// Quando clicar no botão Iniciar
iniciar.addEventListener("click", function (event) {
  // Remove a classe de pausa (caso exista) e volta a cor para preto
  timer.style.color = "black";

  // IMPORTANTE: Limpa qualquer timer que já esteja rodando antes de iniciar um novo
  // Isso evita que o cronômetro fique "acelerado" se você clicar várias vezes
  clearInterval(meuTimer);

  // Usa o setTimeout apenas para dar um micro-atraso de "clique" (opcional)
  setTimeout(function () {
    iniciaRelogio();
  }, 100);
});

// Quando clicar no botão Pausar
pausar.addEventListener("click", function (event) {
  // Para o intervalo que estava rodando usando a variável de controle
  clearInterval(meuTimer);

  // Muda a cor do texto para vermelho para dar um feedback visual de pausa
  timer.style.color = "red";
});

// Quando clicar no botão Zerar
zerar.addEventListener("click", function (event) {
  // Para o cronômetro completamente
  clearInterval(meuTimer);

  // Reseta o texto do HTML para o estado inicial
  timer.innerHTML = "00:00:00";

  // Volta a variável de contagem para zero
  segundos = 0;

  // Garante que a cor do texto volte ao normal
  timer.style.color = "black";
});
