class NoteListViewer {

  constructor(noteList) {
    this.noteList = noteList;
  };

  htmlList(noteList) {
    let body = noteList.viewNotes().map(note => `<li><div>${note.text}</div></li>`).join('');

    let openTag = '<ul>';
    let closeTag = '</ul>';

    return `${openTag}${body}${closeTag}`
  };

};