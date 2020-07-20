export default class LocalStorage {
    static addNewNoteToLocalStorage(note) {
        let notesArray = LocalStorage.getNotesFromLocalStorage();
        notesArray.push(note)
        localStorage.setItem("note", JSON.stringify(notesArray));
    }
    
    static changeLocalStorage(note) {
        console.log("change");
        let notesArray = LocalStorage.getNotesFromLocalStorage();
        for(let i = 0; i < notesArray.length; i++) {
            if(note.id === notesArray[i].id) {
                notesArray[i] = note;
            }
        }
        localStorage.setItem("note", JSON.stringify(notesArray));
    }

    static removeFromLocalStorage(note) {
        let notesArray = LocalStorage.getNotesFromLocalStorage();
        let newArray = notesArray.filter(x => x.id !== note.id);
        
        localStorage.setItem("note", JSON.stringify(newArray));
    }

    static clear() {
        localStorage.removeItem("note");
    }

    static getNotesFromLocalStorage() {
        let notesArray = localStorage.getItem("note");
        return JSON.parse(notesArray) || [];
    }
}