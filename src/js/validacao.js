const enviarMensagem = document.getElementById("enviar");

function validarCampoDigitado() {
    var nome = document.getElementById("nome");

    if(nome.value != "") {
        alert("Informou informado");
        
    }
}

enviarMensagem.addEventListener("click", validacao);

function validacao(a) {
    a.preventDefault();

    const campoNome = document.getElementById("nome");
    const campoEmail = document.getElementById("email");
    const campoTelefone = document.getElementById("telefone");
    const campoComentario = document.getElementById("comentario");
    let valido = true;

    if(!campoNome.value){
        const erroNome = document.getElementById("erroNome");
        erroNome.classList.add("visible");
        campoNome.classList.add("invalid");
        erroNome.setAttribute("aria-hidden", false);
        erroNome.setAttribute("aria-invalid", true);

        const erroEmail = document.getElementById("erroEmail");
        erroEmail.classList.add("visible");
        campoEmail.classList.add("invalid");
        erroEmail.setAttribute("aria-hidden", false);
        erroEmail.setAttribute("aria-invalid", true);

        const erroTelefone = document.getElementById("erroTelefone");
        erroTelefone.classList.add("visible");
        campoTelefone.classList.add("invalid");
        erroTelefone.setAttribute("aria-hidden", false);
        erroTelefone.setAttribute("aria-invalid", true);

        const erroComentario = document.getElementById("erroComentario");
        erroComentario.classList.add("visible");
        campoComentario.classList.add("invalid");
        erroComentario.setAttribute("aria-hidden", false);
        erroComentario.setAttribute("aria-invalid", true);
        
    }

    return valido;
}

console.log(validarCampoDigitado)
