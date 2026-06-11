// Rest Operator

 function convidados(...nomes) {
   console.log("Seja bem vindo");
    console.log(nomes)
 }

 convidados("Lucas","João","Marcos", "Mario Silva");


function  soteador(...numeros) {
   console.log(numeros);

   const numeroGerado = Math.floor(Math.random() * numeros.length );

   console.log("Numero gerado foi:" + numeros[numeroGerado]);
}

soteador(1,4,5,15,25,90,55,34);
