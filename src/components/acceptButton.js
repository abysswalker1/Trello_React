import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
    padding : ${props => props.padding || '5px 7px'};
    font-size : ${props => props.font || '12px'};
    margin: ${props => props.margin || '0 5px'};
    background-color: #4361ee;
    border-radius: 2px;
` 

function AcceptButton(props) {

    return (
       <Button {...props}>
           {props.children}
       </Button>
    );
}

export default AcceptButton;