// receber um número qualquer e imprimir na tela se o número é par ou ímpar, positivo ou negativo.

function verifNum(num){
    opcoes = ['par', 'impar', 'positivo', 'negativo', 'neutro']
    caracteristicasNum = []

    if (num > 0 ) {
        caracteristicasNum.push(opcoes[2])
    } else if (num == 0){
        caracteristicasNum.push(opcoes[4])
    } else {
        caracteristicasNum.push(opcoes[3])
    }

    if (num % 2 == 0) {
        caracteristicasNum.push(opcoes[0])
    } else {
        caracteristicasNum.push(opcoes[1])
    }

    return caracteristicasNum
}