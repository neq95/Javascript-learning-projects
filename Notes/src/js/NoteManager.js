import Note from "./Note";
import LocalStorage from "./LocalStorage";

export default class NoteManager {
    constructor() {
        if(NoteManager.exist) {
            return NoteManager.instance;
        }

        NoteManager.instance = this;
        NoteManager.exist = true;
        this.notes = new Map();
    }

    addNote() {
        let id = getId();
        let note = new Note(id);
        this.notes.set(id, note);
        console.log(this.notes);

        let domNote = note.makeNote();

        addEventListenersToNote(domNote, note);

        LocalStorage.addNewNoteToLocalStorage(note);
    }

    renderNotes() {

    }

    removeNotes() {

    }
}

let getId = (function() {
    let id = 0;
    return function() {
        return id++;
    }
})();

function addEventListenersToNote(domNote, note) {
    let button = domNote.querySelector(".note__button");
    let noteManager = new NoteManager();
    button.addEventListener("click", () => {
        console.log(noteManager.notes);
        domNote.remove();
        LocalStorage.removeFromLocalStorage(note)
    });

    let title = domNote.querySelector(".note__title");
    title.addEventListener("blur", () => {
        domNote.title = title.textContent;
        if(note.title) LocalStorage.changeLocalStorage(note);
    })

    let text = domNote.querySelector(".note__text");
    text.addEventListener("blur", () => {
        domNote.text = text.textContent;
        if(note.text) LocalStorage.changeLocalStorage(note);
    })
}