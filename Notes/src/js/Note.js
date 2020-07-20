export default class Note {
    constructor(id) {
        this.title = "";
        this.text = "";
        this.id = id;
    }

    makeNote() {
        let container = document.querySelector(".container");

        let note = document.createElement("div");
        note.classList.add("note");
        note.innerHTML = `
        <div class="note__title" contenteditable="true">${this.title}</div>
        <p class="note__text" contenteditable="true">${this.text}</p>
        <button class="note__button" type="button">x</button>
        `
        container.append(note);

        return note;
    }

    removeNote() {

    }
}
