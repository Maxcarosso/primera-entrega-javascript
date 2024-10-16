const prductos = [
    {nombre:"nike", precio: 35},
    {nombre: "adidas", precio: 30},
    {nombre:"vans", precio: 40}
];
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
while (selecion !="no") {
    let producto = prompt ("agrega un producto a tu carrito")
    let precio = 0
    if (producto == "nike" || productos == "adidas" || productos == "vans")
    {
        switch (productos) {case "nike": precio = 35
            break;
            case "adidas": precio = 30
            break;
            case "vans": precio = 40
            break;
            default:
                break;
                let unidades = parseInt (prompt("cuantas unidades quiere llevar"));
                carrito.push({productos, unidades, precio})
                console.log (carrito)
        }
    }
        else {alert ("no tenemos ese preoducto")}
        seleccion = prompt ("desea otro producto?")
        while (seleccion == "no"){alert ("gracias por su compra")
            carrito.forEach((carritofinal) => {console.log (`producto: $ { carritofinal.productos}, unidades: ${carritofinal.unidades}, total a pagar ${carritofinal.unidades*carritofinal.precio}`)} )
        break;
    }
}
const total = carrito.reduce ((ecc,el) => acc + el.precio* el.unidades, 0)
console.log(`el total a pagar es: $ {total}`)