// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-analytics.js";
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc, getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyDEDWxT6vm5gwF9eJ8QRVNDVInAs35DYA0",
    authDomain: "to-do-test-app-887f8.firebaseapp.com",
    projectId: "to-do-test-app-887f8",
    storageBucket: "to-do-test-app-887f8.appspot.com",
    messagingSenderId: "63382058435",
    appId: "1:63382058435:web:3c95716d9e6b3cf264f976",
    measurementId: "G-VYXQ2GFS7T"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

console.log(db);

let data = [];

const root = document.getElementById('app');

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
        data = dataDb;
    }

    render();
}

async function formHandler(e, input){
    e.preventDefault();
    let text = input.value;
    let dataPush = {
        complited: false,
        todo: text,
        img: `https://via.placeholder.com/160x160/ff00ff/ffffff/?text=${text}`,
    }
    try{
        const docRef = await addDoc(collection(db, 'toDoList'), dataPush);
        console.log(docRef.id)
        data = [...data, {
            id: docRef.id,
            data: dataPush,
        }];
        input.value = '';
        render();
    }catch (e) {
        console.log(e);
    }
}

async function chengeHandler(id, text, complite, img){
    const updateData  = doc(db, 'toDoList', id);
    await updateDoc(updateData, {
        complited: !complite,
        todo: text,
        img: img,
    });
    data = data.map((doc) => {
        if (doc.id === id){
            doc.data.complited = !complite;
        }
        return doc;
    })
    render();
}

async function itemDel(id){
    await deleteDoc(doc(db, 'toDoList', id));
    data = data.filter(d => d.id !== id);
    render();
}


function render(){
    root.innerHTML = '';
    let container = document.createElement('div');
    let form = document.createElement('form');
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    form.addEventListener('submit', e => formHandler(e, input));
    form.append(input);
    let ul = document.createElement('ul');
    data.forEach(d => {
        let li = document.createElement('li');
        let img = document.createElement('img');
        img.setAttribute('src', d.data.img);
        img.setAttribute('alt', '#');
        let check = document.createElement('input');
        check.setAttribute('type', 'checkbox');
        check.checked = d.data.complited;
        check.addEventListener('change', () => chengeHandler(d.id, d.data.todo, d.data.complited, d.data.img));
        let span = document.createElement('span');
        span.innerText = d.data.todo;
        let btn = document.createElement('button');
        btn.innerText = 'Del';
        btn.addEventListener('click', () => itemDel(d.id));
        li.append(img, check, span, btn);
        ul.append(li);
    });
    container.append(form, ul);
    root.append(container);
}

getData();
