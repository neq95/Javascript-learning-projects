import "./style.scss";
import {Note} from "./js/Note"

let app = document.querySelector(".container");
let addButton = app.querySelector(".button--add");
let removeButton = app.querySelector(".button--remove");

addButton.addEventListener("click", addNote);
removeButton.addEventListener("click", removeNotes);

function addNote() {
    let note = new Note();
    note.makeNote();
}

function removeNotes() {
    let notes = document.querySelectorAll(".note");
    notes.forEach(note => note.remove());
}