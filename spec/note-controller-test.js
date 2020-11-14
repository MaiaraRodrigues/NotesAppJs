// 'use strict';

(function(){
  var controller = new NoteController();

  function canBeInstantiated(){

    assert.isTrue(controller);


  }

  canBeInstantiated();


  // function canChangeHtml(){
  //   testAppDiv = document.getElementById('app');
  //   controller.getsHtml();
  //   assert.isTrue(testAppDiv.innerHTML === '<ul><li><div><a id="0" href="#notes/0">Favorite drink: selt</a></div></li></ul>');
// 
  // }

  function canAddNoteIDToURL() {
    document.getElementById('0').click()
    assert.isTrue(window.location.hash === '#notes/0')
  }

  function canChangePageContent(){
    let link = document.getElementById('0')
    console.log(document.getElementById('app').innerHTML)
    link.click()

    console.log(document.getElementById('app').innerHTML)
    setTimeout(function() { assert.isTrue(document.getElementById('app').innerHTML === '<div>Favorite drink: seltzer</div>') }, 1000)
    // console.log("Test passed: App div updated");

    }

  // canChangeHtml();
  canAddNoteIDToURL();
  canChangePageContent();

})();
