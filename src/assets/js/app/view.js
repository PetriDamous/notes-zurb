import { getNotes, saveNotes, removeNote } from './notes';
import { getFilters } from './filters';
import { notes_area } from './global';

// Elements
const notesArea = notes_area();

// Create Note Element
const createNote = (note) => {

    // Creates needed elements for the DOM
    const noteEl = document.createElement('div');
    const noteTxt = document.createElement('a');
    const deleteBtn = document.createElement('button');

    // Assigns classes
    noteEl.className = 'note';    
    deleteBtn.className = 'button alert';    

    // Fills in text
    noteTxt.textContent = note.title;
    deleteBtn.textContent = 'Delete';

    // Fills in href for anchors
    noteTxt.setAttribute('href', `/edit.html#${note.id}`);    
     
    // Appends to parent element
    noteEl.appendChild(noteTxt);
    noteEl.appendChild(deleteBtn);
    
    // Adds event listners
    deleteBtn.addEventListener('click', function() {    
        removeNote(note.id);
        saveNotes();
        renderNotes();
    });

    return noteEl;
}

// Render notes to the DOM
const renderNotes = () => {
    const notes = getNotes();
    const filters = getFilters();
    
    const filteredNotes = notes.filter(function (note) {        
        return note.title.toLowerCase().includes(filters.searchNotes.toLowerCase());
    });

    notesArea.innerHTML = '';

    filteredNotes.forEach(function (note) {
        const noteEl = createNote(note);                   
        notesArea.appendChild(noteEl);
    });
}

export { createNote, renderNotes };