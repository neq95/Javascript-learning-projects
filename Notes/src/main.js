import "./style.scss";
import NoteManager from "./js/NoteManager";

let app = document.querySelector(".container");
let addButton = app.querySelector(".button--add");
let removeButton = app.querySelector(".button--remove");

addButton.addEventListener("click", addNote);
removeButton.addEventListener("click", removeNotes);

let noteManager = new NoteManager();
noteManager.renderNotesFromLocalStorage();

function addNote() {
    noteManager.addNote();
}

function removeNotes() {
    noteManager.removeNotes();
}