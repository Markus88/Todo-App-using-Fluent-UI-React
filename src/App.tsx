import './App.css';
import { Stack } from "@fluentui/react";

function App() {
  return (
    <div className="wrapper">
      <Stack horizontalAlign = "center">
        <h1>Todo App using Fluent UI & React</h1>
        <Stack style = {{ width: 300 }} gap = {25}>
          Add todo component...
          TodoList component...
        </Stack>
      </Stack>
    </div>
  );
}

export default App;
