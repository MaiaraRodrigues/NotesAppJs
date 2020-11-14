class NoteList {
  constructor() {
    this.listOfNotes = [];
    this.id = 0;
  }

  addNote(text) {
    // let id = this.listOfNotes.length
    let note = new Note(text, this.id);
    this.listOfNotes.push(note);
    this.id++;
  }

  viewNotes() {
    return this.listOfNotes;
  }

}
 console.log("2")