const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (event) => {
    event.preventDefault(); // impede o comportamento padrão do formulário (recarregar ou navegar para outra página)

    alert("Mensagem enviada com sucesso!");

    formulario.reset(); // Limpa os campos depois do envio
});