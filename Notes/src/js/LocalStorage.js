export default class LocalStorage {
    static addNewNoteToLocalStorage(note) {
        let notesArray = getNotesFromLocalStorage();
        notesArray.push(note)
        localStorage.setItem("note", JSON.stringify(notesArray));
    }
    
    static changeLocalStorage(note) {
        let notesArray = getNotesFromLocalStorage();
        for(let i = 0; i < notesArray.length; i++) {
            if(note.id === notesArray[i].id) {
                notesArray[i] = note;
            }
        }
        localStorage.setItem("note", JSON.stringify(notesArray));
    }

    static removeFromLocalStorage(note) {
        let notesArray = getNotesFromLocalStorage();
        let newArray = notesArray.filter(x => x.id !== note.id);
        
        localStorage.setItem("note", JSON.stringify(newArray));
    }
}

function getNotesFromLocalStorage() {
    let notesArray = localStorage.getItem("note");
    return JSON.parse(notesArray) || [];
}