import React from 'react';
import TaskItem from './TaskItem';
const TaskList = ({ tareas, onToggle, onDelete }) => {
  return (
    <ul>
        {tareas.map((tarea, i) => (
        <TaskItem
          key={i}
          tarea={tarea}
          onToggle={() => onToggle(i)}
          onDelete={() => onDelete(i)}
        />
      ))}
    </ul>
  );
};
