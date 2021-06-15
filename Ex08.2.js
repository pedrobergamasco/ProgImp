/* 2) Modifique a função podeSubir(), de modo que ela exiba uma mensagem de autorização ou de impedimento no acesso ao brinquedo 
      dependendo se a pessoa se enquadra ou não nas condições do exercício anterior. Por exemplo:
        a) Em caso de autorização, exiba a mensagem: “Acesso autorizado” ou “Acesso autorizado somente com acompanhante”;
        b) Em caso de impedimento, exiba a mensagem: “Acesso negado.” */


        function podeSubir(altura, companhia) 
        {  
            if (altura>=1.40 && altura<2.0) {return "Acesso autorizado"} 
            else if (altura>1.2 && altura<1.4 && companhia=="Sim") {return "Acesso autorizado somente com acompanhante"} 
             else {return "Acesso negado"}
        }
            console.log(podeSubir(1.49,"Sim"))
        
