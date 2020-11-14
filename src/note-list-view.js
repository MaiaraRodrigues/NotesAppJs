class NoteListViewer {

  constructor(noteList) {
    this.noteList = noteList;
  };

  htmlList() {
    let body = this.noteList.viewNotes().map(note => `<li><div><a id='${note.id}' href='#notes/${note.id}'>${note.text.slice(0,20)}</a></div></li>`).join('');
    let openTag = '<ul>';
    let closeTag = '</ul>';

    return `${openTag}${body}${closeTag}`
  };

};
console.log("3")
