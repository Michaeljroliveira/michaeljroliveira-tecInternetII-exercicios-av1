//exercicio01()MEDIA ENTRE DOIS NUMEROS//
function exercicio01(numero1, numero2) {
    var media = ((numero1 + numero2) / 2);

    console.log("A media dos dois numeros é : " + media + "!");

};




//exercicio02() RECEBER 2 NUMEROS E AVISAR NECESSIDADE DE AV3//

function exercicio02(nota1, nota2) {

    var aprovado = "";
    var reprovado = "";

    media = (nota1 + nota2) / 2;

    if ((nota1 >= 4 && nota2 >= 4) && media >= 6) {

        aprovado = "Não é necessario AV3. Media alcançada = " + media;

    } else {

        reprovado = "necessario AV3. Media não alcançada  = " + media;

    }

    return console.log(aprovado || reprovado);

};

//função para escrever numeros de 1 a 6 //

function exercicio03(pInicio, pFim){

        var numero = pInicio;

        
    
      for (var numero =pInicio; numero <= pFim; numero ++) {
            
            console.log(" O numero é : " + numero);
            
    }

    };                        

 /*Criar função para exibir os números divisíveis por X considerando o intervalo de X a Y*/

function exercicio04(x,y){

 console.log(" Os divisiveis por " + x + " são : ");
    
    for (var intervalo = x; 
             intervalo <= y;
             intervalo ++ ){
        
        if (intervalo % x == 0){
            console.log(intervalo);               
        }
    }    
};   

/*Função para mostrar o maior e menor valor entre os números abaixo*/

/*6542,1235,3215,6251,3215,3225,4583,2151,2356,1325,9965,1230,4458,6352*/

function exercicio05(pValores){

    var maior = Number.MIN_VALUE;
        menor = Number.MAX_VALUE;
    
    for(var i in arguments){
    
       if (arguments[i] > maior) {
            maior = arguments[i];
        }

        if (arguments[i] < menor) {
            menor = arguments[i];
        }
      

   }

    return console.log("Maior: "+maior +"\nMenor: "+menor);
};
