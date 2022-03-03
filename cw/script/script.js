/*
* Note - одна заметка
* Notes - все заметки
* NoteUI - интерфейс
* */

class Note{
    constructor(data) {
        if(data.content && data.content.length > 0 ) this.data = data;
    }

    edit(data) {
        Object.assign(this.data, data)
    }
}

class Notes{
    static message = 'Некоторое сообщение';
    constructor() {
        // this.noteId = 0;
        this.notes = [];
    }

    add(data){
        if(data.content && data.content.length > 0) {
            // this.noteId++
            // let noteId = Math.floor(Math.random() * 100);
            let noteId = this.getId();


            let note = new Note(data);
            note.edit({id: noteId});
            this.notes.push(note);
            console.log(this.notes);
        }
    }

    getId(){
        let noteId = Math.floor(Math.random() * 100);
        if(this.notes) return noteId;
        if (this.notes.some(data => data.id === noteId)){
            this.getId()
        }else{
            return noteId
        }
    }

    edit(id, data){
        let noteFind = this.notes.find(note => {
            return note.data.id === id ? note: null;
        })
        console.log(noteFind)
        noteFind.edit(data);
    }

    remove(id){
        this.notes = this.notes.filter(note => note.data.id !== id ? note : null);
    }

    getNotes(){
        return this.notes;
    }
}

class NoteUi extends Notes{
    constructor() {
        super();
        this.init();
    }

    init(){
        let formNote = document.createElement('form');
        formNote.setAttribute('class', 'note_form');

        let noteTitle = document.createElement('h1');
        noteTitle.setAttribute('class', 'note_title');
        noteTitle.innerText = 'My notes'

        let textNoteTitle = document.createElement('input');
        textNoteTitle.setAttribute('type', 'text');
        textNoteTitle.setAttribute('name', 'title');
        textNoteTitle.setAttribute('class', 'note_text_title');
        textNoteTitle.setAttribute('placeholder', 'Title');


        let textNoteContent = document.createElement('textarea');
        textNoteContent.setAttribute('name', 'content');
        textNoteContent.setAttribute('class', 'note_text_content');
        textNoteContent.setAttribute('placeholder', 'Content');

        let formButton = document.createElement('button');
        formButton.setAttribute('type', 'submit');
        formButton.setAttribute('class', 'note_button_submit');
        formButton.innerText = 'Save note';

        formNote.append(noteTitle, textNoteTitle, textNoteContent, formButton);

        let notesList = document.createElement('ul');
        notesList.setAttribute('class', 'note_list');
        this.notesList = notesList;

        document.body.append(formNote, notesList);

        this.textInputs = [textNoteTitle, textNoteContent];

        formNote.addEventListener('submit', (e) => {
            this.addNote(e)
        })

        let cookie = this.getCookie('notesExp')

        if (!cookie){
            this.storage = [];
        }

        let dataStorage = this.storage;

        if (dataStorage){
            dataStorage.forEach(elem => this.add(elem.data))
        }

        this.createNote();
    }

    addNote(e){
        e.preventDefault();
        // let regExp = [/[0-9a-z]@[a-z].[a-z]{2,6}/g, /[0-9A-Za-z]/g]
        // let regTrue = this.textInputs.every((elem, i) => this.reg(elem, regExp[i]))
        //
        // if(!regTrue) return;

        let data = this.textInputs.reduce((obj, elem) => ({...obj, [elem.name]:elem.value}),{})
        console.log(this);
        this.add(data);
        this.textInputs.forEach(elem => elem.value = '')
        this.createNote();
        console.log(this.notes);
    }

    // reg(elem, regExp){
    //     if(regExp.test(elem.value)){
    //        return true
    //     }else{
    //         elem.style.border = '1px solid red'
    //         return false
    //     }
    // }

    createNote(){
        this.notesList.innerHTML = '';
        // let dataStorage = this.storage;
        let dataList = this.getNotes();

        // if(dataStorage){
        //     this.notes = dataStorage;
        // }

        // let dataList = this.getNotes();

        dataList.map(elem => {
            let elemList = document.createElement('li');
            elemList.setAttribute('class', 'note_list_item');

            let listTitle = document.createElement('div');
            listTitle.setAttribute('class', 'note_list_item_title');
            listTitle.innerText = elem.data.title;

            let listContent = document.createElement('div');
            listContent.setAttribute('class', 'note_list_item_content');
            listContent.innerText = elem.data.content;

            let editBtn = document.createElement("button");
            editBtn.setAttribute('class', 'note_list_item_edit');
            editBtn.innerText = 'Edit'

            let removeBtn = document.createElement("button");
            removeBtn.setAttribute('class', 'note_list_item_remove');
            removeBtn.innerText = 'X';
            elemList.append(listTitle, listContent, editBtn, removeBtn)
            this.notesList.append(elemList);

            editBtn.addEventListener('click', _ => {
                this.editNote(listTitle, listContent)
            })

            removeBtn.addEventListener('click', _ => this.noteRemove(elem.data.id))

            listTitle.addEventListener('keydown', e => {
                this.saveNote(e, elem.data.id, listTitle, listContent)
            })

            listContent.addEventListener('keydown', e => {
                this.saveNote(e, elem.data.id, listTitle, listContent)
            })
        })

        this.storage = this.notes;
        this.setCookie('notesExp', 1, {'max-age': 10})
    }

    get storage(){
        let stoage = localStorage.getItem('notes');
        return JSON.parse(stoage)
    }

    set storage(data){
        let dataStorage = JSON.stringify(data);
        localStorage.setItem('notes', dataStorage);
    }

    editNote(title, content){
        title.setAttribute('contenteditable', 'true');
        content.setAttribute('contenteditable', 'true');
    }

    noteRemove(id){
        this.remove(id);
        this.createNote();
    }

    saveNote(e, id, title, content) {
        if (e.key === 'Enter' && e.ctrlKey) {
            title.setAttribute('contenteditable', 'false');
            content.setAttribute('contenteditable', 'false');
            let data = {
                title: title.innerText,
                content: content.innerText,
            }

            this.edit(id, data);
        }
        this.storage = this.notes;
    }

    //Готовое решение
    getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    setCookie(name, value, options = {}) {
        options = {
            path: '/',
            // при необходимости добавьте другие значения по умолчанию
            ...options
        };
        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }
        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        for (let optionKey in options) {
            updatedCookie += "; " + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
            }
        }
        document.cookie = updatedCookie;
    }
}
