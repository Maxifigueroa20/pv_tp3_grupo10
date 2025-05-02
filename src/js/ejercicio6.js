export const eliminarMasBarato = (productos) => {
    const minPrecio = Math.min(...productos.map(p => p.precio));
    const index = productos.findIndex(p => p.precio === minPrecio);
    if (index !== -1) productos.splice(index, 1);
    return productos;
  };