export const calcularIVA = (productos) =>
    productos.map(p => ({
      descripcion: p.descripcion,
      precio: +(p.precio * 1.21).toFixed(2)
    }));