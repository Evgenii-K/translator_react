import React, { FC, useContext } from 'react';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';
import { ITasks, WordTypes } from '../models/WordTypes';
import { CardContext } from './Tasks';

const Container = styled.div
`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 9px;
  margin-bottom: 46px;
  padding: 6px;
  height: 77px;
`

const BoardRandom:FC = (props) => {

  const { markAsDone } = useContext(CardContext)

  const [, drop] = useDrop({
    accept: WordTypes.WORD,
    drop: (item: ITasks, monitor) => {
      if(item.board === 'random') return
      markAsDone(item._id, 'random', '0')
    },
  })

  return (
    <Container
      ref={drop}
    >
      {props.children}
    </Container>
  );
};

export default BoardRandom;