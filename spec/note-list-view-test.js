'use strict';

(function(){ 

 function htmlList () {
   var myNoteList = new NoteList();
   var myNoteListViewer = new NoteListViewer(myNoteList);

   myNoteList.addNote("What a nice day!");

   assert.isTrue(myNoteListViewer.htmlList()) === "<ul><li><div>What a nice day!</div></li></ul>"


  
 }

 htmlList();


})();

// class notelistview
// takes mynotelist in a constructor