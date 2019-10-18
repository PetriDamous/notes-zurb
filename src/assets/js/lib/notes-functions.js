// Elements
const notesDiv = document.getElementById('notes');

// Get notes from database
const getNotes = () => {
    const notesJSON = localStorage.getItem('notes');

    if (notesJSON !== null) {
        return JSON.parse(notesJSON);
    } else {
        return [];
    }
}

// Render note in DOM
const createNote = (note) => {
    const noteEl = document.createElement('p');
    noteEl.className = 'note';

    if (note.title.length > 0) {
        noteEl.textContent = note.title;
    } else {
        noteEl.textContent = 'Untitled Note';
    }
    
    return noteEl;
}

// Render notes 
const renderNotes = (notes, filters) => {
    const filteredNotes = notes.filter(function (note) {        
        return note.title.toLowerCase().includes(filters.searchNotes.toLowerCase());
    });

    notesDiv.innerHTML = '';

    filteredNotes.forEach(function (note) {
        const noteEl = createNote(note);                   
        notesDiv.appendChild(noteEl);
    });
}


export { getNotes, createNote, renderNotes };
