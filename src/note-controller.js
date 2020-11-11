class NoteController{
  constructor(noteList){

    this.noteList = new NoteList();
    this.noteList.addNote("Favourite drink: seltzer");
    this.noteListView = new NoteListViewer(noteList);

  }

  getsHtml(){

    var element = document.getElementById('app');
    element.innerHTML = this.noteListView.htmlList(this.noteList);

  }
}
let myNoteController = new NoteController();
myNoteController.getsHtml();



