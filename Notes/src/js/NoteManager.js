import Note from "./Note";
import LocalStorage from "./LocalStorage";

export default class NoteManager {
    constructor() {
        if(NoteManager.exist) {
            return NoteManager.instance;
        }

        NoteManager.instance = this;
        NoteManager.exist = true;
    }

    addNote(existNote = {}, addToLocalStorage = true) {
        let id = existNote.id || getId();
        let note;

        if(existNote) {
            note = new Note(id, existNote.title, existNote.text)
        } else {
            note = new Note(id);
        }

        let domNote = note.makeNote();

        addEventListenersToNote(domNote, note);

        if(addToLocalStorage) {
            LocalStorage.addNewNoteToLocalStorage(note);
        }
    }

    renderNotesFromLocalStorage() {
        let notes = LocalStorage.getNotesFromLocalStorage();
        notes.forEach(note => this.addNote(note, false));
    }

    removeNotes() {
        LocalStorage.clear();

        let notes = document.querySelectorAll(".note");
        for(let note of notes) {
            note.remove();
        }
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
    button.addEventListener("click", () => {
        domNote.remove();
        LocalStorage.removeFromLocalStorage(note);
    });

    let title = domNote.querySelector(".note__title");
    title.addEventListener("blur", () => {
        console.log("title")
        note.title = title.textContent;
        if(note.title) LocalStorage.changeLocalStorage(note);
    })

    let text = domNote.querySelector(".note__text");
    text.addEventListener("blur", () => {
        console.log("text");
        note.text = text.textContent;
        if(note.text) LocalStorage.changeLocalStorage(note);
    })
}