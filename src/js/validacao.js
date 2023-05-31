const formulario = document.getElementById("form");
const campos = document.querySelectorAll(".required");
const mensagemCamposObrigatorios = document.querySelectorAll(".span-required")
const validacaoEmail = /\S+@\S+\.\S+/;
const validacaoTelefone = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/;

function setError(index) {
    campos[index].style.border = '2px solid #F52E2E';
    mensagemCamposObrigatorios[index].style.display = 'block';
}

function setSucess(index) {
    campos[index].style.border = '2px solid #00C22B';
    mensagemCamposObrigatorios[index].style.display = 'none';
}

function validarNome() {
    if(campos[0].value.length < 3){
        setError(0);

    }else {
        setSucess(0);
    }       
}

function validarEmail() {
    if(validacaoEmail.test(campos[1].value)){
        setSucess(1);

    }else {
        setError(1)
    }
}

function validarTelefone() {
    if(validacaoTelefone.test(campos[2].value)){
        setSucess(2);
    } else {
        setError(2);
    }
}

function validarMensagem() {
    if(campos[3].value.length < 3) {
        console.log("Não digitou nada");
        setError(3)
    } else {
        setSucess(3);
    }
}