import React, { useContext } from "react";
import "./CreateTodoButton.css"
import { TodoContext } from "../TodoContext/index"

function CreateTodoButton(){
    const {openModal, setOpenModal} = useContext(TodoContext)

    function toggleButton(){
        openModal?setOpenModal(false):setOpenModal(true)
    }

    return(
        <button className="CreateTodoButton"
        onClick={toggleButton}
        >+</button>
    )
}

export { CreateTodoButton }