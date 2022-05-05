import './App.css';
import db from './db/db';
import { useState, useRef } from "react";
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';


function App() {
    const [data, setData] = useState([]);
    const inputRef = useRef(null);

    async function getData(){
        const queryDoc = await getDocs(collection(db, 'toDoList'));
        // console.log(queryDoc);
        let dataDb = [];
        queryDoc.forEach(doc => {
            // console.log(doc.id, doc.data());
            dataDb.push({
                id: doc.id,
                data: doc.data(),
            });
        });
        if (data.length === 0){
            setData(dataDb);
        }
    }

    async function formHandler(e){
        e.preventDefault();
        let text = inputRef.current.value;
        let dataPush = {
            complited: false,
            todo: text,
            img: `https://via.placeholder.com/160x160/ff00ff/ffffff/?text=${text}`,
        }
        try{
            const docRef = await addDoc(collection(db, 'toDoList'), dataPush);
            console.log(docRef.id)
            setData([...data, {
                id: docRef.id,
                data: dataPush,
            }]);
        }catch (e) {
            console.log(e);
        }
        inputRef.current.value = '';
    }

    async function chengeHandler(id, text, complite, img){
        const updateData  = doc(db, 'toDoList', id);
        await updateDoc(updateData, {
            complited: !complite,
            todo: text,
            img: img,
        })
    }

    async function itemDel(id){
        await deleteDoc(doc(db, 'toDoList', id));
        setData(data.filter(d => d.id !== id));
    }

    getData();

    return (
        <div>
            <h1>ToDo App</h1>
            <form action="" onSubmit={formHandler}>
                <input ref={inputRef} type="text" name="" id=""/>
            </form>
            <ul>
                {data.map(doc => {
                    return (
                        <li key={doc.id.toString()}>
                            <img src={doc.data.img} alt="#"/>
                            <input type="checkbox" defaultChecked={doc.data.complited} onChange={() => chengeHandler(doc.id, doc.data.todo, doc.data.complited, doc.data.img)}/>
                            <span>{doc.data.todo}</span>
                            <button onClick={() => itemDel(doc.id)}>Del</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default App;
