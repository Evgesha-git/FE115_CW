import render from "./render.js";

export default function appUI(){
    let container = document.createElement('div');
    container.classList.add('container');

    let title = document.createElement('h1');
    title.innerText = 'Weather 2';

    let findForm = document.createElement('form');
    findForm.classList.add('find_form');

    let text = document.createElement('input');
    text.setAttribute('type', 'text');

    let conteinerRezult = document.createElement('div');
    conteinerRezult.classList.add('container_rezult')

    findForm.append(text);

    container.append(title, findForm, conteinerRezult);

    document.body.append(container);

    findForm.addEventListener('submit', e => {
        render(e, text.value, conteinerRezult);
    })
}