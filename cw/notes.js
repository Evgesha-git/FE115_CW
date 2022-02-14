/*
* Note - одна заметка
* Notes - все заметки
* NoteUI - интерфейс
* */

const Note = function (data){
    if(data.content && data.content.length > 0 ) this.data = data;
}

Note.prototype.edit = function (data) {
    Object.assign(this.data, data)
}

const Notes = function () {
    this.noteId = 0
    this.notes = [];
}

Notes.prototype.add = function (data) {
    if(data.content && data.content.length > 0) {
        ++this.noteId;
        let note = new Note(data);
        note.edit({id: this.noteId})
        this.notes.push(note)
    }
}

Notes.prototype.edit = function (id, data) {
    let noteFind = this.notes.find(note => {
        if(note.data.id == id) return note
    })

    noteFind.edit(data);
}

Notes.prototype.remove = function (id) {
    this.notes = this.notes.filter(note => note.data.id != id ? note : null)
    return true;
}

Notes.prototype.getNotes = function () {
    return this.notes;
}


const NoteUI = function () {
    Notes.apply(this)
}

NoteUI.prototype = Object.create(Notes.prototype)

NoteUI.prototype.addNote = function (e) {
    e.preventDefault();
    let data = this.textInputs.reduce((obj, elem) => ({...obj, [elem.name]:elem.value}),{})
    console.log(this);
    this.add(data);
    this.textInputs.forEach(elem => elem.value = '')
    this.createNote();
    console.log(this.notes);
}

NoteUI.prototype.createNote = function () {
    this.notesList.innerHTML = '';
    let dataList = this.getNotes()
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
}

NoteUI.prototype.saveNote = function (e, id, title, content){
    if(e.key == 'Enter' && e.ctrlKey){
        title.setAttribute('contenteditable', 'false');
        content.setAttribute('contenteditable', 'false');
        let data = {
            title: title.innerText,
            content: content.innerText,
        }

        this.edit(id, data);
    }

}

NoteUI.prototype.noteRemove = function (id) {
    this.remove(id);
    this.createNote();
}

NoteUI.prototype.editNote = function (title, content) {
    title.setAttribute('contenteditable', 'true');
    content.setAttribute('contenteditable', 'true');
}

NoteUI.prototype.init = function () {
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
}

