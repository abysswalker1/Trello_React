import React from 'react';
import styled from 'styled-components'
import Container from './container'

const Modal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    transform: scale(${props => props.active ? 0 : 1});
`

const ModalWindow = styled.div`
    display: fixed;
    border-radius: 16px;
    background-color: #fff;
    box-shadow: 2px 3px 12px #6b6d77;
`

function Popup(props) {
    return (
        <Modal {...props}>
            <ModalWindow onClick = {(e) => e.stopPropagation()}>
                <Container column={true} padding='20px' justify='flex-start' align='flex-start'>
                    {props.children}
                </Container>
            </ModalWindow>
        </Modal>
    );
}

export default Popup;