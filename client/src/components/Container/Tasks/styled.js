import { styled } from 'styled-components';

export const NoTasksMessage = styled.p`
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    font-style: italic;
`;

export const TasksBox = styled.div`
    margin: 3rem 2rem 2rem 2rem;
    height: 100%;
`;

export const TaskRow = styled.div`
    display: flex;
    flex-direction: row;
`;

export const TaskName = styled.p`
    margin: 0 auto;
`;

export const Checkbox = styled.input`
    margin-right: 1rem;
    cursor: pointer;
`;

export const Edit = styled.i`
    margin-right: 1rem;
    cursor: pointer;
`;

export const Delete = styled.i`
    cursor: pointer;
`;