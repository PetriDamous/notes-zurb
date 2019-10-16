import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

let notes = [];

const notesJSON = localStorage.getItem('notes');

if (notesJSON !== null) {
    notes = JSON.parse(notesJSON);
}

// Elements
const notesDiv = document.getElementById('notes');

// Components
const createBtn = document.getElementById('create-btn');
const deleteAll = document.getElementById('delete-all');
const searchField = document.getElementById('search-field');
const filterBy = document.getElementById('filter-by');


// Filter
const filters = {
    searchNotes: ''
}

function renderNotes(notes, filters) {
    const filteredNotes = notes.filter(function (note) {        
        return note.title.toLowerCase().includes(filters.searchNotes.toLowerCase());
    });

    notesDiv.innerHTML = '';

    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p');
        noteEl.className = 'note';

        if (note.title.length > 0) {
            noteEl.textContent = note.title;
        } else {
            noteEl.textContent = 'Untitled Note';
        }                
                
        notesDiv.appendChild(noteEl);
    });
}

renderNotes(notes, filters);

createBtn.addEventListener('click', function() {
    notes.push({
        title: '',
        body: ''
    });
    
    notes.forEach(function (note) {
        note.title.trim();
    });

    localStorage.setItem('notes', JSON.stringify(notes));

    renderNotes(notes, filters);
});

deleteAll.addEventListener('click', function() {
    localStorage.clear();
    notes = [];
    renderNotes(notes, filters);
});

searchField.addEventListener('input', function(e) {
    filters.searchNotes = e.target.value;
    renderNotes(notes, filters);    
});

filterBy.addEventListener('change', function(e) {
    console.log(e.target.value);
});

