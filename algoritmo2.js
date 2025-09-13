// Faça um algoritmo que leia dois valores inteiros A e B, se os valores de A e B forem
// iguais, deverá somar os dois valores, caso contrário deverá multiplicar A por B.Ao
// final de qualquer um dos cálculos deve - se atribuir o resultado a uma variável C e imprimir
// seu valor na tela.

function operacaoIguais(a, b) {
    if (a == b) {
        return a + b
    } else {
        return a * b
    }
}

const prompt = require("prompt-sync")({ sigint: true }); // sigint: true allows Ctrl+C to exit

let a, b, c

while (true) {
    a = Number(prompt("Digite o valor de A número: "))

    b = Number(prompt("Digite o valor de B número: "))

    if (Number.isNaN(a) || Number.isNaN(b)) {
        console.log('Número invalido !!')
    } else {
        break
    }
}

c = operacaoIguais(a, b)

console.log(`Valor de C: ${c}`)