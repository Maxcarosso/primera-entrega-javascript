let productosCarrito = localStorage.getItem("productos-en-carrito");
productosCarrito = JSON.parse(productosCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");

const contenedorCarritoProductos = document.querySelector ("#carrito-producto");

const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");

const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll (".carrito-producto-eliminar");

const botonVaciar = document.querySelector("#carrito-accion-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");





function cargarProductosCarrito(){

    if (productosCarrito && productosCarrito.length > 0) {



    contenedorCarritoVacio.classList.add("disabled");
    
    contenedorCarritoProductos.classList.remove("disabled");

    contenedorCarritoAcciones.classList.remove("disabled");

    contenedorCarritoComprado.classList.add("disabled");

    contenedorCarritoProductos.innerHTML = " ";

    productosCarrito.forEach(producto =>{

        const div = documentCreateElement("div");
        div.classList.add("carrito-producto");
        div.innerHTML= `
        <img class="carrito-producto-img" src="${producto.imagen}" alt="${producto.tiutlo}">
        <div class="carrito-producto-titulo">
            <small>Titulo</small>
            <h3>${producto.titulo}</h3>
        </div>
        <div class="carrito-producto-cantidad">
            <small>Cantidad</small>
            <p>${producto.cantidad}</p>
        </div>
        <div class="carrito-producto-precio">
            <small>Precio</small>
            <p>$${producto.precio}{</p>
        </div>
        <div class="carrito-producto-subtotal">
            <small>Subtotal</small>
            <p>$${producto.precio * producto.cantidad}</p>
        </div>
        <button class="carrito-producto-eliminar" id=${producto.id}>class="bi bi-trash3"></i></button>
        `;

        contenedorCarritoProductos.append(div);

                    
    })
}
    else{
        
        contenedorCarritoVacio.classList.remove("disabled");
    
        contenedorCarritoProductos.classList.add("disabled");
    
        contenedorCarritoAcciones.classList.add("disabled");
    
        contenedorCarritoComprado.classList.add("disabled");
    }

    actualizarBotonesEliminar();

}

    cargarProductosCarrito();
    actualizarTotal();
    



    function actualizarBotonesEliminar()  {
        botonesEliminar = document.querySelectorAll (".carrito-productos-eliminar");
    
        botonesEliminar.forEach (boton => {
            boton.addEventListener("click", eliminarDelCarrito);
        });
    }

    function eliminarDelCarrito(e) {
        const idBoton = e.currentTarget.id;
        const index = productosCarrito.findIndex(producto => producto.id === idBoton);

        productosCarrito.splice(index, 1);
        cargarProductosCarrito();

        localStorage.setItem("productos-en-carrito", JSON.stringify(productosCarrito));
    }

    botonVaciar.addEventListener("click", vaciarCarrito);

    function vaciarCarrito(){

        productosCarrito.length = 0;
        localStorage.setItem("productos-en-carrito,", JSON.stringify(productosCarrito));
    }


    function actualizarTotal(){
        const totalCalculado = productosCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
        total.innerText = `$${totalCalculado}`;
    }

    botonComprar.addEventListener("click", comprarCarrito);

    function comprarCarrito(){

        productosCarrito.length = 0;
        localStorage.setItem("productos-en-carrito,", JSON.stringify(productosCarrito));

        contenedorCarritoVacio.classList.add("disabled");
    
        contenedorCarritoProductos.classList.add("disabled");
    
        contenedorCarritoAcciones.classList.add("disabled");
    
        contenedorCarritoComprado.classList.remove("disabled");

        
    }



