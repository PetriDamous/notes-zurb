import { getNotes, renderNotes } from './notes-functions';

let notes = getNotes();

// Components
const createBtn = document.getElementById('create-btn');
const deleteAll = document.getElementById('delete-all');
const searchField = document.getElementById('search-field');
const filterBy = document.getElementById('filter-by');

// Filter
const filters = {
    searchNotes: ''
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