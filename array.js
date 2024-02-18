const alunos = [
    {
        nome: 'Pedro',
        cursos: ['Python'],
        idade: 20,
        notas: 9,
    },
    {
        nome: "André",
        cursos: ["Python"],
        idade: 17,
        notas: 6,
    },
    {
        nome: "Thiago",
        cursos: ["Java"],
        idade: 17,
        notas: 8,
    },
    {
        nome: "José",
        cursos: ["UX/UI"],
        idade: 17,
        notas: 10,
    },
    {
        nome: "Raquel",
        cursos: ["C++"],
        idade: 17,
        notas: 0,
    },
    {
        nome: "Jozias",
        cursos: ["Kotlin"],
        idade: 17,
        notas: 5,
    }
];

function passouDeAno1() {
    alunos.filter(function(item) {
    if (item.notas >= 6) {
        return console.log(`Parabéns ${item.nome}, você passou de ano! Sua nota: "${item.notas}", no Curso: ${item.cursos}`)
    }     
})}

function passouDeAno2() {
    for (let i = 0; i < alunos.length; i++) {
        let item = alunos[i];
        
        if(item.notas >= 6 ) {
            console.log(`Parabéns ${item.nome}, você passou de ano! Sua nota: "${item.notas}", no Curso: ${item.cursos}`)
        }
    }
}

function passouDeAno3() {
    const alunosAprovados = alunos.filter(function (aluno) {
        return aluno.notas >= 6;
    });

    console.log(alunosAprovados);
}
    
passouDeAno1()
passouDeAno2()
passouDeAno3()


//      ↓ Ideia que tive para fazer retorno caso a nota seja >= 6 e se passou de ano ↓      \\


//      ↓ AQUI VERIFICARIA SE A NOTA SERIA VALIDA OU NÃO. SENDO UM VALOR BOOLEAN
//      ↓ A PRINCÍPIO COLOCARIA ISSO DENTRO DE CADA FUNÇÃO, MAS COMO EU ESTARIA
//      ↓ USANDO A MESMA FUNÇÃO EM 2 TRECHO DIFERENTO NO MEU CÓDIGO, RESOLVI SEPARAR.

// const notaValida = function verificaNota(nota) {
//     if (nota >= 6) {
//         return true
//     } else {
//         return false
//     }
// }

//      ↓ TANTO NESTA FUNÇÃO QUANTO NA PRÓXIMA, EU PEGARIA A VARIÁVEL (notaValida) 
//      ↓ E DEPENDENDO DO VALOR RETORNARIA RETORNARIA POSITIVO SENÃO NEGATIVO.
//      ↓ PORÉM, ALÉM DE NÃO CONSEGUIR PEGAR O RESULTADO FA FUNÇÃO, FIQUEI NA DÚVIDA 
//      ↓ SE, ERA CORRETO FAZER UMA CHAMADA DESTA FUNÇÃO DENTRO DAS OUTRAS FUNÇÃO

// function passouDeAno(aluno, notaValida) {
//     notaValida ? console.log(`Parabéns ${aluno}, passou de ano`) : console.log(`${aluno}, infelizmente você reprovou`);
// }

//      ↓ JÁ AQUI, RETORNARIA APENAS QUEM TINHA A NOTA MAIOR QUE 6, MAS EM AMBAS 
//      ↓ AS FUNÇÕES, NÃO CONSEGUI PEGAR O RESULTADO DA VARIÁVEL (notaValida) E USAR.

// function apenasQuemPassou(aluno, notaValida) {
//     if (notaValida >= 6) {
//         return console.log(`Parabéns ${aluno}, passou de ano`)
//     } else {
//         return console.log(`Infelizmente ninguem passou de ano.`)
//     }
// }

//      ↓ ALÉM DE SEMPRE SER NEGATIVO A VARIÁVEL (notaValida), NÃO CONSEGUI 
//      ↓ ACESSAR O VALOR (alunos.nomes) NEM (alunos.notas)

// passouDeAno(alunos.nomes)
// apenasQuemPassou(alunos.nomes)