const botao = document.getElementById("meuBotao");
const mensagem = document.getElementById("mensagem");

// Adiciona um evento de clique
botao.addEventListener("click", () => {
  mensagem.innerText = "Seja bem vindo a minha página.";
});