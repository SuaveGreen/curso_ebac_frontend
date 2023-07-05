const form = document.getElementById('form-tarefas');
// const imgSalvo = '<img src="./image/aprovado.png" alt="Ícone salvar id="imagem-concluido"/>';
const inputTarefa = document.getElementById('tarefa');
const concluido = '<button type="button" id="button-tarefas" style="text-decoration: line-through;" ></button>';
// const naoConcluida = '<button type="button" id="button-tarefas" ></button>';

const nome = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

// form.addEventListener('button-tarefas', function(e) {
//     e.preventDefault();


// });

function adicionaLinha() {

    if (nome.includes(inputTarefa.value)) {
        alert(`A tarefa "${inputTarefa.value}" já foi salva!`);
    } else {
        nome.push(inputTarefa.value);
    
        let linha = '<tr>';
        linha += `<td colspan="3"><button type="button" id="button-tarefas" onclick="concluirTarefa(this)" >${inputTarefa.value}</button></td>`;
        // linha += `<td>${imgSalvo}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }

    inputTarefa.value = '';

}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

// function tarefaConcluida() {
//     const imagem = document.getElementById("imagem-concluido");
//     const botao = document.getElementById("button-tarefas")

//     botao.style.textDecoration = lineThrough
//     imagem.style.display = "block";

// }

function concluirTarefa(botao) {
    if (botao.classList.contains("button-riscado")) {
        botao.classList.remove("button-riscado");
    } else {
        botao.classList.add("button-riscado");
    }
}