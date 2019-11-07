import { renderNotes } from './view';
import { saveNotes, addNote, removeAll, newNote } from './notes';
import { create_btn,  delete_all, search_field, filter_by } from './global';
import { setFilters } from './filters';
console.log('index');
// Components
const createBtn = create_btn();
const deleteAll = delete_all();
const searchField = search_field();
const filterBy = filter_by();

renderNotes();

createBtn.addEventListener('click', function() {
    addNote();
    saveNotes(); 
    newNote();        
});

deleteAll.addEventListener('click', function() {    
    removeAll();    
    saveNotes();    
    renderNotes();
});

searchField.addEventListener('input', function(e) {
    setFilters(e.target.value);
    renderNotes();    
});

filterBy.addEventListener('change', function(e) {
    console.log(e.target.value);
});
