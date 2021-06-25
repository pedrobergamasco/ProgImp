
function Restaurante(nome, cardapio) 
{
    this.nome=nome;
    this.cardapio=cardapio;
    this.entrada=function() 
    {return 'Bem vindo ao '+ this.nome +'! Nosso cardápio oferece '+this.cardapio;};
};

let restaurante=new Restaurante('Aquarius',['Carnes','Frutas','e Legumes']);

console.log(restaurante.entrada())
