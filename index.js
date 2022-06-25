
/*
const ejercicio = require( "./ejercicio.js")

console.log(ejercicio.suma(5,8));
console.log(ejercicio.resta(5,8));
console.log(ejercicio.multiplicacion(5,8));
console.log(ejercicio.division(5,8));



const os = require("os");

console.log(os.platform());
console.log(os.release());
console.log("free mem", os.freemem() );
console.log("total mem", os.totalmem()); 


const fs = require ("fs");

fs.writeFile("./texto.txt", "linea uno", function(error)
{
  if(error)
  {
    console.log(error);
  }
  console.log("archivo creado");
});
 console.log("ultima linea de archivo");

 fs.readFile("./texto.txt", function (error, dato)
 {
    if (error)
    {
        console.log(error);
    }
    console.log(dato.toString());
 });
 
*/

const http = require("http");

http.createServer(function(req,res)
{
    res.write("<h1> Hola </h1");
    res.end();
}).listen(3000);