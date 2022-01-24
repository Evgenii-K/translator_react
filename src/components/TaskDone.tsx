import React, { FC, useContext } from 'react';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';
import { ITasks, WordTypes } from '../models/WordTypes';
import { CardContext } from './Tasks';

const Container = styled.div
`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 10px;
  margin-bottom: 30px;
  border: 2px solid red;
  padding: 20px;
`

const TaskDone:FC = (props) => {

  const { markAsDone } = useContext(CardContext)

  const [{isOver}, drop] = useDrop({
    accept: WordTypes.WORD,
    drop: (item: ITasks, monitor) => {
      if(item.board === 'random') return
      markAsDone(item._id, 'random', '0')
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  })

  return (
    <Container
      ref={drop}
    >
      <h3>Не сортированные</h3>
      {props.children}
    </Container>
  );
};

export default TaskDone;