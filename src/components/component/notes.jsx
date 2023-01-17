import Note from "./note";
import AddNote from "./addNote";
import "../styles/shared.css";
import "../styles/notes.css";

const Notes = (props) => {
  const { notes, handleAddNote } = props;
  return (
    <div className="notes">
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default Notes;
