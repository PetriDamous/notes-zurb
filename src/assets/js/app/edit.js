import { note_title, note_body, edit_delete, edit_save } from './global';
import { getNotes, removeNote,  saveNotes, saveEdit, syncPage } from './notes';

const noteTitle = note_title();
const noteBody = note_body();
const editDlt = edit_delete();
const editSave = edit_save();

const notes = getNotes();

const noteID = location.hash.substring(1);

const note = notes.find((note) => {
    return note.id === noteID;
});

if (note === undefined) {
    location.assign('/index.html');
}

noteTitle.value = note.title;
noteBody.value = note.body;

const save = () => {
    const title = noteTitle.value;
    const body = noteBody.value;
    
    saveEdit(noteID, title, body);
    saveNotes();
}

noteTitle.addEventListener('input', function() {       
    save();    
});

noteBody.addEventListener('input', function() {
    save();    
});

editSave.addEventListener('click', function() {      
    location.assign('/index.html');
});

editDlt.addEventListener('click', function() {
    removeNote(noteID);
    saveNotes();
    location.assign('/index.html');
});

window.addEventListener('storage', syncPage, false);
// window.addEventListener('click', function(e) {
    // console.log('click')
// })