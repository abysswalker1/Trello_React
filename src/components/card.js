import React, { useEffect } from 'react';
import styled from 'styled-components'
import Container from './container'

const TodoButton = styled.button`
    width: 100%;
    padding: 5px 10px;
    background-color: #fff;
    text-align: start; 
    box-shadow: 1px 2px 5px #6c757d; 
    &:hover { 
        background-color: #fff;
        box-shadow: none;
    }
`

const DeliteButton = styled.button`
    color: red;
    margin-left: 10px;
    border-radius: 5px;
    padding: 2px;
    font-size: 16px;
    &:hover {
        background: #e63946;
        color: #fff;
    }
`

function Card({item , openFunction, deliteFunction, cardData, updateItem}) {
    
    useEffect(() => {
        if(cardData) {
            if(cardData.id === item.id) {
                updateItem(item, cardData)
            }
        }
    }, [cardData])

    return (
        <Container justify='space-between' margin='16px 0'>
            <TodoButton onClick = {() => openFunction(item)}>
                {item.text}
            </TodoButton>
            <DeliteButton onClick={deliteFunction}>
                    <i className="bi bi-trash3"></i>
            </DeliteButton>
        </Container>
    );
}

export default Card;