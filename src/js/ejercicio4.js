export const ordenarProductos = (productos) => {
    return productos.sort((a, b) => a.precio - b.precio)
};