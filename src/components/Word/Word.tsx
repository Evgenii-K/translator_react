import React, { FC } from 'react';
import styled from 'styled-components'
import { useDrag, useDrop } from "react-dnd";
import { WordTypes, IWords, WordProps } from '../../models/WordTypes';

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

interface Item {
  id: string
  originalIndex: number
}

const Word:FC<WordProps> = ({ text, id, moveCard, findCard }) => {

  const originalIndex = findCard(id.toString()).index

  const [{ isDragging }, drag] = useDrag(() => ({
    type: WordTypes.WORD,
    item: {id, originalIndex},
    end: (item, monitor) => {
      const { id: droppedId, originalIndex } = item
      const didDrop = monitor.didDrop()
      if (!didDrop) {
        moveCard(droppedId.toString(), originalIndex)
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId()
    })
  }), [id, originalIndex, moveCard]);

  const [, drop] = useDrop(
    () => ({
      accept: WordTypes.WORD,
      hover({ id: draggedId }: Item) {
        if (draggedId.toString() !== id.toString()) {
          const { index: overIndex } = findCard(id.toString())
          moveCard(draggedId, overIndex)
        }
      },
    }),
    [findCard, moveCard],
  )


  const opacity = isDragging ? 0 : 1;

  return (
    <Wrapper
      ref={(node) => drag(drop(node))}
      role="Box"
      style={{opacity}}
    >
      {text}
    </Wrapper>
  );
};

export default Word;