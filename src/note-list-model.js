class NoteList {
  constructor() {
    this.listOfNotes = [];
  }

  addNote(text) {
    let noteID = this.listOfNotes.length
    let note = new Note(text, noteID);
    this.listOfNotes.push(note);
  }

  viewNotes() {
    return this.listOfNotes;
  }

}
 