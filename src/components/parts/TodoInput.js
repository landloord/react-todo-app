import React from "react";
import ReactDOM from "react-dom";
function TodoInput() {
  return (
    <div className="input">
      <input type="text" placeholder="Add list item"></input>
      <button
        onClick={() => {
          console.log("clicked");
        }}
      >
        +
      </button>
    </div>
  );
}
export default TodoInput;
