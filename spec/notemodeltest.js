(function(exports) {
  function testNoteTextIsStored() {
    note = new Note('JavaScript is my favourite language');

    if(note.showFullNote() === 'JavaScript is my favourite language') {
      return console.log('first test for showing note passed');
  } else {
      return 'test failed';
  }
  };
  testNoteTextIsStored();
})(this);
