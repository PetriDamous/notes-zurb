const uuidv4 = require('uuid/v4');
const moment = require('moment');

let notes = [];

// Get notes from database
const loadNotes = () => {
    const notesJSON = localStorage.getItem('notes');
    
    try {
        return notesJSON ? JSON.parse(notesJSON) : [];
    } catch (e) {
        [];
    }    
}

// Save notes to database
const saveNotes = () => {
    localStorage.setItem('notes', JSON.stringify(notes)); 
}

const saveEdit = (id, title, body) => {

    const note = notes.find(function(note) {
        return note.id === id;
    });
    
    note.title = title;
    note.body = body;
}

// Remove note from array
const removeNote = (id) => {    
    
    const noteIdx = notes.findIndex(function(note) {
        return note.id === id;
    });

    notes.splice(noteIdx, 1);    
}

// Remove all
const removeAll = () => {    
    localStorage.clear();
    notes = loadNotes();            
}

// Adds note to array
const addNote = () => {    
    const id = uuidv4();

    notes.push({
        id: id,
        title: '',
        body: ''
    });

    notes.forEach(function (note) {
        note.title.trim();
    });

    // Handles untitled notes
    notes.forEach(function(note) {        
        if (note.title.length <= 0) note.title = 'Untitled Note';        
    });  
    
}

// Links to new edit page for new note
const newNote = () => {
    return location.assign(`/edit.html#${notes[notes.length - 1].id}`);
}

// Allows notes to sync across pages
const syncPage = (e) => {
    console.log(e)
}


// Allows notes to be accessed by other files
notes = loadNotes();

const getNotes = () => notes;

export { getNotes, saveNotes, saveEdit, removeNote, addNote, removeAll, newNote, syncPage };