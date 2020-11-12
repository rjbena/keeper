import React from "react";

const Note = ({ title, content, deleteNote, id }) => {
  return (
    <div className="note">
      <h1>{title} </h1>
      <p>{content}</p>
      <button
        className="delete-btn"
        onClick={() => deleteNote(id)}
        type="submit"
      >
        Delete
      </button>
    </div>
  );
};

export default Note;
