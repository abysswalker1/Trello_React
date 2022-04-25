import React, { useEffect } from 'react';
import Container from '../container';
import styled from 'styled-components';
import Button from '../button';
import "bootstrap-icons/font/bootstrap-icons.css";

const AddCardButton = styled.button`
    width: 100%;
    padding: 6px;
    display: ${props => props.enable ? 'none' : 'flex'};
    &:hover {
        background-color: #457b9d;
    }
`

const CardName = styled.textarea`
    width: 100%;
`

const AddCard = (props) => {
    const [active, setActive] = React.useState(false)
    const [name, setName] = React.useState('')

    const openForm = (value) => {
        setActive(value)
    }

    useEffect(() => {
        openForm(false)
    },[props.cards])

    return (
        <div>
            <AddCardButton enable = {active} onClick={() => openForm(true)}>
                <i className="bi bi-plus-lg"></i>
                <p style ={{ marginLeft : '7px' }}>Добавить карту</p>
            </AddCardButton>
            <Container display={!active ? 'none' : 'block'}>
                <CardName onChange = {(e) => setName(e.target.value)}/>
                <Container justify="flex-start">
                    <Button func = {props.func} value={name}>Добавить</Button>
                    <button>
                        <i className="bi bi-x-lg"></i>
                    </button>
                </Container>
            </Container>
        </div>
    );
};

export default AddCard;