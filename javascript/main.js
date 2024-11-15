const productos=[
    { 
        id: "Adidas-1",
        titulo:"Adidas-1",
        imagen: "./imagenes/adidas/adidas.jpg",
        categoria:{
            nombre: "Adidas",
            id:"Zapatillas"
        },
        precio: 45000
    },
    { 
        id: "Adidas-2",
        titulo:"Adidas-2",
        imagen: "./imagenes/adidas/campus-rosa.jpg",
        categoria:{
            nombre: "Adidas",
            id:"Zapatillas"
        },
        precio: 45000
    },
    { 
        id: "Adidas-3",
        titulo:"Adidas-3",
        imagen: "./imagenes/adidas/campus-verde.jpg",
        categoria:{
            nombre: "Adidas",
            id:"Zapatillas"
        },
        precio: 45000
    },
    { 
        id: "converse-1",
        titulo:"Converse-1",
        imagen: "./imagenes/adidas/converseblancas01.jpg",
        categoria:{
            nombre: "Converse",
            id:"zapatillas"
        },
        precio: 50000
    },
    { 
        id: "Converse-2",
        titulo:"Converse-2",
        imagen: "./imagenes/adidas/converseblancas02.jpg",
        categoria:{
            nombre: "Converse",
            id:"Zapatillas"
        },
        precio: 50000
    },
    { 
        id: "nike-1",
        titulo:"Nike-1",
        imagen: "./imagenes/adidas/mikeairmax02.jpg",
        categoria:{
            nombre: "Nike",
            id:"Zapatillas"
        },
        precio: 45000
    },
    { 
        id: "Nike-2",
        titulo:"Nike-2",
        imagen: "./imagenes/adidas/nike-blank1.jpg",
        categoria:{
            nombre: "Nike",
            id:"Zapatillas"
        },
        precio: 45000
    },
    { 
        id: "Nike-3",
        titulo:"Nike-3",
        imagen: "./imagenes/adidas/nike-full.jpg",
        categoria:{
            nombre: "Nike",
            id:"Zapatillas"
        },
        precio: 45000
    },
    { 
        id: "Nike-4",
        titulo:"Nike-4",
        imagen: "./imagenes/adidas/nikezoomblancas01.jpg",
        categoria:{
            nombre: "Nike",
            id:"Zapatillas"
        },
        precio: 45000
    },
    { 
        id: "Nike-5",
        titulo:"Nike-5",
        imagen: "./imagenes/adidas/nikezoompink01.jpg",
        categoria:{
            nombre: "Nike",
            id:"Zapatillas"
        },
        precio: 45000
    },
    { 
        id: "Vans-1",
        titulo:"Vans-1",
        imagen: "./imagenes/adidas/botita-vans.jpg",
        categoria:{
            nombre: "Vans",
            id:"Zapatillas"
        },
        precio: 55000
    },
    { 
        id: "Vans-2",
        titulo:"Vans-2",
        imagen: "./imagenes/adidas/vans4.jpg",
        categoria:{
            nombre: "Vans",
            id:"Zapatillas"
        },
        precio: 55000
    },
    { 
        id: "Vans-3",
        titulo:"Vans-3",
        imagen: "./imagenes/adidas/vansknunegras01.jpg",
        categoria:{
            nombre: "Vans",
            id:"Zapatillas"
        },
        precio: 55000
    },
    { 
        id: "Vans-4",
        titulo:"Vans-4",
        imagen: "./imagenes/adidas/vansknunegras02.jpg",
        categoria:{
            nombre: "Vans",
            id:"Zapatillas"
        },
        precio: 55000
    },
    
];


const contenedorProductos = document.querySelector("#contenedor-producto");
const botonesCategorias = document.querySelectorAll(".boton-categorias");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".productos-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(ProductosElegidos){
    contenedorProductos.innerHTML = " ";
    ProductosElegidos.forEach(producto => {
        const div = document.createElement("div")
        div.classList.add ("producto");
        div.innerHTML = `
                        <img class="producto-imagen" src="${productos.imagen}" alt="${producto.titulo}">
                        <div ="producto-detalles"> 
                            <h2 id="titulo-principal" class="producto-titulo">${producto.titulo}</h2>
                            <p class="producto-precio">$${producto.precio}</p>
                            <button class="producto-agregar" id= "${producto.id}>Agregar al Carrito</button>
                            </div>
                            `;

    })
}
contenedorProductos.appen (div);

actualizarBotonesAgregar();

cargarProductos(productos);
botonesCategorias.forEach(boton => {boton.addEventListener("click", (e) => {botonesCategorias.forEach(boton => boton.classList.remove("active"))

    if (e.currentTarget.id !="todos") {
        const productoCategorias = productos.find(productos => productos.categoria.id === e.currentTarget.id)
        tituloPrincipal.innertext = productos.categorias.nombre;
    
    const productosBoton = productos.filter(productos => productosCategorias.id === e.currentTarget.id);

    tituloPrincipal.innertext = productos.categorias
    cargarProductos(productosBoton);
} 
    else {

    tituloPrincipal.innertext = "todos los productos";
    cargarProductos (productos);
}

})});

function actulizarBotonesAgregar()  {
    botonesAgregar = document.querySelectorAll (".productos-agregar");

    botonesAgregar.forEach (boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
    let productosCarrito = [];
    const productosEnCarritoLS = JSON.parse (localStorage.getItem("productos-en-carrito"));

    if (productosEnCarritoLS) {
        productosCarrito = productosEncarritoLS;
        actualizarNumerito();
    }
    else {
        productosCarrito = [];
    };
}
    function agregarAlCarrito (e) {
        const idBoton = e.currentTarget.id;
        const productoAgregado = productos.find (productos => productos.id ===idBoton);

        
        if (productosEnCarritoLS.some(productos => productos.id === idBoton)){
        productosCarrito [index].cantidad++
    }
    else{

        productoAgregado.cantidad = 1;
        productosCarrito.push(productoAgregado);
    }
    };
    function actualizarNumerito(){

        let nuevoNumerito = productosCarrito.reduce ((acc, producto)=> acc + producto.cantidad, 0);

        numerito.innertext = nuevoNumerito;
    };

    actualizarCarrito ();
    console.log(productosCarrito);

    localStorage.setItem("productos-en-carito". JSON.strgify(productosCarrito));




