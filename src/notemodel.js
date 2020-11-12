
class Note {
  constructor(text, noteID) {
      this.text = text;
      this._id = noteID;
  }

  showFullNote(){
    return this.text;
  }

  get id(){
    return this._id;
  }

}
