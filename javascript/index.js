/*envio de informacion ,en este caso ,un saludo*/
alert("hola mundo")

/*variables*/
let nombres ="alicia"
let apellido="davis"

console.log(nombre ' + ' apellido)
/*funciones de comentarios sobre numeros primos*/

function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
  
      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }
  
      alert( i ); // un número primo
    }
  }

/*funciones de devolviendo un valor*/
function checkage(age){
    if (age>18){

    }else{
        return confirm('¿tiene permiso de conducir?',18);
     }
}


let age=prompt('¿que edad ella tiene?',18);

if( checkage(age)) {

    alert('acceso otorgado') ;

}else{
    alert('acceso denegado');

}
/*condicional if ,else*/
let edad=18

if (edad>=18){
console.log("el numero es mayor o igual a 18")
}
else{
console.log("el numero es menor o igual a 18")
}


/*bucles while*/
const ropa = {"vestido" ,"cartera","zapatos","lentes de sol"};
let i = 0;
let text =""

while (ropa{i}){
    text += ropa{i};
    i++;
}

/*bucles do while*/
let i=0

do{
    if(i===nombres.length-1){
        info+='and'+nombres{i}+'.';
   }else{
    info+=nombres{i}+'.';
i++;
}while (i<nombres.length);




/*datos json del navegador al cliente ,ejemplo*/

const jsondata = {
    nombre:{
        alicia
    }
    
    apellido{
        davies
    }
    
    mail{
        aliciadavies@gmail.com
    }
    
    nacionalidad{
       americana
    }
    
    localidad{
        nueva york
    }
    
    direccion{
         5th ave
    }
    
}
const jsonString = json.stringify(jsonData)
const jsonDisplay = Document.querySelector("#json")
jsondisplay.innerHTML = jsonString

