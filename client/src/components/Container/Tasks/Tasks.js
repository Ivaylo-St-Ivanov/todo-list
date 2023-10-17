import { Checkbox, Delete, Edit, TaskName, TaskRow, TasksBox } from './styled';

const Tasks = ({
    tasks
}) => {
    return (
        <TasksBox>
            {tasks.map(t => (
                <TaskRow key={t.objectId}>
                    <TaskName>{t.task_name}</TaskName>

                    <div>
                        <Checkbox type="checkbox" name="completed" id="completed" />
                        <Edit className="fas fa-edit" />
                        <Delete className="fas fa-trash-alt" style={{ color: '#ff0000' }} />
                    </div>
                </TaskRow>
            ))}
        </TasksBox>
    );
};

export default Tasks;