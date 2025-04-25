const submit = document.querySelector("#btn");
const form = document.querySelector(".formCadastro");
const checkbox = document.querySelector("#chkAceito");
const contador = document.querySelector("#contador");
const txtDescricao = document.querySelector("#txtDescricao");
const txtTitulo = document.querySelector("#txtTitulo");
const feedbackMessage = document.querySelector("#feedbackMessage");

submit.disabled = true;
contador.style.display = "flex";
mostrarNumero(0)


function mostrarNumero(n) {
    contador.innerHTML = `${txtDescricao.maxLength - n} caracteres`;
}

checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
        submit.disabled = false;
    } else {
        submit.disabled = true;
    }
});

submit.addEventListener("click", function (e) {
    if (txtTitulo.value == "") {
        e.preventDefault();
        feedbackMessage.querySelector("button").focus()
        feedbackMessage.querySelector("p").textContent = "Por favor, preencha o campo Título";
        feedbackMessage.classList.add("show");
    }
});

txtDescricao.addEventListener("input", function () {
    let caracteres = this.value.length;
    mostrarNumero(caracteres);
});

feedbackMessage.querySelector("button").addEventListener("click", function () {
    feedbackMessage.classList.remove("show");
    txtTitulo.focus();
});

feedbackMessage.querySelector("button").addEventListener("keyup", function(e){
    if (e.keyCode === 27) {
        feedbackMessage.classList.remove("show");

    }
})