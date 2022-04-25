import React from 'react';
import styled from 'styled-components';
import Container from './components/container';
import Column from './components/column/column';

const DeskWrapper = styled.div`
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 2px 3px 12px #6b6d77;
  height: 600px;
  width: 100%;
  max-width: 1300px;
`;

export default function App() {
  return (
    <Container height="100vh">
      <DeskWrapper>
        <Container height="100%" justify="flex-start" align="flex-start" margin="40px">
          <Column tittle="TODO"/>
          <Column tittle="in progress"/>
          <Column tittle="testing"/>
          <Column tittle="Done!"/>
        </Container >
      </DeskWrapper>
    </Container>
  );
}
