'use strict';
(function() {
  let note = new Note("Hello world");
  let singleNoteView = new SingleNoteView(note);

  function canBeInstantiated() {
    assert.isTrue(singleNoteView instanceof SingleNoteView);
    console.log("Test passed: A SingleNoteView can be instantiated")
  }
  canBeInstantiated(); 

  function canReturnHtml() {
    assert.isTrue(singleNoteView.makeHtml() === "<div>Hello world</div>");
  }
  canReturnHtml();
})();
