let total;
function podeSubir(altura, companhia)
{
    if(altura>=140 && altura<200) {
        acesso = "Autorizado";
    }   else if (altura>120 && altura<140 && companhia=="Sim") {
        acesso = "Autorizado somente com acompanhante";
    }   else if (120>=altura<140 && companhia=="Não") {
        acesso = "Acesso negado. Autorizado somente com acompanhante";
    }   else if (altura < 120)
        {acesso = "Não Autorizado";}
} 

total=podeSubir(135,"Não");
console.log(acesso)