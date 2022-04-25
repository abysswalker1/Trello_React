import React from 'react';
import styled from 'styled-components';

const FelxContainer = styled.div`
    display: ${props => props.display || 'flex'};
    flex-direction: ${props => props.column ? 'column' : 'row'};
    justify-content: ${props => props.justify || 'center'};
    align-items: ${props => props.align || 'center'};
    height: ${props => props.height || 'none'};
    width: ${props => props.width || '100%'};
    margin ${props => props.margin || '0'};
    padding ${props => props.padding || '0'};
`

const Container = (props) => {
    return (
        <FelxContainer {...props} />
    );
};

export default Container;