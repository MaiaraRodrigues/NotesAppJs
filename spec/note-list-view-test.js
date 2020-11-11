'use strict';

(function () {

  function testingTheHtmlList() {
    var myNoteList = new NoteList();
    var myNoteListViewer = new NoteListViewer(myNoteList);

    myNoteList.addNote("What a nice day!");

    assert.isTrue(myNoteListViewer.htmlList()) === "<ul><li><div>What a nice day!</div></li></ul>"


    console.log("testingTheHtmlList")
  }

  testingTheHtmlList();


})();

// class notelistview
// takes mynotelist in a constructor
