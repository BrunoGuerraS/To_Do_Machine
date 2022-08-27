import logo from './logo.svg';
import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';

const todos = [
  {text: 'Cortar cebollas', completed: false},
  {text: 'Crear miniaturas para el podcast', completed: false},
  {text: 'conseguir photoshop', completed: false},
  {text: 'conseguir premier pro', completed: false}
]

function App() {
  return (
    <React.Fragment>
      
      <TodoCounter />

      <TodoSearch />
        
      <TodoList>
        {todos.map(todo=>(
           <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
