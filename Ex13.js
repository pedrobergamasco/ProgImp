// Transforme as seguintes funções em arrow functions:

// function print(mensagem){
//     console.log(mensagem) 
// } 
// print("Olá, bom dia") 

let print=() => "Olá, bom dia";
console.log(print())


// function soma(n1, n2){
//     return n1 + n2
// } 

// console.log(soma(10, 10))

let somar = (n1, n2) => n1+n2;
console.log(somar(2,7))
