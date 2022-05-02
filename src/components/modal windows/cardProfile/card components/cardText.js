import React from 'react';
import styled from 'styled-components'
import Container from '../../../container'
import Subtittle from '../../../subtittle'
import AcceptButton from'../../../acceptButton'

const PencilIcon = styled.span`
    cursor: pointer; 
    font-size: 20px;
    margin-left: 15px; 
    &:hover {
        color: #4361ee; 
    }
`

const CardNameInput = styled.input`
    width: 80%;
    font-size: 20px;
    padding: 2px 10px;
`

let inputName;

function CardText(props) {
    const [changing, setChanging] = React.useState(false)

    const acceptCardName = (value) => {
        if(value) {
            props.func(value)
        }
        setChanging(false)
    }

    return (
        <div>
            <Container display={changing ? 'none' : 'flex'} margin='10px 0 3px' justify="flex-start" align="center">
                <Subtittle font="40px">
                    {props.name}
                </Subtittle>
                <PencilIcon onClick={() => setChanging(true)}>
                    <i className="bi bi-pencil"></i>
                </PencilIcon>
            </Container>
            <Container display={changing ? 'flex' : 'none'} margin='30px 0' justify="flex-start" align="center">
                <CardNameInput onChange={(e) => inputName = e.target.value}/>
                <AcceptButton padding='6px 10px' font='16px' onClick = {() => acceptCardName(inputName)}>
                    Изменить
                </AcceptButton>
            </Container>
        </div>
    );
}

export default CardText;