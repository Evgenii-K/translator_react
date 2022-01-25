import React, { FC } from 'react';
import styled from 'styled-components'
import Word from './Word';

const Block = styled(
  styled.div({
    border: '2px solid #252525',
    borderRadius: '20px',
    borderBottomLeftRadius: '10px',
    padding: '17px',
    position: 'relative',
    alignSelf: 'flex-start',
    display: 'flex',
    flexWrap: 'wrap',
    gridGap: '10px',
  })
)

`
  &::before {
    content: '';
    position: absolute;
    left: -21px;
    bottom: 5px;
    border: 10px solid transparent;
    border-right: 10px solid #252525;
    border-bottom: 10px solid #252525;
  }
  
  &::after {
    content: '';
    position: absolute;
    left: -16px;
    border: 10px solid transparent;
    border-right: 10px solid #F5F5F5;
    border-bottom: 10px solid #F5F5F5;
    bottom: 7px;
  }
`

interface ISubscribe {
  phrase: string
}

const Subscribe:FC<ISubscribe> = ({phrase}) => {

  return (
    <Block>
      {phrase.split(' ').map((word, idx) => (
        <Word
          key={idx}
          word={word}
        />
      ))}
    </Block>
  );
};

export default Subscribe;