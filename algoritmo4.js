// Faça um algoritmo que leia o valor do salário mínimo e o valor do salário de um usuário,
//  calcule quantos salários mínimos esse usuário ganha e imprima na tela o resultado.
//  (Base para o Salário mínimo R$ 1.500,00).

function calculaSalario(salario) {
    let qtdeSalarios = salario / 1500

    return qtdeSalarios
}

const prompt = require("prompt-sync")({ sigint: true }); // sigint: true allows Ctrl+C to exit

let salario

while (true) {
    salario = Number(prompt('Digite o valor do seu salário: '))

    if (Number.isNaN(salario)) {
        console.log("Número inválido !!")
    } else {
        break
    }
}

qtdeSalarios = calculaSalario(salario)

if (qtdeSalarios < 1) {
    console.log(`Você ganha menos de um salario minimo. Equivale a ${qtdeSalarios.toFixed(2)}`)
} else if (qtdeSalarios == 1){
    console.log(`Você ganha exatamente ${qtdeSalarios.toFixed(0)} salário mínimo`)
} else {
    console.log(`Seu salário equivale a ${qtdeSalarios.toFixed(2)} salários mínimos`)
}