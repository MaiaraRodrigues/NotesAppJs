class NoteController{
  constructor(noteList = new NoteList()){

    this.noteList = noteList;
    this.noteList.addNote("Favourite drink: seltzer");
    this.noteListView = new NoteListViewer(this.noteList);

  }

  getsHtml(){
    
    
    var element = document.getElementById('app');

    element.innerHTML = this.noteListView.htmlList();
    
    
  }
}
let myNoteController = new NoteController();
myNoteController.getsHtml();
