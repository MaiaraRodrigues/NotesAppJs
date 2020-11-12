'use strict';

(function () {

  function testingTheHtmlList() {
    var myNoteList = new NoteList();
    var myNoteListViewer = new NoteListViewer(myNoteList);

    myNoteList.addNote("What a nice day!");
    myNoteList.addNote("12345678901234567890123");

    assert.isTrue(myNoteListViewer.htmlList() === "<ul><li><div>What a nice day!</div></li><li><div>12345678901234567890</div></li></ul>");


    console.log("testingTheHtmlList")
  }

  testingTheHtmlList();


})();

// class notelistview
// takes mynotelist in a constructor
