const uuidv4 = require('uuid/v4');

let notes = [];

// Get notes from database
const loadNotes = () => {
    const notesJSON = localStorage.getItem('notes');

    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (e) {
        console.log(e)
    }    
}

// Save notes to database
const saveNotes = () => {
    localStorage.setItem('notes', JSON.stringify(notes)); 
}

// Remove note
const removeNote = (id) => {
    let notes = getNotes();

    const noteIdx = notes.findIndex(function(note) {
        return note.id === id;
    });

    notes.splice(noteIdx, 1);
    saveNotes(notes);
}

// Adds note to array
const addNote = () => {    
    const id = uuidv4();

    notes.push({
        id: id,
        title: '',
        body: ''
    });
    
    getNotes().forEach(function (note) {
        note.title.trim();
    });
}


// Allows notes to be accessed by other files
notes = loadNotes();

const getNotes = () => notes;

// console.log(notes)

export { getNotes, saveNotes, removeNote, addNote };