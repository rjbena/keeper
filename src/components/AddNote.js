import React, { useState } from "react";

const AddNote = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <div className="note">
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        className="add-title"
        value={title}
      />
      <input
        onChange={(e) => setContent(e.target.value)}
        type="text"
        className="add-content"
        value={content}
      />
      <button
        className="add-button"
        onClick={() => addNote(title, content)}
        type="submit"
      >
        Add
      </button>
    </div>
  );
};

export default AddNote;
