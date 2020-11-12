import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import AddNote from "./components/AddNote";
import { v4 as uuidv4 } from "uuid";
//import notesData from "./notes";
const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (title, content) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        key: uuidv4(),
        title,
        content,
      },
    ]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.key !== id));
  };

  return (
    <>
      <Header />
      <AddNote addNote={addNote} />
      {notes.map((note) => (
        <Note
          key={note.key}
          id={note.key}
          title={note.title}
          content={note.content}
          deleteNote={deleteNote}
        />
      ))}
      <Footer />
    </>
  );
};

export default App;
