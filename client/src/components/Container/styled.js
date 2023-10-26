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
    overflow: scroll;
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
