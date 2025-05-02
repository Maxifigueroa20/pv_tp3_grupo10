import { ordenarProductos } from "./ejercicio4.js";
import { agregarProducto } from './ejercicio5.js';


const productos = [
    {descripcion: "Teclado", precio: 30000},
    {descripcion: "Mouse", precio: 11000},
    {descripcion: "Monitor", precio: 120000},
    {descripcion: "Mousepad", precio: 7000},
    {descripcion: "Gabinete", precio: 50000},
]

// Ejercicio 4
console.log(ordenarProductos(productos));

//Ejercicio 5
const productosActualizados = agregarProducto(productos);
console.log(productosActualizados);