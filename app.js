// ejercicio 1

let num1 = 64;
let num2 = 52

let resultado =  num1 + num2;

console.log("El resultado es: "+  resultado);

// ejercicio 2

let Nombre = "Tatiana";
let Apellido = "Gomez";
let Completo = Nombre  + Apellido;

console.log("Su Nombre completo es: " +  Completo);

// ejercico 3
 let n1 = 256;
 let n2 = 145;
 let result= n1 >n2;

 console.log("El resultado es: "+  result);

 // ejercicio 4 

 let clave = 1234;
 let usuario = "tatianagq"
 let res = clave == usuario;

 console.log("La respuesta es: "+  res);


 // ejercicio 5

 let contraseña = 1234;
 let usuario1 = "tatianagq"
 let resp = clave == usuario;

 if ( resp == true )
 {
    console.log("Bienvenido");
 }
 else 
 {
    console.log("El usuario o la clave son Incorrectos");
 }

 // ejercicio 6

 let puntuacion = 90;

 if (puntuacion < 40)
 {
    console.log("ELIMINADO :No alcanzo la totalidad de puntos");
 }
 else
  if ( puntuacion <=70)
  {
    console.log("FALTA POCO: esfuerzate un poco mas, ya casi lo logras");
  }
  else
  {
    console.log("Felicidades eres un Hack");
  }

  // ejercicio 7

  let tipo_tarjeta = "credito";

  switch(tipo_tarjeta)
  {
    case "debito":
        console,log("esta es una tarjeta debito");
          break;
         case "credito":
          console.log("esta es una tarjeta credito");
            break;
            default:
                console.log("tarjeta invalida");

  }

  //ejercicio 8

let contar = 10;
while ( contar > 0)
{
    console.log(contar);
    contar --
}

//ejercicio 9

let grupo = ["lia", "zoe", "frem"];
 for(let i=0; i<grupo.length; i++)
 {
    console.log(grupo[i]);
 }
 for(let i=grupo.length -1; i>=0; i--)
 {
    console.log(grupo[i]);
 }

 // ejercicio 10

 function visualizar (nombre)
    {
        
        console.log("Bienvenida " + nombre);
    }
 
visualizar("Thaliana");

function suma (a,b)
    {
        
        console.log(a + b);
    }
    suma (10,15)
