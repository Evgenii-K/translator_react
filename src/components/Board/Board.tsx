import React, { FC, useCallback, useState } from 'react';
import { useDrop } from 'react-dnd';
import styled from 'styled-components'
import Word from '../Word/Word'
import { WordTypes, IWords, WordProps } from '../../models/WordTypes';
import update from 'immutability-helper'

const Container = styled.div
`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 10px;
  margin-bottom: 30px;
  border: 2px solid red;
  padding: 20px;
`

const Wrapper = styled.div
`
  width: 100%
`

const Board:FC = () => {

  const [{isOver}, drop] = useDrop(() => ({
    accept: WordTypes.WORD,
    drop: (item: IWords, monitor) => {
      // console.log('currentItem ', item);
      // console.log(monitor);
      // console.log(monitor.didDrop());
      // console.log('isOverCurrent: ', monitor.isOver({ shallow: true }));
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
    }),
  }))

  const [inOrder, setInOrder] = useState([
    {id: 1, text: 'She'},
    {id: 2, text: 'is'},
    {id: 3, text: 'eating'},
    {id: 4, text: 'an'},
    {id: 5, text: 'apple'},
    {id: 6, text: 'and'},
    {id: 7, text: 'they'},
    {id: 8, text: 'are'},
    {id: 9, text: 'eating'},
    // {id: 10, board: 2, order: 10, text: 'bread'},
  ])

  const [currentWord, setCurrentWord] = useState({} as IWords)

  const [randomWords, setRandomWords] = useState([] as IWords[])

  // const sortWords = (a: IWords, b: IWords) => {
  //   if (a.order > b.order) {
  //     return 1
  //   }
  //   return -1
  // }

  const findCard = useCallback(
    (id: string) => {
      const card = inOrder.filter((c) => `${c.id}` === id)[0]
      return {
        card,
        index: inOrder.indexOf(card),
      }
    },
    [inOrder],
  )

  const moveCard = useCallback(
    (id: string, atIndex: number) => {
      const { card, index } = findCard(id)
      setInOrder(
        update(inOrder, {
          $splice: [
            [index, 1],
            [atIndex, 0, card],
          ],
        }),
      )
    },
    [findCard, inOrder, setInOrder],
  )

  return (
    <Wrapper ref={drop}>
      <Container
        ref={drop}
        role={'sorted'}
      >
        {inOrder.map(word => 
          <Word
            key={word.id}
            text={word.text}
            id={word.id}
            // order={word.order}
            // board={word.board}
            moveCard={moveCard}
            findCard={findCard}
          />

        )}
      </Container>
      <Container
        ref={drop}
        role={'random'}
      >
        {randomWords.map(word => 
          <Word
            key={word.id}
            text={word.text}
            id={word.id}
            moveCard={moveCard}
            findCard={findCard}
          />
        )}
      </Container>
    </Wrapper>
    
  );
};

export default Board;