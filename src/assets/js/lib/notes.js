const uuidv4 = require('uuid/v4');
import { notes_area } from './global-var';

let notes = [];

const notesArea = notes_area();

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

// Remove note from array
const removeNote = (id) => {    
    
    const noteIdx = notes.findIndex(function(note) {
        return note.id === id;
    });

    notes.splice(noteIdx, 1);    
}

// Remove all
const removeAll = () => {
    notes = [];
    localStorage.clear();            
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


// Allows notes to be accessed by other files
notes = loadNotes();

const getNotes = () => notes;

// console.log(notes)

export { getNotes, saveNotes, removeNote, addNote, removeAll };