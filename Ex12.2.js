// 2. Contando números ímpares
// Crie um loop for de 1 a 10, em que exiba no console apenas o valor das
// repetições de números ímpares. Dica: A ideia é que nas repetições ímpares
// de 0 ao 10 (1,3,5,7,9) sejam mostrados os números das repetições no
// console.


let linhaembranco = " "
console.log(linhaembranco)

console.log("PRIMEIRA Solução")
console.log(linhaembranco)

for(let i = 1; i<=10; i=i+1) {

    let valor=i

switch(valor) {
    case 1: console.log ("Número Ímpar: ", i); break;
    case 3: console.log ("Número Ímpar: ", i); break;
    case 5: console.log ("Número Ímpar: ", i); break;
    case 7: console.log ("Número Ímpar: ", i); break;
    case 9: console.log ("Número Ímpar: ", i); break;
    
}






// // SEGUNDA PROPOSTA DE SOLUÇÃO

// console.log("SEGUNDA Solução")
// console.log(linhaembranco)


// for(let a = 1; a<=10;) {
//     valor=a
//     if (valor=1) {console.log("Número Impar: ", valor)} 
//         else if (valor=3) {console.log("Número Impar: ", valor)} 
//         else if (a=5) {console.log("Número Impar: ", a)}
//         // else if (a=7) {console.log("Número Impar: ", a)}
//         // else if (a=9) {console.log("Número Impar: ", a)}
//     else console.log ("erro")
}