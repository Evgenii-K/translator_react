import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div
`
  display: inline-block;
  border-bottom: 1px dashed black;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  // margin: 0px 0px 10px 10px;

  // &:not(:last-childe) {
  //   margin: 0px 0px 10px 10px;
  // }
`

interface IWord {
  word: string
}

const Word:FC<IWord> = ({word}) => {
  return (
    <Wrapper>
      {word}
    </Wrapper>
  );
};

export default Word;