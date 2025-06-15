const cepInput = document.getElementById("cep");
const logradouroInput = document.getElementById("logradouro");
const bairroInput = document.getElementById("bairro");
const localidadeInput = document.getElementById("localidade");
const ufInput = document.getElementById("uf");
const dialog = document.getElementById("erro-dialog");
const fecharDialogBtn = document.getElementById("fechar-dialog");

async function buscarCep(cep) {
    try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!resposta.ok) {
            throw Error("Erro na requisição");
        }
        const dados = await resposta.json();
        console.log(dados);
        if (dados.erro) {
            abrirDialog()
            throw Error("CEP não encontrado");
        }
        preencherFormulario(dados);
    } catch (erro) {
        console.log(erro);
    }
}

function preencherFormulario(dados) {
    logradouroInput.value = dados.logradouro;
    bairroInput.value = dados.bairro;
    localidadeInput.value = dados.localidade;
    ufInput.value = dados.uf;
}

function abrirDialog() {
    dialog.style.display = "block";
}

cepInput.addEventListener("input", () => {
    const cep = cepInput.value.replace(/\D/g, "");

    
    if (cep.length === 8) {
        console.log(cep);
        buscarCep(cep);
    } else {
        logradouroInput.value = "";
        bairroInput.value = "";
        localidadeInput.value = "";
        ufInput.value = "";
    }
})

fecharDialogBtn.addEventListener("click", () => {
        dialog.style.display = "none";
        console.log("fechou");
    })