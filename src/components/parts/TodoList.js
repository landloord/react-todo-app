import React, { Component } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import TodoData from "./TodoData";

class TodoList extends Component {
  //
  //Passing the list data from TodoData to a state
  constructor() {
    super();
    this.state = {
      todos: TodoData,
    };
  }
  //
  render() {
    const Todoitem = this.state.todos.map((item) => (
      <TodoItem task={item.task} key={item.id} status={item.status} />
    ));
    return (
      <div className="main">
        <div className="checklist-container">
          <h2>TO DO</h2>
          <form className="checklist">{Todoitem}</form>
          <TodoInput />
        </div>
      </div>
    );
  }
}
export default TodoList;

// function TodoList() {
//   return (
//     <div className="main">
//       <div className="checklist-container">
//         <h2>TO DO</h2>
//         <form className="checklist">{TodoItemData}</form>
//         <TodoInput />
//       </div>
//     </div>
//   );
// }
