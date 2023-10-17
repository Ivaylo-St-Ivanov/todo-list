import { useState, useEffect } from 'react';

import * as taskService from '../../services/taskService';

import Tasks from './Tasks/Tasks';

import { TasksContainer, Box, Form, InputField, Button, Line, EditTaskContainer, EditModal, ClouseEditModalBtn } from './styled';

const Container = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');
    const [isEditClick, setIsEditClick] = useState(false);

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

    const onEditClick = (value) => {
        setIsEditClick(value);
    };

    const onClouseEditModal = () => {
        setIsEditClick(false);
    };

    return (
        <>
            <TasksContainer>
                <Box>
                    <Form onSubmit={onSubmitHandler}>
                        <InputField value={taskInput} onChange={onChangeHandler} placeholder=" ....." />
                        <Button type="submit" name="btn" value="Add" />
                    </Form>
                    <Line />

                    <Tasks tasks={tasks} onEditClick={onEditClick} />
                </Box>
            </TasksContainer>

            {isEditClick && (
                <EditTaskContainer>
                    <EditModal>
                        <ClouseEditModalBtn onClick={onClouseEditModal} >X</ClouseEditModalBtn>
                        <Form onSubmit={onSubmitHandler}>
                            <InputField value={taskInput} onChange={onChangeHandler} placeholder=" ....." />
                            <Button type="submit" name="btn" value="Add" />
                        </Form>
                    </EditModal>
                </EditTaskContainer>
            )}
        </>
    );
};

export default Container;