import { useState } from 'react';

import { FormElement, InputField, Button, ErrorMessage } from './styled';

const Form = ({ onSubmitNewTask, error }) => {
    const [taskName, setTaskInput] = useState('');

    const onSubmitInput = (e) => {
        e.preventDefault();

        onSubmitNewTask(taskName);

        setTaskInput('');
    };

    const onChangeHandler = (e) => {
        setTaskInput(e.target.value);
    };

    return (
        <FormElement onSubmit={onSubmitInput}>
            <InputField value={taskName} onChange={onChangeHandler} name="taskName" placeholder=" ....." />
            {error && <ErrorMessage>Empty task field!</ErrorMessage>}
            <Button type="submit" name="btn" value="Add" />
        </FormElement>
    );
};

export default Form;