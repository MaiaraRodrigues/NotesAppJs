class NoteController{
  constructor(noteList){

    this.noteList = new NoteList();
    this.noteList.addNote("Favourite drink: seltzer");
    this.noteListView = new NoteListViewer(this.noteList);

  }

  getsHtml(){
    
    
    var element = document.getElementById('app');
    console.log(this.noteListView.htmlList());
    console.log(this.noteListView);
    element.innerHTML = this.noteListView.htmlList();
    
    
  }
}
let myNoteController = new NoteController();
myNoteController.getsHtml();
console.log()