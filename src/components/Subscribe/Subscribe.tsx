import React, { FC } from 'react';
import styled from 'styled-components'

const Block = styled(
  styled.div({
    border: '2px solid #252525',
    borderRadius: '10px',
    padding: '20px',
    position: 'relative',
    alignSelf: 'flex-start'
  })
)
`
  &::before {
    content: '';
    position: absolute;
    left: -20px;
    bottom: 4px;
    border: 10px solid transparent;
    border-right: 10px solid #252525;
    border-bottom: 10px solid #252525;
   }
  &::after {
    content: '';
    position: absolute;
    left: -17px;
    border: 10px solid transparent;
    border-right: 10px solid #E5E5E5;
    border-bottom: 10px solid #E5E5E5;
    bottom: 4px;
    transform: scale(0.7);
   }
`

const Subscribe:FC = () => {
  return (
    <Block>
      She is eating apple and they are eating bread
    </Block>
  );
};

export default Subscribe;