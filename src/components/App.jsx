import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes(prevValues=>{
      return [
        ...prevValues,
        note
      ];
    });
  }

  function deleteNote (id) {
    setNotes(prevValues=> {
      return notes.filter((note)=> note.key !== id);
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map(note => (
        <Note onDel={deleteNote} id={note.key} key={note.key} title={note.title} content={note.content} />
      ))}

      <Footer />
    </div>
  );
}

export default App;
