import { getNotes, saveNotes, removeNote } from './notes';
import { notes_area } from './global-var.js';
import { getFilters } from './filters';

// Filters
const filters = getFilters();



const notesArea = notes_area();

// Create Note Element
const createNote = (note) => {

    // Creates needed elements for the DOM
    const noteEl = document.createElement('div');
    const noteTxt = document.createElement('p');
    const deleteBtn = document.createElement('button');

    // Assigns classes
    noteEl.className = 'note';    
    deleteBtn.className = 'button alert';

    // Sets display 
    noteTxt.style.display = 'inline-block';

    // Fills in text
    noteTxt.textContent = note.title;
    deleteBtn.textContent = 'Delete';
     
    // Appends to parent element
    noteEl.appendChild(noteTxt);
    noteEl.appendChild(deleteBtn);
    
    // Adds event listners
    deleteBtn.addEventListener('click', function() {
        let notes = getNotes();
        removeNote(note.id);
        renderNotes(notes, filters);
    });

    return noteEl;
}

// Render notes to the DOM
const renderNotes = (notes, filters) => {
    // debugger
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
