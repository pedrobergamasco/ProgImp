// 1. Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.
let pares = [2, 4, 6, 8]
let impares = pares.map(function(num){
    return num+1;
})

console.log("1. Números Ímpares:",impares);


// 2. Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.
let nomes = ["Maria", "Sílvia", "Cristina", "Maria", "Josefa"]

let maria = nomes.filter(function(nome){
    return nome == "Maria"
})

console.log(("2. Foram encontradas ")+maria.length+" ocorrências.", maria);



// 3. Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.
// Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”

const numeros = [1,2,3,4,5,6,7];
console.log("3. String com números formatados:"+numeros.reduce((acumulador, atual)=>acumulador+"-"+atual));


// 4. Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a 
// frase “O animal é NOME_DO_ANIMAL”.

const animais = ["Anta", "Cachorro", "Leão", "Macaco", "Zebra"];

animais.forEach(function(animal){
    console.log("4. O animal é "+animal);
})



