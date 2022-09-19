import React from "react";
import "./TodoCounter.css"
import {TodoContext} from "../TodoContext/index"

 function TodoCounter(){

    const { totalTodos, completedTodo } = React.useContext(TodoContext)
    
    return(
        <h2 className="TodoCounter">{`Has completado ${totalTodos} de ${completedTodo} TODOS`}</h2> 
    )
 }

 export {TodoCounter}
