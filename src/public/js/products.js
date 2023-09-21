const obtenerIdCarrito = () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

const agregarProductoAlCarrito = async (pid) => {
    try {
        let cart = obtenerIdCarrito();
        
        console.log(pid, "console log de product id");

        await fetch("/api/carts/" + cart.id + "/products/" + pid, {
            method: "POST",
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json())
        .then(data => {
            console.log("Se agregó al Carrito!");
        });
    } catch(error) {
        console.log("Error en agregar el Producto al Carrito! " + error);
        
    }
}