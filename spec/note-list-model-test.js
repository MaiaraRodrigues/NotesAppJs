'use strict';

(function(){

  function hasEmptyArray() {
    var noteList = new NoteList();

    assert.isTrue(noteList.listOfNotes.length === 0);
    console.log("Test for empty array")
  };
    hasEmptyArray();


  function canAddNotes() {
    let noteList = new NoteList();
    noteList.addNote("Hello world");

    assert.isTrue(noteList.listOfNotes.length === 1);
    console.log("Test for adding note passed")
  };
  canAddNotes();

  function canAddNoteID() {
    let noteList = new NoteList();
    noteList.addNote("Hello world");

    assert.isTrue(noteList.listOfNotes[0].id === 0);
  };
  canAddNoteID();

  function returnAllNotes() {
    var noteList = new NoteList();
    noteList.addNote("Hola Mundo!!!");

    assert.isTrue(noteList.viewNotes()[0].text === "Hola Mundo!!!");
  }

  returnAllNotes();
})();
