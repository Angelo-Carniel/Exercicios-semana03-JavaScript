window.alert("Bem vindo à calculadora");

let entrada;
let numeroUm = window.prompt("Insira o primeiro número");
let numeroDois = window.prompt("Insira o segundo número");
let aritimeticos = window.prompt("Qual operação iremos fazer? escolha entre: (“+”, “-”, “*” ou “/”).");
    
    if (aritimeticos === "+") {
            numeroUmCond = parseInt(numeroUm)
            numeroDoisCond = parseInt(numeroDois)
            let soma = numeroUmCond + numeroDoisCond;
            window.alert(`O resultado é: ${soma}`);
        } else if (aritimeticos === "-") {
            let soma = numeroUm - numeroDois;
            window.alert(`O resultado é: ${soma}`);
        } else if (aritimeticos === "*") {
            let soma = numeroUm * numeroDois;
            window.alert(`O resultado é: ${soma}`);
        } else {
            let soma = numeroUm / numeroDois;
            window.alert(`O resultado é: ${soma}`);
        }

    

