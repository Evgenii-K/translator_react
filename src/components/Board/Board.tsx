import React, { FC, useState } from 'react';
import styled from 'styled-components'

const Container = styled.div
`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 10px;
`

const Wrapper = styled.div
`
  width: 100%
`

const Word = styled.div
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

interface IWords {
  id: number,
  board: number,
  order: number,
  text: string
}

const Board:FC = () => {

  const [inOrder, setInOrder] = useState([
    {id: 1, board: 1, order: 1, text: 'She'},
    {id: 2, board: 1, order: 2, text: 'is'},
    {id: 3, board: 1, order: 3, text: 'eating'},
    {id: 4, board: 1, order: 4, text: 'an'},
    {id: 5, board: 1, order: 5, text: 'apple'},
    {id: 6, board: 1, order: 6, text: 'and'},
    {id: 7, board: 1, order: 7, text: 'they'},
    {id: 8, board: 1, order: 8, text: 'are'},
    {id: 9, board: 1, order: 9, text: 'eating'},
    {id: 10, board: 1, order: 10, text: 'bread'},
  ])

  const [currentWord, setCurrentWord] = useState({} as IWords)

  const [randomWords, setRandomWords] = useState([
    {id: 1, board: 2, order: 1, text: 'She'},
    {id: 2, board: 2, order: 2, text: 'is'},
    {id: 3, board: 2, order: 3, text: 'eating'},
    {id: 4, board: 2, order: 4, text: 'an'},
    {id: 5, board: 2, order: 5, text: 'apple'},
    {id: 6, board: 2, order: 6, text: 'and'},
    {id: 7, board: 2, order: 7, text: 'they'},
    {id: 8, board: 2, order: 8, text: 'are'},
    {id: 9, board: 2, order: 9, text: 'eating'},
    {id: 10, board: 2, order: 10, text: 'bread'},
  ])

  function onDragStartHandler(e: React.DragEvent<HTMLDivElement>, word: IWords): void {
    console.log('word', word);
    // setCurrentWord(word)
  }

  function onDragLeaveHandler(e: React.DragEvent<HTMLDivElement>): void {
  }
  
  function onDragEndHandler(e: React.DragEvent<HTMLDivElement>): void {
  }
  
  function onDragOverHandler(e: React.DragEvent<HTMLDivElement>): void {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move"
  }
  
  function onDropHandler(e: React.DragEvent<HTMLDivElement>, word: IWords): void {
    e.preventDefault()
    console.log('drop', word);

    // if (currentWord.board === 1 && word.board === 1) {
    //   setInOrder(inOrder.map(w => {
    //     if(w.id === word.id) {
    //       return {...w, order: currentWord.order}
    //     }
    //     if(w.id === currentWord.id) {
    //       return {...w, order: word.order}
    //     }
    //     return w
    //   }))
    // }

    // if (currentWord.board === 1 && word.board === 2) {
    //   setCurrentWord({...currentWord, board: 2})
    //   setRandomWords([...randomWords, currentWord])
    //   setInOrder(inOrder.map(w => {
    //     if(w.id === word.id) {
    //       return {...w, order: currentWord.order}
    //     }
    //     if(w.id === currentWord.id) {
    //       return {...w, order: word.order}
    //     }
    //     return w
    //   }))
    // }
    // // cur - board 1 ; word - board 2
    
    // if(word.order === 2) {
    //   setInOrder(inOrder.map(w => {
    //     if(w.id === word.id) {
    //       return {...w, order: currentWord.order}
    //     }
    //     if(w.id === currentWord.id) {
    //       return {...w, order: word.order}
    //     }
    //     return w
    //   }))
    // } else {

    // }

    // setCurrentWord({} as IWords)
    

  }

  const sortWords = (a: IWords, b: IWords) => {
    if (a.order > b.order) {
      return 1
    }
    return -1
  }

  return (
    <Wrapper>
      <Container>
      {inOrder.sort(sortWords).map(word => 
        <Word
          onDragStart={(e) => onDragStartHandler(e, word)}
          onDragLeave={(e) => onDragLeaveHandler(e)}
          onDragEnd={(e) => onDragEndHandler(e)}
          onDragOver={(e) => onDragOverHandler(e)}
          onDrop={(e) => onDropHandler(e, word)}
          draggable={true}
        >
          {word.text}
        </Word>
      )}
    </Container>
    <Container>
      {randomWords.map(word => 
        <Word
          key={word.id}
          onDragStart={(e) => onDragStartHandler(e, word)}
          onDragLeave={(e) => onDragLeaveHandler(e)}
          onDragEnd={(e) => onDragEndHandler(e)}
          onDragOver={(e) => onDragOverHandler(e)}
          onDrop={(e) => onDropHandler(e, word)}
          draggable={true}
        >
          {word.text}
        </Word>
      )}
    </Container>
    </Wrapper>
    
  );
};

export default Board;