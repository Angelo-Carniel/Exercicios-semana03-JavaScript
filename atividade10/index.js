window.alert("Siga as instruções pára exibir os dez primeiros números da P.A");
    let valorInicial = window.prompt("Insira o valor inicial:");
    let valorRazao = window.prompt("Insira o valor da razão:");
    let termo = 10;

    function pa(){
        valor = parseInt(valorInicial);
        razao = parseInt(valorRazao);

        for(var count=1; count<=termo ; count++){
             valor += razao;
             window.alert(`Termo ${count}= ${valor}`);
           }
    }
    window.alert(pa());


// let valorInicial = 1;
// let valorRazao = 3;
// let termo = 10;

// function pa(){
//     for (var count= 1; count <= 10; count++){
//         resultado= console.log(`Termo ${count}: ${valorInicial}`);
//         valorInicial += valorRazao;
//     }
// }
// console.log(pa());