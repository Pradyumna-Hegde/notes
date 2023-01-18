import Notes from "./components/component/notes";
import "./components/styles/zero.css";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "./components/styles/shared.css";
import "./app.css";
import Search from "./components/component/search";
import Header from "./components/component/header";

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
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "react-notes-application-database",
      JSON.stringify(notes)
    );
  }, [notes]);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem("react-notes-application-database")
    );

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

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

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="app-container">
      <Header />
      <Search handleSearchNote={setSearchText} />
      <Notes
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
