(function() {

  var note = new Note('SingleNoteView test');
  var snv = new SingleNoteView(note);

  function canBeInstantiated(){
    assert.isTrue(snv);
  };

  canBeInstantiated();

  function returnNoteHTML(){
    assert.isTrue(snv.createHTML() === '<div>SingleNoteView test</div>');
  };

  returnNoteHTML();

})();
