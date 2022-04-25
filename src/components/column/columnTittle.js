import React from 'react';
import Container from '../container'
import styled from 'styled-components';
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from '../button'

const TittleBtn = styled.button`
    padding : 2px 10px;
    margin-left: 5px;
    background-color: #4361ee;
    border-radius: 2px;
` 

const ColumnTittle = (props) => {
    const [tittle, setTittle] = React.useState(props.tittle)
    const [changing, setChanging] = React.useState(false)

    const handleInput = (e) => {
        if (e.target.value) {
            setTittle(e.target.value)
        } 
    }
    
    const changeForm = (value) => {
        setChanging(value)
    }

    return (
        <div>
            <Container height = '20px' justify="space-between" display = {changing ? 'none' : 'flex'}>
                <p>{tittle}</p>
                <button onClick={() => changeForm(true)}>
                    <i className="bi bi-pencil-square"></i>
                </button>
            </Container>
            <Container height = '20px' justify="flex-start" display = {changing ? 'flex' : 'none'}>
                <input placeholder = {tittle} onChange={(e) => handleInput(e)}/>
                <Button func = {changeForm} value = {false}>
                    <i className="bi bi-check"></i>
                </Button>
            </Container>
        </div>
    );
};

export default ColumnTittle;