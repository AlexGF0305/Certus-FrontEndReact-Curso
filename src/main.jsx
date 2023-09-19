import React from 'react';
import ReactDOM from 'react-dom';
import {ColorChanger} from './ColorChanger'; // Asegúrate de que la ruta sea correcta
import { TaskList } from './TaskList';

const tasks = [
  { id: 1, text: 'Hacer la compra', completed: false },
  { id: 2, text: 'Lavar el auto', completed: true },
  { id: 3, text: 'Estudiar React', completed: false },
];


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorChanger color="red" /> {/* Aquí pasamos "blue" como color */}
    <ColorChanger color="green" /> {/* Aquí pasamos "blue" como color */}
    <ColorChanger color="blue" /> {/* Aquí pasamos "blue" como color */}
    <TaskList tasks={tasks} />
  </React.StrictMode>,
);
