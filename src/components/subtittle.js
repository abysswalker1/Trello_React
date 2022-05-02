import React from 'react';
import styled from 'styled-components'

const RegularTittle = styled.p`
    font-size: ${props => props.font || 'inherit'};
    color: ${props => props.color || 'inherit'};
    display: inline;
`

function Subtittle(props) {
    return (
        <RegularTittle {...props}>
            {props.children}
        </RegularTittle>
    );
}

export default Subtittle;