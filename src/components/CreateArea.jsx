import React, { useState } from "react";
import {v4 as uuidv4} from "uuid";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({
      key: uuidv4(),
    title: "",
    content: "",
  });
  function handleChange(event) {
    const { value, name } = event.target;
    setNewNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
            e.preventDefault();
          props.onAdd(newNote);
          setNewNote({
            key: uuidv4(),
            title: "",
            content: "",
          });
        }}
      >
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
         value={newNote.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={newNote.content}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
