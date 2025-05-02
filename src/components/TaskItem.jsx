import React from 'react';

const TaskItem = ({ tarea, onToggle, onDelete }) => {
  return (
    <li>
      <span onClick={onToggle}>
        {tarea.completa ? '[✔] ' : '[ ] '} {tarea.texto}
      </span>
      <button onClick={onDelete}>X</button>
    </li>
  );
};

export default TaskItem;