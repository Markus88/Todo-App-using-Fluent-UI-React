import './App.css';
import { Stack } from "@fluentui/react";
import { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([{ id: 1, name: "Todo Item 1" }, { id: 2, name: "Todo Item 2" }]);
  return (
    <div className="wrapper">
      <Stack horizontalAlign = "center">
        <h1>Todo App using Fluent UI & React</h1>
        <Stack style = {{ width: 300 }} gap = {25}>
          <TodoList todos={todos} />
          Add todo component...
          TodoList component...
        </Stack>
      </Stack>
    </div>
  );
}
export default App;
