'use strict';

(function () {

  function testingTheHtmlList() {
    var myNoteList = new NoteList();
    var myNoteListViewer = new NoteListViewer(myNoteList);

    myNoteList.addNote("What a nice day!");
    myNoteList.addNote("12345678901234567890123");

    assert.isTrue(myNoteListViewer.htmlList() === `<ul><li><div><a id='0' href='#notes/0'>What a nice day!</a></div></li><li><div><a id='1' href='#notes/1'>12345678901234567890</a></div></li></ul>`);
  }

  testingTheHtmlList();


})();

// class notelistview
// takes mynotelist in a constructor
