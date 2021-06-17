// Crie uma função acaoCarro(), que receberá uma callback como parâmetro.
// Após isso, crie duas funções: andar() – deve exibir uma mensagem dizendo
// que o carro está andando – e parar() – deve exibir uma mensagem dizendo
// que o carro parou.
// Execute ambas as ações utilizando a função acaoCarro(), passando suas
// ações como callbacks.


const andar=() =>console.log("Carro está andando!");
const parar=() =>console.log("Carro parou!");
const acaoCarro=(algumaFuncao) => algumaFuncao();

acaoCarro(parar);

