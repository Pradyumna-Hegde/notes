import { MdDelete } from "react-icons/md";
import "../styles/shared.css";

const Note = ({ note }) => {
  const { id, text, date } = note;
  return (
    <div className="note">
      <p>{text}</p>
      <div className="note-footer">
        <small>{date}</small>
        <MdDelete className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
};

export default Note;
