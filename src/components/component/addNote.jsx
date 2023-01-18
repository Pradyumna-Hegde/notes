import { useState } from "react";
import "../styles/shared.css";
import "../styles/add-note.css";

const AddNote = ({ handleAddNote }) => {
  const [text, setText] = useState("");
  const characterLimit = 200;

  const handleTextChange = (event) => {
    if (characterLimit - text.length > 0) {
      setText(event.target.value);
    }
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
        value={text}
        onChange={handleTextChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - text.length} Remaining</small>
        <button className="save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
