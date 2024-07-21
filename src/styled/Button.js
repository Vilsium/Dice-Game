import styled from "styled-components";

export const Button = styled.button`
    padding: 10px 18px;
    color: white;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    background-color: #000000;
    font-size: 16px;
    border: 1px solid transparent;
    transition: 0.4s background ease-in;
    cursor: pointer;
    &:hover {
        background-color: white;
        color: #000000;
        border: 1px solid black;
        transition: 0.3s background ease-in;
    }
`;

export const OutlineButton = styled(Button)`
    background-color: white;
    color: black;
    border: 1px solid black;
    &:hover {
        background-color: black;
        color: white;
        border: 1px solid transparent;
    }
`;