import React from 'react';
import styled from 'styled-components';
import ColumnTittle from './columnTittle';
import Card from '../card';
import AddCard from './addCard';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ColumnWrapper = styled.div`
  padding: 16px;
  background-color: #cdd0df;
  width: 250px;
  margin-right: 16px;
`;

function Column(props) {
  const [cards, setCards] = React.useState([]);

  let previousCards = Object.assign([], cards);

  const updateCards = (value) => {
    if (value) {
      previousCards.push({
        text: value,
      });
      setCards(previousCards);
    }
  };

  return (
    <ColumnWrapper>
      <ColumnTittle tittle={props.tittle} />
      {cards.map((item) => {
        return <Card text={item.text} />;
      })}
      <AddCard func={updateCards} cards = {cards}/>
    </ColumnWrapper>
  );
}

export default Column;
