// ejercicio 1
// declaracion de objetos

const usuario = 
{
    nombre: "Tatiana",
    apellido: "Gomez",
    edad: 22,
    // si deseao agregar mas informacion que refiere a carateristicas o multiples elementos puede incorporar de esta forma
    direccion: 
    {
        ciudad: "Medellin",
        calle: "via santa elena"
    }

}
console.log(usuario);

// EJERCICIO 2
// PROPIEDADES

const automovil =
{
    Modelo: "ferrari",
    Año: 1950,
    Color: "rojo",
    Propietario:"Tatiana",
}
console.log(automovil);


//ejercicio 3
// metodo

const camioneta =
{
    Modelo: "ferrari",
    Año: 1985,
    Color: "verde",
    Propietario:"Tatiana",
    showFullName: function()
    {
        
        return this.Modelo + " " + this.Color
    }
}
console.log(camioneta.showFullName());

// ejercicio 4

const cuenta =
{
    numero: "349536548456",
    monto: 150,
    deposito ()
    {
        this.monto = this.monto + 200
    },
}
cuenta.deposito()
console.log(cuenta) 

 // ejericio 5
 
 function Persona ()
 {
    this.Nombre =" "
    this.Apellido = ""
    this.Edad = 0
    this.showFullName = function()
    {
        return this.Nombre + " " + this.Apellido
    }
 }

 const user1 = new Persona()
 
    user1.Nombre= "lia"
    user1.Apellido = "yen"
    user1.Edad = 25
    console.log(user1.showFullName())

    //ejercicio 6

    const person = 
    {
        Name: "issa",
        Lastname: "geth",
        Age: 45,
        showName()
        {
            return this.Name
        }
    }
    console.log(Object.values(person))
 
    // ejercicio 7

    function Paleta ()
    {
        this.sabor = " "
        this.precio = 0
    }
    const paleta = new Paleta()
    console.log(paleta)
 
    function Paletas ()
    {
        this.sabor = "limon "
        this.precio = 1000
    }
    const paletas = new Paletas()
    console.log(paletas)

    //ejercicio 8

    function fruta (tipo, color)
    {
        this.tipo = tipo
        this.color = color
        this.displayName = function ()
        {
            return this.tipo + " " + this.color
        }
    }
    const manzana = new fruta("pera","verde")
    console.log(manzana.displayName())
    
    fruta.prototype.greet = function()
        {
            return "me conocen como " + this.tipo + "  y soy " + this.color
        }
        console.log(manzana.greet()) 


        // ejercicio 9
     class nevera {
        constructor(color,litros)
        {
            this.color = color
            this.litros = litros
        }
        greet()
        {
            return this.color + " " + this.litros
        }
     }

     const congelador = new nevera ( "gris", 200)
      console.log(congelador.greet())