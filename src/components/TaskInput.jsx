import React, { useState } from 'react';

const TaskInput = () => {
    const [texto, setTexto] = useState('');

    return <div>TaskInput</div>;

    return (
        <div>
          <input
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Escribí una tarea"
          />
        </div>
    );

};
  
export default TaskInput;
