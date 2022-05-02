import React, { useEffect } from 'react';
import styled from 'styled-components';
import ColumnTittle from './columnTittle';
import Card from '../card';
import AddCard from './addCard';
import { Context } from '../../Context';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ColumnWrapper = styled.div`
  padding: 16px;
  background-color: #cdd0df;
  width: 250px;
  margin-right: 16px;
`;

function Column(props) {
  const [tittle, setTittle] = React.useState(props.tittle);
  const [cards, setCards] = React.useState(JSON.parse(window.localStorage.getItem(`${tittle}`)) || []);
  const { cardData, openCardWindow } = React.useContext(Context);

  let previousCards = Object.assign([], cards);

  const updateCards = (value) => {
    if (value) {
      previousCards.push({
        id: Math.random(),
        text: value,
        column: tittle,
        description: '',
        comments: [],
      });
      setCards(previousCards);
    }
  };

  const removeCard = (num) => {
    previousCards.splice(num, 1);
    setCards(previousCards);
  };

  const acceptTittle = (value) => {
    if (value) setTittle(value);
  };

  const updateItem = (prevItem, item) => {
    let itemIndex = previousCards.indexOf(prevItem)
    previousCards.splice(itemIndex, 1, item);
    setCards(previousCards);
  }

  useEffect(() => {
    setCards(JSON.parse(window.localStorage.getItem(`${tittle}`)));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(`${tittle}`, JSON.stringify(cards));
    console.log(cards)
  }, [cards]);

  return (
    <ColumnWrapper>
      <ColumnTittle tittle={tittle} tittleFunc={acceptTittle} />
      {cards.map((item, index) => {
        return (
          <Card
            key={index + ' '}
            item={item}
            openFunction={openCardWindow}
            deliteFunction={() => removeCard(index)}
            cardData={cardData}
            updateItem={updateItem}
          />
        );
      })}
      <AddCard func={updateCards} cards={cards} />
    </ColumnWrapper>
  );
}

export default Column;
