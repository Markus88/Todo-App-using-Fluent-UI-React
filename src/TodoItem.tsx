import React from 'react';
import { Stack, Label } from '@fluentui/react';

function TodoItem(props: any) {
    return (
        <Stack>
            <Stack horizontal verticalAlign="center" horizontalAlign="space-between">
                <Label>{props.todoItems.name}</Label>
            </Stack>
        </Stack>
    )
}

export default TodoItem