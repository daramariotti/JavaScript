// 1. Selecionamos os elementos do HTML e guardamos em variáveis para usar depois
const bAdd = document.querySelector("#botaoAdd");
const inputTarefa = document.querySelector("#tarefa");
const list = document.querySelector("#lista");

// 2. Esta função tem apenas UM objetivo: criar um elemento <li> novo e "entregar" ele pronto
function criaLi() {
  // Cria um elemento HTML <li>
  const li = document.createElement("li");
  // Retorna esse <li> para quem chamar a função
  return li;
}

// 3. Permite adicionar tarefas apertando a tecla "Enter"
inputTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    // Se o código da tecla for igual a 13 (que é o Enter)
    if (!inputTarefa.value) return; // Se o campo estiver vazio, sai da função e não faz nada
    criaTarefa(inputTarefa.value); // Se tiver texto, chama a função de criar tarefa
  }
});

// 4. Apaga o que foi digitado e foca o cursor no campo novamente
function limparInput() {
  inputTarefa.value = ""; // Deixa o campo de texto vazio
  inputTarefa.focus(); // Coloca o tracinho de digitar piscando lá dentro
}

// 5. Cria o botão "Apagar" e coloca dentro de cada tarefa
function criaBotaoApagar(li) {
  li.innerText += " "; // Dá um espacinho entre o texto da tarefa e o botão
  const botaoApagar = document.createElement("button"); // Cria um elemento <button>
  botaoApagar.innerText = "Apagar"; // Escreve o texto dentro do botão
  botaoApagar.setAttribute("class", "apagar"); // Adiciona a classe CSS "apagar" ao botão
  botaoApagar.setAttribute("title", "Apagar esta tarefa"); // Adiciona um balãozinho de dica
  li.appendChild(botaoApagar); // Coloca o botão dentro do item da lista (li)
}

// 6. Reúne todas as funções para criar a tarefa completa
function criaTarefa(textoInput) {
  const li = criaLi(); // Pede um <li> novo para a função criaLi
  li.innerText = textoInput; // Coloca o texto da tarefa dentro desse <li>
  list.appendChild(li); // Adiciona o <li> na nossa lista <ul> do HTML
  limparInput(); // Chama a função para limpar o campo de texto
  criaBotaoApagar(li); // Chama a função para colocar o botão de apagar no li
  salvarTarefas(); // Salva a lista atualizada no navegador
}

// 7. Escuta quando você clica no botão "Adicionar"
bAdd.addEventListener("click", function () {
  if (!inputTarefa.value) return; // Se o campo estiver vazio, não faz nada
  criaTarefa(inputTarefa.value); // Se tiver texto, inicia a montagem da tarefa
});

// 8. EVENTO DE CLIQUE (APAGAR): Escuta cliques no documento todo (Técnica de delegação)
document.addEventListener("click", function (e) {
  const el = e.target; // Descobre exatamente qual elemento foi clicado pelo usuário

  // Se o elemento clicado tiver a classe "apagar"
  if (el.classList.contains("apagar")) {
    el.parentElement.remove(); // Remove o "pai" do botão, que é o <li> inteiro
    salvarTarefas(); // Salva a lista novamente (agora sem o item removido)
  }
});

// 9. BANCO DE DADOS (SALVAR): Transforma a lista da tela em um texto para guardar
function salvarTarefas() {
  const liTarefas = list.querySelectorAll("li"); // Pega TODOS os <li> que estão na tela
  const listaDetarefas = []; // Cria um array (lista) vazio para guardar os textos

  // Para cada tarefa (li) que encontramos...
  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText; // Pega o texto que está dentro dela
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim(); // Remove a palavra "Apagar" e os espaços
    listaDetarefas.push(tarefaTexto); // Guarda o nome da tarefa no nosso array
  }

  // Transforma o array em uma string (texto) no formato JSON
  const tarefasJSON = JSON.stringify(listaDetarefas);
  // Guarda esse texto no navegador com o nome "tarefas"
  localStorage.setItem("tarefas", tarefasJSON);
}

// 10. BANCO DE DADOS (RECAPITULAR): Lê o que está salvo e recria na tela ao atualizar
function addTarefasSalvas() {
  const tarefas = localStorage.getItem("tarefas"); // Pega o texto salvo na "gaveta" tarefas
  if (!tarefas) return; // Se a gaveta estiver vazia, não faz nada

  // Transforma o texto JSON de volta em um Array (lista de JS)
  const listaDetarefas = JSON.parse(tarefas);

  // Para cada item desse array...
  for (let tarefa of listaDetarefas) {
    criaTarefa(tarefa); // Chama a função de criar tarefa para ele aparecer na tela
  }
}

// 11. INICIALIZAÇÃO: Executa a função de ler as tarefas assim que o site abre
addTarefasSalvas();
