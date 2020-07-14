import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div className="todo_list">
      {props.toDoTasks.map((item) => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button className="clear-btn" onClick={props.clearTask}>
        Clear Todo
      </button>
    </div>
  );
};

export default TodoList;