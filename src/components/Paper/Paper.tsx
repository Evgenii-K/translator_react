import React, { FC, useState } from 'react';
import styled from 'styled-components'

const Wrapper = styled.div
`
  height: 200px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  grid-gap: 10px;
  justify-content: center;
`

const Container = styled.div
`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%
`

const Line = styled.div
`
  border-bottom: 1px solid #4B4B4B;
  height: 46px;
  width: 100%;
  z-index: -1;
`

const Word = styled.div
`
  z-index: 10;
  width: 70px;
  height: 30px;
  background: #FFFFFF;
  border: 1px solid #C9C9C9;
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

const Paper:FC = () => {

  const [words, setWords] = useState([
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

  return (
    <Wrapper>
      <Container>
        <Line/>
        <Line/>
        <Line/>
      </Container>
      {words.map(word => 
        <Word
          key={word.id}
          draggable={true}
        >
          {word.text}
        </Word>
      )}
    </Wrapper>
  );
};

export default Paper;