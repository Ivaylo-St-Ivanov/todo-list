import { useState, useEffect } from 'react';

import * as taskService from '../../services/taskService';

import Tasks from './Tasks/Tasks';
import Form from './Form/Form';

import { TasksContainer, Box, Line, EditTaskContainer, EditModal, ClouseEditModalBtn } from './styled';

const Container = () => {
    const [tasks, setTasks] = useState([]);
    const [isEditClick, setIsEditClick] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        taskService.getAllTasks()
            .then(data => {
                setTasks(data.results);
            });
    }, []);

    const onSubmitNewTask = async (taskName) => {
        if (!taskName) {
            return setError(true);
        }

        const res = await taskService.addTask({ taskName });
        
        const objectId = res.objectId;
        const isCompleted = res.isCompleted;

        setTasks(state => [...state, { objectId, taskName, isCompleted }]);
    };

    const onEditClick = async (taskId) => {
        setIsEditClick(true);

        // const selectedTask = tasks.find(t => t.objectId === taskId);
        // setTaskInput(selectedTask);
    };

    const onClouseEditModal = () => {
        setIsEditClick(false);
    };

    const onDeleteClick = async (taskId) => {
        await taskService.removeTask(taskId);
        
        setTasks(state => state.filter(t => t.objectId !== taskId));
    };

    return (
        <>
            <TasksContainer>
                <Box>
                    <Form onSubmitNewTask={onSubmitNewTask} error={error} />

                    <Line />

                    <Tasks tasks={tasks} onEditClick={onEditClick} onDeleteClick={onDeleteClick} />
                </Box>
            </TasksContainer>

            {isEditClick && (
                <EditTaskContainer>
                    <EditModal>
                        <ClouseEditModalBtn onClick={onClouseEditModal} >X</ClouseEditModalBtn>
                        {/* <Form onSubmit={onSubmitNewTask}>
                            <InputField value={taskName.taskName} onChange={onChangeHandler} name="taskName" placeholder=" ....." />
                            <Button type="submit" name="btn" value="Add" />
                        </Form> */}
                    </EditModal>
                </EditTaskContainer>
            )}
        </>
    );
};

export default Container;