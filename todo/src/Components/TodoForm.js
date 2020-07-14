import React, { useState } from "react";

const TodoForm = (props) => {
  const [form, setForm] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.addItem(form);
        setForm("");
      }}
    >
      <input
        type="text"
        value={form}
        name="item"
        onChange={(e) => setForm(e.target.value)}
      />

      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;