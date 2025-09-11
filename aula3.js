const prompt = require("prompt-sync")({ sigint: true }); // sigint: true allows Ctrl+C to exit

//  somar, subtrair, multiplicar e dividir.

console.clear()
while (true) {
    console.log('Qual operação deseja fazer? \n1 - Soma \n2 - Subtração \n3 - Multiplicação \n4 - Divisão \n5 - sair')
    let option = parseInt(prompt())
    
    console.clear()

    let qtdeNum = 0

    while (true) {
        switch (option) {
            case 1:
                while (true) {
                    qtdeNum = parseInt(prompt("Quantos números deseja somar? (min 2)"))
                    if (qtdeNum > 1) {
                        break
                    }
                    console.log("\nEscolha no mínimo 2 números !!\n")
                }

                let soma = 0
                for (let i = 0; i < qtdeNum; i++) {
                    let valor = parseInt(prompt(`Digite o ${i + 1}° numero?`))
                    if (soma == 0) {
                        soma = valor
                    } else {
                        soma += valor
                    }
                }
                console.log(`A soma de todos os números é ${soma}`)
                console.log()
                break

            case 2:
                while (true) {
                    qtdeNum = parseInt(prompt("Quantos números deseja subtrair? (min 2)"))
                    if (qtdeNum > 1) {
                        break
                    }
                    console.log("\nEscolha no mínimo 2 números !!\n")
                }

                let subtracao = 0
                for (let i = 0; i < qtdeNum; i++) {
                    let valor = parseInt(prompt(`Digite o ${i + 1}° numero?`))
                    if (subtracao == 0) {
                        subtracao += valor
                    } else {
                        subtracao -= valor
                    }
                }
                console.log(`A subtração de todos os números é ${subtracao}`)
                console.log()
                break;

            case 3:
                while (true) {
                    qtdeNum = parseInt(prompt("Quantos números deseja multiplicar? (min 2)"))
                    if (qtdeNum > 1) {
                        break
                    }
                    console.log("\nEscolha no mínimo 2 números !!\n")
                }
                let multiplicacao = 0
                for (let i = 0; i < qtdeNum; i++) {
                    let valor = parseInt(prompt(`Digite o ${i + 1}° numero?`))
                    if (multiplicacao == 0) {
                        multiplicacao = valor
                    } else {
                        multiplicacao *= valor
                    }
                }
                console.log(`A multiplicação de todos os números é ${multiplicacao}`) 
                console.log()
                break;

            case 4:
                while (true) {
                    qtdeNum = parseInt(prompt("Quantos números deseja dividir? (min 2)"))
                    if (qtdeNum > 1) {
                        break
                    }
                    console.log("\nEscolha no mínimo 2 números !!\n")
                }
                let divisao = 0
                for (let i = 0; i < qtdeNum; i++) {
                    let valor = parseInt(prompt(`Digite o ${i + 1}° numero?`))
                    if (divisao == 0) {
                        divisao = valor
                    } else {
                        divisao /= valor
                    }
                }
                console.log(`A divisão de todos os números é ${divisao}`)
                console.log()
                break;
            case 5:
                break
        }
        break
    }
    if (option == 5) {
        console.log('Encerrando calculadora . . .')
        break
    }
}