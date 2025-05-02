import { filtrarProductos } from "./ejercicio2.js";
import { ordenarProductos } from "./ejercicio4.js";
import { agregarProducto } from './ejercicio5.js';
import { eliminarMasBarato } from './ejercicio6.js';
import {mostrarProductos } from "./ejercicio1.js";

const productos = [
    {descripcion: "Teclado", precio: 30000},
    {descripcion: "Mouse", precio: 11000},
    {descripcion: "Monitor", precio: 120000},
    {descripcion: "Mousepad", precio: 7000},
    {descripcion: "Gabinete", precio: 50000},  
]
//ejercicio 1
console.log (mostrarProductos(productos);

// Ejercicio 2
console.log('--- Productos > $20 ---');
console.log(filtrarProductos(productos));

// Ejercicio 4
console.log(ordenarProductos(productos));

//Ejercicio 5
console.log(agregarProducto(productos));

//Ejercicio 6
console.log(eliminarMasBarato(productos));
