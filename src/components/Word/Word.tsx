import React, { FC } from 'react';
import styled from 'styled-components'

const Wrapper = styled.div
`
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

interface InputWord {
  word: string
}

const Word:FC<InputWord> = ({word}) => {
  return (
    <Wrapper
      draggable={true}
    >
      {word}
    </Wrapper>
  );
};

export default Word;