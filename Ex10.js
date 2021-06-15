/* Crie um array que contenha nomes de produtos para compra.
Após isso, exiba no console os resultados das funções relacionadas aos arrays, que são: Join, Pop, Push, Shift e Unshift.
Também se deve escrever com suas palavras, o que cada função realiza. Seguem abaixo alguns exemplos.
console.log(“O método Join realiza tal coisa”)
console.log(RESULTADO_DO_JOIN) */

let linhaembranco = " "
let produtos = ["Notebook","Smartphone","Playstation","Xbox","SmarTV"];

console.log(linhaembranco)
console.log("1. Lista A - Produtos para compra: ", produtos)
console.log(linhaembranco)


console.log("Join: une todos os elementos presentes num array")
console.log("2. Resultado do Join:", produtos.join())
console.log(linhaembranco)


console.log("Pop: exclui o último elemento do array")
console.log("3. Resultado do Pop (elemento excluído):", produtos.pop())
console.log(linhaembranco)

console.log("Push: adiciona informação ao FINAL do array (no caso: Avião Voador).")
produtos.push("Avião Voador")
console.log("4. Lista B - Produtos para compra: ",produtos)
console.log(linhaembranco)

console.log("Shift: exclui informação no INÍCIO do array (no caso: Notebook).")
    produtos.shift();
    console.log("5. Lista C - Produtos para compra: ", produtos)
    console.log(linhaembranco)

console.log("Unshift: adiciona informação no INÍCIO do array (no caso: Carro Novo).")
    produtos.unshift("Carro Novo");
    console.log("6. Lista D - Produtos para compra: ", produtos)
