import { useState } from 'react';

import { TasksContainer, Box, Form, InputField, Button, Line } from './styled';

const Container = () => {
    const [taskInput, setTaskInput] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();

        setTaskInput('');
    };

    const onChangeHandler = (e) => {
        setTaskInput(e.target.value);
    };

    return (
        <TasksContainer>
            <Box>
                <Form onSubmit={onSubmitHandler}>
                    <InputField value={taskInput} onChange={onChangeHandler} placeholder=" ....." />
                    <Button type="submit" name="btn" value="Add" />
                </Form>

                <Line />

                <div>{taskInput}</div>
            </Box>
        </TasksContainer>
    );
};

export default Container;