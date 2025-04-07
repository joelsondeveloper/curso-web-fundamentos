const txtEmail = document.querySelector("#txtEmail");
const msgFeedback = document.querySelector("#newsletterFeedback");


function cadastrarEmail() {
    let email = txtEmail.value;
    console.log("Cadastrando email: ");
    msgFeedback.innerHTML = `o email ${email} foi cadastrado com sucesso!`;
}

function editarEmail() {
    txtEmail.disabled = false;
    txtEmail.focus();
}

function disableEmail() {
    txtEmail.disabled = true;

}