import Note from "./note";
import AddNote from "./addNote";
import "../styles/shared.css";
import "../styles/notes.css";

const Notes = (props) => {
  const { notes, handleAddNote, handleDeleteNote } = props;
  return (
    <div className="notes">
      {notes.map((note) => (
        <Note key={note.id} note={note} handleDeleteNote={handleDeleteNote} />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default Notes;
