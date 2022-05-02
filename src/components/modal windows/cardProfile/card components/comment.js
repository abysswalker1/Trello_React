import React from 'react';
import styled from 'styled-components';
import Container from '../../../container';

const AuthorAvatar = styled.div`
    background: ${props => props.image || 'grey'};
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin-right: 10px;
`

function Comment({ item, deliteFunction }) {

    return (
        <Container justify='space-between' margin='10px 0'>
             <Container justify={'flex-start'} align="flex-start">
                <AuthorAvatar />
                <div>
                    <p>{item.author}</p>
                    <p>{item.text}</p>
                </div>
            </Container>
            <i className="bi bi-x-lg" onClick={() => deliteFunction(item)}></i>
        </Container>
    );
}

export default Comment;