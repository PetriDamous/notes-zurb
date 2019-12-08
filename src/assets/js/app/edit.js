import { note_title, note_body, edit_delete, edit_save, last_edited } from './global';
import { getNotes, removeNote,  saveNotes, saveEdit, syncPage } from './notes';
const moment = require('moment');

const noteTitle = note_title();
const noteBody = note_body();
const editDlt = edit_delete();
const editSave = edit_save();
const lastEdited = last_edited();

const notes = getNotes();

const noteID = location.hash.substring(1);

const note = notes.find((note) => {
    return note.id === noteID;
});

if (note === undefined) {
    location.assign('/index.html');
}


const lastUpdate = (time) => {
    return `Last edited: ${moment(time).fromNow()}`;
}

const save = () => {
    const timeStamp = moment().valueOf();
    lastEdited.textContent = lastUpdate(timeStamp);
    // console.log(typeof moment(timeStamp).fromNow())
    const title = noteTitle.value;
    const body = noteBody.value;
    
    saveEdit(noteID, title, body, timeStamp);
    saveNotes();
}

noteTitle.value = note.title;
noteBody.value = note.body;
lastEdited.textContent = lastUpdate(note.updatedAt);

// setInterval(() => { lastEdited.textContent = lastUpdate(note.updatedAt); }, 3000);


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



// window.addEventListener('storage', syncPage, false);
// window.addEventListener('click', function(e) {
    // console.log('click')
// })