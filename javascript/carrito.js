const productosCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

console.log(productosCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");

const contenedorCarritoProductos = document.querySelector ("#carrito-producto");

const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");

const contenedorCarritoComprado = document.querySelector("#carrito-comprado");



if (productosCarrito) {
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
            <p>$${producto.precio * producto.cantidad}{</p>
        </div>
        <div class="carrito-producto-subtotal">
            <small>Subtotal</small>
            <p>aqui va el precio tambien</p>
        </div>
        <button class="carrito-producto-eliminar" id=${producto.id}>class="bi bi-trash3"></i></button>`
                    
                    })
}

