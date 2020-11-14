class NoteController{
  constructor(noteList = new NoteList()){
    this.noteList = noteList;
    this.noteList.addNote("Favorite drink: seltzer");
    this.noteList.addNote("Hey happy saturday");
    this.noteListView = new NoteListViewer(this.noteList);
  }

    getsHtml(){
      var element = document.getElementById('app');
      var str = this.noteListView.htmlList();
      element.innerHTML = str;
  }
}
  function makeUrlChange() {
      window.addEventListener("hashchange", showFullNoteForCurrentPage);
    };

  function showFullNoteForCurrentPage() {
    showNote(getIdFromUrl());
    };

  function getIdFromUrl() {
    return window.location.hash.split("/")[1];
    };

  function showNote(id) {
    let noteContent = myNoteController.noteList.viewNotes()[id].showFullNote()
    document.getElementById("app").innerHTML = `<div>${noteContent}</div>`;
    // let noteContent = myNoteController.noteList.viewNotes()[id].showFullNote()
    // console.log(myNoteController.noteList.viewNotes()[id])
    
    // showFullNote())
    // document.getElementById("app").innerHTML = `<div>${noteContent}</div>`;
  }

let myNoteController = new NoteController();
myNoteController.getsHtml();
makeUrlChange();

console.log("4")

