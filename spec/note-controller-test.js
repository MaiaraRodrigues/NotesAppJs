// 'use strict'; 

(function(){
  var controller = new NoteController(); 

  function canBeInstantiated(){
    
    assert.isTrue(controller);
  

  }

  canBeInstantiated();


  function canChangeHtml(){
    

    assert.isTrue(document.getElementById('app').innerHTML === '<ul><li><div>Favourite drink: seltzer</div></li></ul>');

  }

  canChangeHtml();

})();