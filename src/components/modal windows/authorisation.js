import React from 'react';
import styled from 'styled-components'
import Subtittle from '../subtittle';
import Popup from '../popup'
import AcceptButton from '../acceptButton'
import { Context } from '../../Context';

const AuthorInput = styled.input`
    width: 100%;
    padding: 8px 10px;
    font-size: 18px;
    margin: 20px 0;
`
let authorInputValue;

function Authorisation() {
    const { acceptAuthor, author } = React.useContext(Context)

    return (
        <Popup height = '400px' active = {author ? true : false}>
            <h1>Введите ваше имя</h1>
            <AuthorInput placeholder='ваше имя' onChange={(e) => authorInputValue = e.target.value}/>
            <AcceptButton font='16px' onClick={() => acceptAuthor(authorInputValue)}>
                Продолжить
            </AcceptButton>
        </Popup>
    );
}

export default Authorisation;