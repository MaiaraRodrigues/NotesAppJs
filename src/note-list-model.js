class NoteList {
  constructor() {
    this.listOfNotes = [];
  }

  addNote(text) {
    let note = new Note(text);
    this.listOfNotes.push(note);
  }

  viewNotes() {
    return this.listOfNotes;
  }

}

