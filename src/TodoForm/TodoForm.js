import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext/index"


function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    // Desestructuramos las funciones que necesitamos para añadir un TODO y cerrar nuestro modal
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
    
    // Creamos una función para actualizar el estado de nuestro nuevo TODO
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    
    // Función para cerrar el modal
    const onCancel = () => {
        setOpenModal(false);
    };
    
    // Función para agregar nuestro nuevo TODO
    const onSubmit = (event) => {
        // prevent default para evitar recargar la página
        event.preventDefault();
        // Utilizamos nuestra función para añadir nuestro TODO
        addTodo(newTodoValue);
        // Cerramos nustro modal
        setOpenModal(false);
        // También estaría bien resetear nuestro formulario
        setNewTodoValue('')
  };

    return (
        <form onSubmit={onSubmit} className="TodoForm">
            <h2>Create your TO DO</h2>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="TO DO"
            ></textarea>
            <div>
                <button
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm }