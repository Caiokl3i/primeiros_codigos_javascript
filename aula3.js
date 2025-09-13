const prompt = require("prompt-sync")({ sigint: true }); // sigint: true allows Ctrl+C to exit

//  somar, subtrair, multiplicar e dividir.

function verificacaoQtde(qtde, operacao) {
    while (true) {
        qtde = parseInt(prompt(`Quantos números deseja ${operacao}? (min 2)`));
        if (qtde > 1) {
            break;
        }
        console.log("\nEscolha no mínimo 2 números !!\n");
    }
    return qtde;
}

function realizaOperacao(qtde, operacao) {
    let result = 0;
    let numeros = []
    for (let i = 0; i < qtde; i++) {
        let valor = parseInt(prompt(`Digite o ${i + 1}° numero?`));
        numeros.push(valor)
    }
    switch (operacao) {
        case "soma":
            result = numeros.reduce(function (a, b) { return a + b })
            break
        case "subtração":
            result = numeros.reduce(function (a, b) { return a - b })
            break
        case "multiplicação":
            result = numeros.reduce(function (a, b) { return a * b })
            break
        case "divisão":
            result = numeros.reduce(function (a, b) { return a / b })
            break
    }
    console.log(`A ${operacao} de todos os números é ${result}`);
    console.log();
}

console.clear();
while (true) {
    console.log(
        "Qual operação deseja fazer? \n1 - Soma \n2 - Subtração \n3 - Multiplicação \n4 - Divisão \n5 - sair"
    );
    let option = parseInt(prompt());

    console.clear();

    let qtdeNum = 0;

    while (true) {
        switch (option) {
            case 1:
                qtdeNum = verificacaoQtde(qtdeNum, (operacao = "somar"));

                realizaOperacao(qtdeNum, operacao = "soma")
                break;
            case 2:
                qtdeNum = verificacaoQtde(qtdeNum, (operacao = "subtrair"));

                realizaOperacao(qtdeNum, operacao = "subtração")
                break;

            case 3:
                qtdeNum = verificacaoQtde(qtdeNum, (operacao = "multiplicar"));

                realizaOperacao(qtdeNum, operacao = "multiplicação")
                break;

            case 4:
                qtdeNum = verificacaoQtde(qtdeNum, (operacao = "dividir"));

                realizaOperacao(qtdeNum, operacao = "divisão")
                break;
            case 5:
                break;
        }
        break;
    }
    if (option == 5) {
        console.log("Encerrando calculadora . . .");
        break;
    }
}
