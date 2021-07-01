// Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente 
// e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus 
// respectivos tempos pré-definidos. 

//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. 
// - Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

let tempop=10
let tempom=8
let tempoc=15
let tempof=12
let tempobg=8


var pedido = (prato, b) => {
    switch (prato) {
        case "Pipoca": 
            if (b >= 2*tempop && b <=3*tempop) {console.log("Comida queimou!")}
            else if (b < tempop) {console.log("Tempo insuficiente")}
            else if (b > 3*tempop) {console.log("Kabumm")}
            else {console.log("Prato pronto, bom apetite")}
        break;
        
        case "Macarrão": 
            if (b >= 2*tempom && b <=3*tempom) {console.log("Comida queimou!")}
            else if (b < tempom) {console.log("Tempo insuficiente")}
            else if (b > 3*tempom) {console.log("Kabumm")}
            else {console.log("Prato pronto, bom apetite")}
        break;
        
        case "Carne": 
            if (b >= 2*tempoc && b <=3*tempoc) {console.log("Comida queimou!")}
            else if (b < tempoc) {console.log("Tempo insuficiente")}
            else if (b > 3*tempoc) {console.log("Kabumm")}
            else {console.log("Prato pronto, bom apetite")}
        break;
        
        case "Feijão": 
        if (b >= 2*tempof && b <=3*tempof) {console.log("Comida queimou!")}
        else if (b < tempof) {console.log("Tempo insuficiente")}
        else if (b > 3*tempof) {console.log("Kabumm")}
        else {console.log("Prato pronto, bom apetite")}
        break;

        case "Brigadeiro": 
        if (b >= 2*tempobg && b <=3*tempobg) {console.log("Comida queimou!")}
        else if (b < tempobg) {console.log("Tempo insuficiente")}
        else if (b > 3*tempobg) {console.log("Kabumm")}
        else {console.log("Prato pronto, bom apetite")}
        break;
  
        default: console.log ("Prato Inexistente");
    }
}

pedido("Pipoca", 8);
pedido("Macarrão", 18);
pedido("Carne", 28);
pedido("Feijão", 38);
pedido("Brigadeiro", 49);
pedido("Arroz", 13);








