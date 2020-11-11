class NoteListViewer {

  constructor(noteList) {
    this.noteList = noteList;
  };

  htmlList() {
    let body = this.noteList.viewNotes().map(note => `<li><div>${note.text}</div></li>`).join('');

    let openTag = '<ul>';
    let closeTag = '</ul>';

    return `${openTag}${body}${closeTag}`
  };

};
