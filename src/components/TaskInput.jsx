import React, { useState } from 'react';

const TaskInput = ({ onAdd }) => {
    const [texto, setTexto] = useState('');

    const agregar = () => {
      onAdd(texto);
      setTexto('');
    };

    return <div>TaskInput</div>;

    return (
        <div>
          <input
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Escribí una tarea"
          />
          <button onClick={agregar}>Agregar</button>
        </div>
    );

};
  
export default TaskInput;
