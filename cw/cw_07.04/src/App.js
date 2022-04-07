import {React, useRef, useState} from "react";
import Task from "./Task";

function App(){
    const [task, setTask] = useState([])
    const input = useRef();

    function clickHandler(){
        console.log(input);
        setTask([...task, input.current.value]);
    }

    return (
        <>
            <input ref={input} className={'input-task'} type="text" placeholder={'Enter task'}/>
            <button onClick={clickHandler}>Add</button>
            <ul>
                {task.map((task, i) =>{
                    return <Task key={i.toString()}>{task}</Task>
                })}
            </ul>
          </>
    )
}

export default App;