// // 2. Crie uma função maiorNumero() que receba N parâmetros, e retorne o
// // menor número entre eles, utilizando a função Math.min(). Uma
// // observação importante é que a função Math.min() NÃO deve receber um
// // array como parâmetro, sendo portanto, necessário expandir os valores.

function maiorNumero(...params){
    console.log(Math.min(...params));    
}

maiorNumero(21, 35, 17, 49, 43, 69, 71, 15)

