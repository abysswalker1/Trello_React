import React from 'react';
import styled from 'styled-components'
import Container from '../../../container'
import AcceptButton from '../../../acceptButton'
import 'bootstrap-icons/font/bootstrap-icons.css'

const DescriptionWrapper = styled.div`
    min-width: 700px;
    margin: 30px 7px;
`

const DescriptionInput = styled.textarea`
    width: 100%;
    min-height: 70px;
    padding: 5px 10px;
    transform: scale(${props => props.active ? 0 : 1});
`

const DescriptionText = styled.div`
    max-width: 700px;
    min-width: 150px;
    padding : 10px;
    background-color: #faedcd; 
    transform: scale(${props => props.active ? 1 : 0});
`

const ChangeButton = styled.button`
    padding: 2px 5px;
    background-color: #83c5be;
    transform: scale(${props => props.active ? 1 : 0});
    margin: 0 10px;
`

let initialDescription;

function СardDescription(props) {
    const [description, setDescription] = React.useState(props.description)
    const [changing, setChanging] = React.useState(description ? true : false)

     const addDescription = (value) => {
         if(value){
             setDescription(value)
             props.func(value)
             setChanging(true)
         }
     }

    return (
        <DescriptionWrapper>
            <Container justify='flex-start' align='flex-end' margin='0 0 10px 0'>
                <p>Описание</p>
                <ChangeButton active={changing} onClick={() => setChanging(false)}>Изменить</ChangeButton>
            </Container>
            <Container column={true} display={!changing ? 'flex' : 'none'} align="flex-start">
                <DescriptionInput onChange={(e) => initialDescription = e.target.value} active={changing}/>
                <Container justify="flex-start" margin="10px 0" width="500px">
                    <AcceptButton onClick={() => addDescription(initialDescription)} margin='0'>
                        Добавить
                    </AcceptButton>
                </Container>
            </Container>
            <Container display={changing ? 'flex' : 'none'} justify={'flex-start'}>
                <DescriptionText active = {changing}>
                    <p>{description}</p>
                </DescriptionText>
            </Container>
        </DescriptionWrapper>
    );
}

export default СardDescription;