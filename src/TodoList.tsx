import { getPropsWithDefaults, Label, Stack } from "@fluentui/react";
import TodoItem from "./TodoItem";

function TodoList (props: any) {

    return (
        <Stack gap={10} >
            {props.todoItems.length > 0 ? props.todoItems.map((todo:any) => (
                <TodoItem todoItems={todo} key={todo.id}/>)):
                <Label>Todo list is empty...</Label>}
        </Stack>
    );
}

export default TodoList;