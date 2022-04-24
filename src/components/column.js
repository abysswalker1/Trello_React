import React from 'react';
import styled from 'styled-components';
import Container from './container'
import "bootstrap-icons/font/bootstrap-icons.css";

const ColumnWrapper = styled.div`
    padding : 16px;
    background-color: #CDD0DF;
    width: 250px;
    margin-right: 16px;
`

const AddCardButton = styled.button`
    margin-top: 16px;
    width: 100%;
    padding: 6px;
    &:hover {
        background-color: #457b9d;
    }
`

const Column = (props) => {
    return (
        <ColumnWrapper>
            <Container justify="space-between">
                <p>{props.tittle}</p>
                <button>
                    <i class="bi bi-pencil-square"></i>
                </button>
            </Container>
            <AddCardButton>
                <Container justify="flex-start">
                    <i class="bi bi-plus-lg"></i>
                    <p style ={{ marginLeft : '7px' }}>Добавить карту</p>
                </Container>
            </AddCardButton>
        </ColumnWrapper>
    )
};

export default Column;