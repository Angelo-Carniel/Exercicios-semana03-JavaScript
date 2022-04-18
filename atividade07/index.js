let anoNascimento = window.prompt("Em que ano você nasceu?");
let anoAtual = window.prompt("Informe o ano que está");
// let anoNascimento = 2002;
// let anoAtual = 2022;

anoNascimento = parseInt(anoNascimento); 
anoAtual = parseInt(anoAtual);

let idade = anoAtual - anoNascimento;
let idadeSomaUm = idade + 1;

window.alert(`Sua idade é ${idade} ou ${idadeSomaUm}`);
// console.log(`Sua idade é ${idade} ou ${idadeSomaUm}`);



