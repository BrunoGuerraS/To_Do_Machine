import React from "react";

function TodoItem (props) {

    return(
        <li>
            {props.text}
        </li>
    )
}

export {TodoItem}