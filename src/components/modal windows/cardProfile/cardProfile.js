import React from 'react';
import styled from 'styled-components'
import Popup from '../../popup'
import { Context } from '../../../Context'
import Subtittle from '../../subtittle'
import CardDescription from './card components/cardDescription'
import 'bootstrap-icons/font/bootstrap-icons.css'
import CardComments from './card components/cardComments'
import CardText from './card components/cardText'


function CardProfile() {
    const { cardData, openCardWindow, author } = React.useContext(Context)

    let newCardData = Object.assign({}, cardData)

    const addNewCardName = (value) => {
        newCardData.text = value
        openCardWindow(newCardData)
    }

    const addNewDescription = (value) => {
        newCardData.description = value
        openCardWindow(newCardData)
    }

    const addNewCommentList = (value) => {
        newCardData.comments = value
        openCardWindow(newCardData)
    }

    if (!cardData) {
        return null
    } 

    return (
        <Popup active = {false} onClick={() => openCardWindow(null)}>
            <Subtittle color = 'grey' font = '16px'>{cardData.column}</Subtittle>
            <CardText name = {cardData.text} func={addNewCardName} />
            <Subtittle font='18px'>{`автор : ${author}`}</Subtittle>
            <CardDescription description={cardData.description} func={addNewDescription}/>
            <Subtittle>Комментарии</Subtittle>
            <CardComments author={author} list={cardData.comments} func={addNewCommentList}/>
        </Popup>
    );
}

export default CardProfile;