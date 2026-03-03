const form = document.getElementById("formContato");
const mensagem = document.getElementById("mensagemSucesso");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;

    mensagem.innerText = "Obrigado, " + nome + "! Sua mensagem foi enviada com sucesso.";
    form.reset();
});