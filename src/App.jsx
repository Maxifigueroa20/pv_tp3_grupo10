import { useState } from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (texto) => {
    if (texto !== '') {
      const nueva = { texto: texto, completa: false };
      setTareas([...tareas, nueva]);
    }
  }

  const marcarTarea = (indice) => {
    const copia = [...tareas];
    copia[indice].completa = !copia[indice].completa;
    setTareas(copia);
  }

  const borrarTarea = (indice) => {
    const copia = [...tareas];
    copia.splice(indice, 1);
    setTareas(copia);
  }

  return (
    <>
      
    </>
  )
}

export default App
