import React from "react";
import { TodoContext } from "../TodoContext/index"
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoList } from '../TodoList/TodoList';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoForm } from '../TodoForm/TodoForm'
import { Modal } from '../Modal/Modal';


function AppUi() {

    const { 
      error, 
      loading, 
      searchedTodos, 
      completeTodo, 
      deleteTodo,
      openModal,
      setOpenModal
    } = React.useContext(TodoContext)
    
    return( 
        <React.Fragment>
        
        <TodoCounter 
        
        />

        <TodoSearch 
   
        />
     
        <TodoList>
            {error && <p>Desespérate, hubo un error...</p>}
            {loading && <p>Estamos cargando, no desesperes...</p>}
            {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
            
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>


        <CreateTodoButton />
        {openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
      </React.Fragment>
    )
}

export { AppUi }