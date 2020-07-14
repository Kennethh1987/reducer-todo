  
import React from "react";

const Todo = (props) => {
  console.log(props.item);
  return (
    <p
      className={props.item.completed ? "complete" : ""}
      onClick={() => props.toggleItem(props.item.id)}
    >
      {props.item.toDo}
    </p>
  );
};

export default Todo;