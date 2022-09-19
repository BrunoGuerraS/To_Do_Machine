
import './App.css';
import React from 'react';
import { AppUi } from './AppUi';
import { TodoProvider } from "../TodoContext/index"

// const defaultTodo = [
//   {text: 'Bañar al perro', completed: false},
//   {text: 'Crear miniaturas para el podcast', completed: false},
//   {text: 'conseguir photoshop', completed: false},
//   {text: 'conseguir premier pro', completed: false},
//   {text: 'Terminar el curso de React', completed: false}
// ]



function App() {
  

  return (
    <TodoProvider>
      <AppUi/>

    </TodoProvider>
  );
}

export default App;
