// Faça um algoritmo que receba um número inteiro e imprima na tela o seu antecessor e o seu sucessor.

function antecSucess(num) {
    let antecessor, sucessor

    antecessor = num - 1
    sucessor = num + 1

    return [antecessor, sucessor]
}
