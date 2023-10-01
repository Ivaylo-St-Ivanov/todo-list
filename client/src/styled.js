import { styled } from 'styled-components';

export const Container = styled.div`
    border: 2px dashed blue;
    border-radius: 12px;
    height: 100%;
    box-shadow: 0px 0px 60px;
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
