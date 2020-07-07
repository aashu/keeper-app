import React, { useState } from "react";
import {v4 as uuidv4} from "uuid";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Zoom } from '@material-ui/core';

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
  function submitNote(event) {

    props.onAdd(newNote);
    setNewNote({
      key: uuidv4(),
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  //rendering title and button when textarea is clicked
  const [isExpanded,setIsExpanded] = useState(false);
  function handleClick() {
    setIsExpanded(true);
  }
  return (
    <div>
      <form className="create-note"
        onSubmit={submitNote}
      >
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
         value={newNote.title}
         style={isExpanded?null:{visibility:"hidden",position:"absolute"}}
        />
        <textarea
          onClick={handleClick}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded?"3":"1"}
          value={newNote.content}
        />
        <Zoom in={isExpanded}>
        <Fab><AddIcon/></Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
