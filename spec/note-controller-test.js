// 'use strict';

(function(){
  var controller = new NoteController();

  function canBeInstantiated(){

    assert.isTrue(controller);


  }

  canBeInstantiated();


  function canChangeHtml(){

    console.log(document.getElementById('app').innerHTML)
    assert.isTrue(document.getElementById('app').innerHTML === '<ul><li><div><a id="0" href="#notes/0">Favourite drink: sel</a></div></li></ul>');

  }

  function canAddNoteIDToURL() {
    link = document.getElementsByTagName('a').click()
    assert.isTrue(window.location.hash === '#notes/0')
  }

  canChangeHtml();
  canAddNoteIDToURL();

})();
