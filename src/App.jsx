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

  return (
    <>
      
    </>
  )
}

export default App
