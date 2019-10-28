import { renderNotes, createNote } from './notes-functions';
import { getNotes, saveNotes, addNote, removeAll } from './notes';
import { create_btn,  delete_all, search_field, filter_by } from './global-var';
import { getFilters, updateFilters } from './filters';

// Variables
let notes = getNotes();

// Components
const createBtn = create_btn();
const deleteAll = delete_all();
const searchField = search_field();
const filterBy = filter_by();

// Filters
const filters = getFilters();

renderNotes(notes, filters);

createBtn.addEventListener('click', function() {
    addNote();
    saveNotes();
    console.log('create: ', notes);    
    renderNotes(notes, filters);
});

deleteAll.addEventListener('click', function() {
    let notes = getNotes(); 
    removeAll();    
    saveNotes();      
    console.log('delete: ', notes);
    renderNotes(notes, filters);
});

searchField.addEventListener('input', function(e) {
    updateFilters(e.target.value);
    renderNotes(notes, filters);    
});

filterBy.addEventListener('change', function(e) {
    console.log(e.target.value);
});

