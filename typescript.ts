// Function para dizer o nome e Olá
function dizOla(nome: string): string {
    if (nome.length <= 0) {
        return 'Digite um nome válido'
    } else {
        return `Olá, ${nome}! Seja bem vindo!`
    }
}

// function de multiplicação
function calculaMultiplicacao(num1: any, num2: any): any {
    if (num1 <= 0 && num2 <= 0) {
        return `Deu ${num1}, escolha numeros maiores que ${num1}`
    } else {
        return num1 * num2;
    }
}

console.log(dizOla('Pedro'))
console.log(dizOla(''))

console.log(calculaMultiplicacao(173950, 25474))
console.log(calculaMultiplicacao(0, 0))
