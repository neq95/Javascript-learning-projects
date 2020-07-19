export class Note {
    constructor(title = "", text = "") {
        this.title = title;
        this.text = text;
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
        addEvents(this, note);
        addToLocalStorage(this);
    }
}

function addEvents(thisArg, note) {
    console.log(thisArg);
    let button = note.querySelector(".note__button");
    button.addEventListener("click", () => {
        note.remove();
    });

    let title = note.querySelector(".note__title");
    title.addEventListener("blur", () => {
        thisArg.title = title.textContent;
        if(thisArg.title) addToLocalStorage(thisArg);
    })

    let text = note.querySelector(".note__text");
    text.addEventListener("blur", () => {
        thisArg.text = text.textContent;
        if(thisArg.text) addToLocalStorage(thisArg);
    })
}

function addToLocalStorage(thisArg) {
    localStorage.setItem("note", JSON.stringify(thisArg));
}