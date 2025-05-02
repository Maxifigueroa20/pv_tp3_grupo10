export const mostrarProductos = (productos) => {
      console.log("Listado de productos:");
    productos.forEach(producto => {
      console.log(`Producto: ${producto.descripcion} - Precio: $${producto.precio}`);
    });
 };
