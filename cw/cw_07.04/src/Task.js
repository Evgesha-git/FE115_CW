import React from "react";
import './task.css';

function Task(props){
    const {children} = props;
    return (
        <li>
            <input type="checkbox"/>
            <span>{children}</span>
        </li>
    )
}

export default Task