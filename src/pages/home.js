

import React, { Component } from "react";

class Home extends React.Component {
  state = {
    newTodo: "",
    todos: [
      "1",
      "2",
      "3",
      "4",
      "5"
    ]
  };

  render() {
    return ( <div>
        <h2>Home</h2>
        {this.state.todos.map(todo => (
          <li key={todo}> {todo}</li>
        ))}
      </div>);
  }
}

export default Home;