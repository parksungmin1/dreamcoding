import React from 'react';
import Button1 from '../components/Button1';
import Button2 from '../components/Button2';
import styled , { css } from 'styled-components';
import TailwindComponent from './TailwindComponent';
const Container = styled.div`
    display:flex;
`;

const Button = styled.button`
    background: trasparent;
    border-radius: 3px;
    border: 2px solid #2c5b69;
    color: #b9eaff;
    margin: 0 1rem;
    padding: 0.25em 1em;
    ${(props) =>
        props.primary && 
        css`
        background: #009cd5;
        color:white;
        `
    };
`;
export default function App() {
    return (
        <>
        <Button1 />
        <Button2 />
        <TailwindComponent />
        </>
    );
}


