import { useState } from "react";
import "../styles/shared.css";
import "../styles/add-note.css";

const AddNote = ({ handleAddNote }) => {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSave = () => {
    if (text.trim().length > 0) {
      handleAddNote(text);
      setText("");
    }
  };

  return (
    <div className="note new-note">
      <textarea
        cols="6"
        rows="4"
        placeholder="add note here..."
        onChange={handleTextChange}
      ></textarea>
      <div className="note-footer">
        <small>200 Remaining</small>
        <button className="save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
