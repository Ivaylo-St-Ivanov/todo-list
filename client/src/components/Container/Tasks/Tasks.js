import { useState } from 'react';

import { Checkbox, Delete, Edit, NoTasksMessage, TaskName, TaskRow, TasksBox } from './styled';

const Tasks = ({
    tasks,
    onEditClick,
    onDeleteClick
}) => {
    const [isComplete, setIsComplete] = useState(false);

    const onClickCheckBox = () => {
        setIsComplete(state => !state);
    };

    return (
        <TasksBox>
            {tasks.length === 0 && <NoTasksMessage>No tasks yet!</NoTasksMessage>}

            {tasks.map(t => (
                <TaskRow key={t.objectId}>
                    {!isComplete && (
                        <TaskName>{t.taskName}</TaskName>
                    )}

                    {isComplete && (
                        <TaskName><s>{t.taskName}</s></TaskName>
                    )}

                    <div>
                        <Checkbox onClick={onClickCheckBox} type="checkbox" name="completed" id="completed" />
                        <Edit onClick={() => { onEditClick(t.objectId); }} className="fas fa-edit" />
                        <Delete onClick={() => { onDeleteClick(t.objectId); }} className="fas fa-trash-alt" style={{ color: '#ff0000' }} />
                    </div>
                </TaskRow>
            ))}
        </TasksBox>
    );
};

export default Tasks;