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

    makeUrlChangeFullNoteForCurrentPage() {
        window.addEventListener("hashchange", this.showFullNoteForCurrentPage);
      };

    showAFullNoteForCurrentPage() {
        this.showNote(this.getIdFromUrl(window.location));
      };

    getIdFromUrl(location) {
        return location.hash.split("/")[1];
      };

    showNote(noteId) {

        console.log(this.noteList.listOfNotes[noteId]);
        let fullNote = this.noteList.listOfNotes[noteId];
        let fullNoteView = new SingleNoteView(fullNote);
        document.getElementById("app").innerHTML =  fullNoteView.createHTML();
        console.log(fullNoteView.createHTML());

      };
  

};



let myNoteController = new NoteController();
myNoteController.getsHtml();
myNoteController.makeUrlChangeFullNoteForCurrentPage();

