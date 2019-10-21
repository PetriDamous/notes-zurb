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

    // Creates needed elements
    const noteEl = document.createElement('div');
    const noteTxt = document.createElement('p');
    const deleteBtn = document.createElement('button');

    // Assigns classes
    noteEl.className = 'note';    
    deleteBtn.className = 'button alert';

    // Sets display 
    noteTxt.style.display = 'inline-block';

    // Fills in text
    if (note.title.length > 0) {
        noteTxt.textContent = note.title;
    } else {
        noteTxt.textContent = 'Untitled Note';
    }

    deleteBtn.textContent = 'Delete';
    
    // Appends to parent element
    noteEl.appendChild(noteTxt);
    noteEl.appendChild(deleteBtn);    

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
