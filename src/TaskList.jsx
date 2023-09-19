import React from 'react';

export const TaskList = ({ tasks }) => {
    
  return (
    <ul>
        <h1>Lista de tareas</h1>
      {tasks.map(task => (
        <li key={task.id}>
          {task.text}
        </li>
      ))}
    </ul>
  );
};
