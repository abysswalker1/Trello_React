import React from 'react';
import styled from 'styled-components'

const TodoButton = styled.button`
    width: 100%;
    display: block;
    margin: 16px 0;
    padding: 5px 10px;
    background-color: #fff;
    text-align: start; 
    box-shadow: 1px 2px 5px #6c757d; 
    &:hover { 
        background-color: #fff;
        box-shadow: none;
    }
`

function Card(props) {
    return (
        <TodoButton>
            {props.text}
        </TodoButton>
    );
}

export default Card;