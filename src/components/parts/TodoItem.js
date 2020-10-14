import React, { Component } from "react";

class TodoItem extends Component {
  //
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChecked = this.handleChecked.bind(this);
  }
  handleChecked() {
    this.setState((previous) => {
      return {
        checked: !previous.checked,
      };
    });
  }
  render() {
    return (
      <span>
        <input
          className={this.state.checked ? "completed" : undefined}
          type="checkbox"
          onChange={this.handleChecked}
          checked={this.state.checked}
        ></input>
        <p>{this.props.task}</p>
      </span>
    );
  }
}
export default TodoItem;

// function TodoItem(props) {
//   return (
//     <span>
//       <input type="checkbox"></input>
//       <p>{props.task}</p>
//     </span>
//   );
// }
