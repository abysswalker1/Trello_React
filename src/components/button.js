import React from 'react';
import styled from 'styled-components'

const AcceptButton = styled.button`
    padding : 2px 10px;
    margin: 0 5px;
    background-color: #4361ee;
    border-radius: 2px;
` 

function Button(props) {
    const handleClick = () => {
        props.func(props.value)
    }

    return (
       <AcceptButton onClick={() => handleClick()}>
           {props.children}
       </AcceptButton>
    );
}

export default Button;