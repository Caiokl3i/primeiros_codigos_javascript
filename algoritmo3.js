// Faça um algoritmo que receba um número inteiro e imprima na tela o seu antecessor e o seu sucessor.

function antecSucess(num) {
    let antecessor, sucessor

    antecessor = num - 1
    sucessor = num + 1

    return [antecessor, sucessor]
}

const prompt = require("prompt-sync")({ sigint: true }); // sigint: true allows Ctrl+C to exit

let num

while (true) {
    num = Number(prompt("Digite um número: "))

    if (Number.isNaN(num)) {
        console.log('Número invalido !!')
    } else {
        break
    }
}

result = antecSucess(num)

console.log(`O antecessor e o sucessor do número ${num} são, respectivamente: ${result.join(" e ")}`)

