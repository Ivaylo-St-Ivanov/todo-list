import { useState, useEffect } from 'react';

import * as taskService from '../../services/taskService';

import Tasks from './Tasks/Tasks';

import { TasksContainer, Box, Form, InputField, Button, Line } from './styled';

const Container = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    useEffect(() => {
        taskService.getAllTasks()
            .then(data => {
                setTasks(data);
            });
    }, []);

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

                <Tasks tasks={tasks}/>
            </Box>
        </TasksContainer>
    );
};

export default Container;