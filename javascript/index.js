/*envio de informacion ,en este caso ,un saludo*/
alert("hola mundo")

/*variables*/
let nombres ="alicia"
let apellido="davis"

console.log("alicia")

/*condicional if ,else*/
let edad=18

if (edad>=18){
console.log("el numero es mayor o igual a 18")
}
else{
console.log("el numero es menor o igual a 18")
}


/*bucles while*/
let i=0

while (i<nombres.length){
    if(i===nombres.length-1){
        info+='and' + nombres{1} + '.';
        }else{
            info+=nombres{1+'.';
        }
        i++;
    }
}

/*bucles do while*/
let i=0

do{
    if(i===nombres.length-1){
        info+='and'+nombres{i}+'.';
   }else{
    info+=nombres{i+'.';
i++;
}while (i<nombres.length);


const output =document.querySelector('#output');
function handleclick(e){
    output.textcontent += you clicked on a $(e.currenttarget.tagname)

}

const container =document.querySelector('#container');
const button =document.querySelector('button');

document.body.addEventListener('click' m handleclick , {capture:true});
container.addEventListener('click,handleclick'{capture:true});
button.addEventListener('click',handleclick);
