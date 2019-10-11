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

const notes = [
    {
        title: 'Wash dishes',
        body: 'Remember to was dishes'
    },

    {
        title: 'Clean bathroom',
        body: 'Rembmer to unclog drains and clean bathtub'
    },

    {
        title: 'Pay electric bill',
        body: 'Electric bill is due'
    }
];

const bodyHTML = document.querySelector('body');
const createNote = document.getElementById('create-note');
const removeAll = document.getElementById('remove-all');
const searchText = document.getElementById('search-text');

createNote.addEventListener('click', function() {
    const newNote = document.createElement('p');
    newNote.className = 'note';
    newNote.textContent = 'All sleep no play';
    bodyHTML.appendChild(newNote);
});

removeAll.addEventListener('click', function() {
    const noteList = document.querySelectorAll('.note');
    noteList.forEach(function(note) {
        note.remove();
    });
});

searchText.addEventListener('input', function(e) {
    console.log(e.target.value);
});


/*
// Temp code here // 


// Remove single element
// let p = document.querySelector('p');
 
// p.remove();

// Change text of element
let ps = document.querySelectorAll('p');

ps.forEach(function(p) {
    p.textContent = '******'
    // p.remove();
});

// Add new element
const newPara = document.createElement('p');
newPara.textContent = 'Walk a puppy';
document.querySelector('body').appendChild(newPara);
*/