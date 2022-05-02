import React, { useEffect } from 'react';
import styled from 'styled-components';
import Container from './components/container';
import Column from './components/column/column';
import Authorisation from './components/modal windows/authorisation'
import CardProfile from './components/modal windows/cardProfile/cardProfile'
import { Context } from './Context'


const DeskWrapper = styled.div`
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 2px 3px 12px #6b6d77;
  height: 600px;
  width: 100%;
  max-width: 1300px;
`;

export default function App() {
  const [author, setAuthor] = React.useState('');
  const [cardData, setCardData] = React.useState();

  const acceptAuthor = (value) => {
   if (value) setAuthor(value)
  }

  const openCardWindow = (value) => {
      setCardData(value)
  }

  useEffect(() => {
    setAuthor(window.localStorage.getItem('author'));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('author', author);
  }, [author]);

  return (
    <Context.Provider value = {{ acceptAuthor, author, openCardWindow, cardData }} >
      <Container height="100vh">
        <DeskWrapper>
          <Container height="100%" justify="flex-start" align="flex-start" margin="40px">
            <Column tittle="TODO" />
            <Column tittle="in progress" />
            <Column tittle="testing" />
            <Column tittle="Done!" />
          </Container>
        </DeskWrapper>
      </Container>
      <Authorisation />
      <CardProfile /> 
    </Context.Provider>
  );
}
