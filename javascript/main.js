class Usuario {
    contructor(nombre, edad, nacionalidad)
{   this.nombre = nombre;
    this.edad = edad;
    this.nacionalidad = nacionalidad;

    this.saludar = funciton()
    console.log("hola, soy " + this.nombre)
}
} 
const cliente1 = new Usuario("maxi", 40, "argentina");
const cliente2 = new Usuario("ana", 30, "argentina");
const cliente3 = new Usuario("patri", 60, "argentina");
console.log(cliente1);
cliente1.saludar()

for (const detalles in cliente1){
    console.log(detalles);
}




const IVA = 1.21;

const productos = [
    {nombre:"nike", precio: 35000},
    {nombre: "adidas", precio: 30000},
    {nombre:"vans", precio: 40000},
];
/*console.log(productos);
console.log(productos[1])*/
/*for (let i = 0; i <3; i++){
    console.log[i];
}*/
console.log(productos.length);
for (let i = 0; i < productos.length; i++){
    console.log(productos[i]);
}
productos.push("converse", precio, 50000);
console.log(productos);

let carrito = []

let seleccion= prompt ("hola desea comprar un pruducto? si o no?")
while (seleccion != "si" && seleccion != "no")
{alert ("por favor ingresa si o no")
    seleccion =prompt ("hola desea comprar si o no")
}
if (seleccion == "si")
{alert("estos son los productos disponibles")
    let listadeproductos=productos.map((productos)=>productos.nombre + " " + productos.precio + "$");
    alert (listadeproductos.join(" - "))
} else if (seleccion =="no"){
    alert ("gracias por visitarnos")
}
while (seleccion !="no") {
    let producto = prompt ("agrega un producto a tu carrito")
    let precio = 0   
    
        switch (producto) {
            case "nike": precio = 35000
            break;
            case "adidas": precio = 30000
            break;
            case "vans": precio = 40000
            break;
            case "converse": precio = 50000
            default:
            alert ("no tenemos ese preoducto")  
        }
        if (precio !=0) {
        let unidades = parseInt (prompt("cuantas unidades quiere llevar"));
                carrito.push({productos, unidades, precio})
                console.log (carrito)
            }
        
        seleccion = prompt ("desea otro producto?")
    }
        if (carrito.length > 0){
        alert ("gracias por su compra")
            carrito.forEach((carritofinal) => {
        console.log (`producto: ${carritofinal.productos}, unidades: ${carritofinal.unidades}, total a pagar ${carritofinal.unidades * carritofinal.precio}`)} )
        }
        
    

const total = carritofinal.reduce ((ecc,el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar es: $ {total}`)