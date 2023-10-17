import { styled } from 'styled-components';

export const TasksContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7rem 7rem 6rem 7rem;
`;

export const Box = styled.div`
    border-radius: 12px;
    height: 100%;
    box-shadow: 0px 0px 26px blueviolet;
    overflow: hidden;
`;

export const Form = styled.form`
    margin: 3.125rem 18.75rem 1.25rem 18.75rem;
`;

export const InputField = styled.input`
    margin-right: 0.625rem;
    width: 21.875rem;
    box-shadow: 0px 0px 8px #2f0ea3;
`;

export const Button = styled.input`
    border-left: 2px solid gray;
    border-top: 2px solid gray;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
    border-radius: 6px;
    background-color: #46FCB5;
    padding: 0.125rem 0.5rem;
    box-shadow: 2px 2px 3px gray;

    &:hover {
        cursor: pointer;
        box-shadow: unset;
    }
`;

export const Line = styled.hr`
    width: 70%;
`;

export const EditTaskContainer = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding-top: 5rem;
    background-color: rgba(0, 0, 0, 0.6);
`;

export const EditModal = styled.div`
    width: 70%;
    border: 2px solid;
    border-radius: 1rem;
    height: 25%;
    background-color: #d67373b5;
    position: relative;
`;

export const ClouseEditModalBtn = styled.button`
    border-radius: 100%;
    background-color: red;
    color: white;
    padding: 6px;
    position: absolute;
    top: -12px;
    right: -12px;
`;
