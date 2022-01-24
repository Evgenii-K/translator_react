import React, { FC } from 'react';
import { WordTypes, ITasks, ITasksProps } from '../models/WordTypes';
import styled from 'styled-components'
import { useDrag, useDrop } from 'react-dnd';

const Wrapper = styled.div
`
  z-index:  10;
  width: 70px;
  height: 30px;
  background: ${props => props.hidden ? 'transparent' : '#FFFFFF'};
  border: 1px solid ${props => props.hidden ? 'transparent' : '#C9C9C9'};
  color: ${props => props.hidden ? 'transparent' : ''};
  box-sizing: border-box;
  box-shadow: 0px 8px 4px -6px rgba(0, 0, 0, 0.25);
  border-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  cursor: grab;
`

const TaskCard:FC<ITasksProps> = ({  
  _id, 
  board, 
  index,
  order,
  text,
  moveCard,
  findCard}) => {

  const originalIndex = findCard(_id).index;
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: WordTypes.WORD,
      item: { _id, originalIndex, board },
      collect: (monitor) => ({
        isDragging: monitor.isDragging()
      }),
      end: (item, monitor) => {
        const { _id: droppedId, originalIndex } = item;
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          moveCard(droppedId, originalIndex);
        }
      }
    }),
    [_id, originalIndex, moveCard]
  );

  const [,drop] = useDrop({
    accept: WordTypes.WORD,
    hover: ({_id: draggedId}: ITasks) => {
      if(_id !== draggedId) {
        const { index: overIndex } = findCard(_id)
        moveCard(draggedId, overIndex)
      }
    }
  })

  const opacity = isDragging ? 0 : 1;

  return (
    <Wrapper
      ref={(node) => drag(drop(node))}
      style={{opacity}}
    >
      {text}
    </Wrapper>
  );
};

export default TaskCard;