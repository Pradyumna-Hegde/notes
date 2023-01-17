import Notes from "./components/component/notes";
import "./components/styles/zero.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import "./components/styles/shared.css";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first Note",
      date: "15/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my second Note",
      date: "15/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my third Note",
      date: "15/04/2021",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  return (
    <div className="app-container">
      <Notes notes={notes} handleAddNote={addNote} />
    </div>
  );
}

export default App;
