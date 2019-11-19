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

// Sorts Notes
const sortedNotes = (notes, filters) => {
    
    switch (filters.sortBy) {
        case 'byEdit':
            
            notes.sort((a, b) => {
                if (a.updatedAt > b.updatedAt) {                    
                    return -1;
                } else if (a.updatedAt < b.updatedAt) {
                    return 1;
                } else {
                    return 0;
                }
            });            

            break;

        case 'byCreated':
            notes.sort((a, b) => {
                if (a.createdAt > b.createdAt) {                    
                    return -1;
                } else if (a.createdAt < b.createdAt) {
                    return 1;
                } else {
                    return 0;
                }
            });

            break;

        case 'byAlpha':
            notes.sort((a, b) => {
                if (a.title.toLowerCase() > b.title.toLowerCase()) {                    
                    return 1;
                } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
                    return -1;
                } else {
                    return 0;
                }
            });

            break;
    }

    return notes;
}

// Render notes to the DOM
const renderNotes = () => {
    let notes = getNotes();
    let filters = getFilters();

    notes = sortedNotes(notes, filters);
    
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