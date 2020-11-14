// 'use strict';

(function(){
  var controller = new NoteController();

  function canBeInstantiated(){
    assert.isTrue(controller);
  }
  canBeInstantiated();


  function canChangeHtml(){
    testAppDiv = document.getElementById('app');
    controller.getsHtml();
    assert.isTrue(testAppDiv.innerHTML === '<ul><li><div><a id="0" href="#notes/0">Favorite drink: selt</a></div></li><li><div><a id="1" href="#notes/1">Hey happy saturday</a></div></li></ul>');
    console.log("Test passed: can change HTML")
  }

  function canAddNoteIDToURL() {
    let link = document.getElementById('0')
    link.click()
    assert.isTrue(window.location.hash === '#notes/0')
    console.log("Test passed: can add note ID to url")
  }

  function canChangePageContent(){
    let link = document.getElementById('0');
    let link2 = document.getElementById('1');
    link.click();
    link2.click();
    setTimeout(function() { assert.isTrue(document.getElementById('app').innerHTML === '<div>Hey happy saturday</div>') }, 1000);
    console.log("Test passed: App div updated");
  }

  canChangeHtml();
  canAddNoteIDToURL();
  canChangePageContent();

})();
