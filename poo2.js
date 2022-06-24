
// declaracion de objetos

const frutas =
{
    color:"rojo",
    tipo: "fresa",
    precio: 1400,
}
console.log(frutas)

// metodo

const nevera =
  {
    color: "gris",
    litros: 800,
    precio: 3200,
    showFullName: function()
      {
        return nevera
      }
  }
console.log(nevera.showFullName())

// this

const venta_tv =
  {
    pulgadas: 55,
    marca: "samsung",
    precio: 1500,
  
cambio()
{
this.precio = this.precio - 200
 }
}

console.log(venta_tv)
venta_tv.cambio()
console.log(venta_tv)

// constructor

function Bolso()
  {
   this.color = ""
    this.cierres=0
    this.ancho=0
    this.showFullName = function()
      {
        return this.color + "" + this.ancho
      }
  }
 const bolso1 = new Bolso()
bolso1.color = "negro "
bolso1.cierres = 4
bolso1.ancho = 35

console.log(bolso1.showFullName())

// object

const closet =
  {
    puertas: 4,
    color: "cafe",
    cajones: 6,
    showName()
      {
        return this.color
      }
  }
console.log(Object.values(closet))

// prototipo

function Puerta (color,altura,ancho)
  {
    this.color = color
    this.altura = altura
    this.ancho = ancho
    this.displayName = function()
    {
      return  this.color + " " + this.altura + " " + this.ancho
    }
  }
const puerta2 = new Puerta("beige",1.22,6)
console.log(puerta2.displayName())

Puerta.prototype.descripcion = function()
{
  return "puerta de color "+ this.color + " con una altura de " + this.altura + " y un ancho de " + this.ancho
}
console.log(puerta2.descripcion())

// clase 

class Persona 
  {
    constructor(nombre,apellido)
    {
      this.nombre = nombre
      this.apellido = apellido
    }
    saludar ()
    {
      return "Hola soy " + this.nombre + " " +this.apellido
    }
  }
const persona1 = new Persona("melissa","torres")
 console.log(persona1.saludar())