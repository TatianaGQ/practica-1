/*
function suma(x5,x8)
{
return x5 + x8;
}

function resta(x5,x8)
{
return x5 - x8;
}


function multiplicacion(x5,x8)
{
return x5 * x8;
}

function division(x5,x8)
{
if ( x5 == 0)
{
    console.log("No se puede dividir por 0")
}
else
{
    return x5 / x8;
}
}



exports.suma = suma;
exports.resta =resta;
exports.multiplicacion =multiplicacion;
exports.division = division;

*/


const os = require("os");

console.log(os.platform())