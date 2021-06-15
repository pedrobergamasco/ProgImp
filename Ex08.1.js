
/* 1) Crie uma função podeSubir() que receba dois parâmetros: - altura da pessoa; - se está acompanhada.
    Deve retornar um valor booleano(TRUE, FALSE) que indique se a pessoa pode subir ou não, baseado nas seguintes condições:
    a) A pessoa deve medir mais de 1.40m e menos de 2 metros.
    b) Se a pessoa medir menos de 1.40m, deverá ir acompanhada.
    c) Se a pessoa medir menos de 1.20m, não poderá subir, nem acompanhada. */


function podeSubir(altura, companhia) 
{  
    if (altura>=1.40 && altura<2.0) {return true} 
    else if (altura>1.20 && altura<1.40 && companhia=="Sim") {return true} 
    else {return false}
}
    console.log(podeSubir(1.39,"Não"))

   