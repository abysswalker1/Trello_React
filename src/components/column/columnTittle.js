import React from 'react';
import Container from '../container'
import styled from 'styled-components';
import "bootstrap-icons/font/bootstrap-icons.css";
import AcceptButton from '../acceptButton'

const TittleBtn = styled.button`
    padding : 2px 10px;
    margin-left: 5px;
    background-color: #4361ee;
    border-radius: 2px;
` 

let nextTittle;

const ColumnTittle = ({tittle, tittleFunc}) => {
    const [changing, setChanging] = React.useState(false)
    
    const changeForm = (value) => {
        setChanging(value)
    }

    const changeTittle = () => {
        tittleFunc(nextTittle)
        changeForm(false)
    }

    return (
        <div>
            <Container height = '20px' justify="space-between" margin='0 0 10px 0   ' display = {changing ? 'none' : 'flex'}>
                <p>{tittle}</p>
                <button onClick={() => changeForm(true)}>
                    <i className="bi bi-pencil-square"></i>
                </button>
            </Container>
            <Container height = '20px' justify="flex-start" display = {changing ? 'flex' : 'none'}>
                <input onChange={(e) => nextTittle = e.target.value}/>
                <AcceptButton value = {false} onClick={changeTittle} padding='3px 5px'>
                    <i className="bi bi-check"></i>
                </AcceptButton>
            </Container>
        </div>
    );
};

export default ColumnTittle;