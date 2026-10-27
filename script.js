const linkDoBot = "https://landbot.online/v3/H-3536850-SY3Z6PTD01C3W4EG/index.html";

const botao = document.getElementById("botao-chat");

if (linkDoBot.startsWith("https://") &&
    !linkDoBot.includes("COLE_AQUI")) {
  botao.href = linkDoBot;
} else {
  botao.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Nosso atendimento está sendo configurado. Volte em breve!");
  });
}