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
        notas: 6,
    }
];

function passouDeAno() {
    alunos.some(function(item) {
    if (item.notas >= 6) {
        return console.log(`Parabéns ${item.nome}, você passou de ano! Sua nota: "${item.notas}", no Curso: ${item.cursos}`)
    }     
})
}

passouDeAno()






// ↓ Ideia que tive para fazer retorno do nome, nota e se passou de ano ↓

// const notaValida = function verificaNota(nota) {
//     if (nota >= 6) {
//         return true
//     } else {
//         return false
//     }
// }

// function passouDeAno(aluno, notaValida) {
//     notaValida ? console.log(`Parabéns ${aluno}, passou de ano`) : console.log(`${aluno}, infelizmente você reprovou`);
// }

// function apenasQuemPassou(aluno, notaValida) {
//     if (notaValida >= 6) {
//         return console.log(`Parabéns ${aluno}, passou de ano`)
//     } else {
//         return console.log(`Infelizmente ninguem passou de ano.`)
//     }
// }

// passouDeAno(alunos.nomes)
// apenasQuemPassou(alunos.nomes)