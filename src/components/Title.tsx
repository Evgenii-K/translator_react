import React, {FC} from 'react';
import styled from 'styled-components'

const Heading = styled.h1
`
  font-weight: 400;
  font-size: 36px;
  color: #252525;
  line-height: 42px;
  text-shadow: -2px -4px 3px #FFFFFF, 2px 4px 3px rgba(0, 0, 0, 0.25);
`

const Title:FC = () => {
  return (
    <Heading>
      Translate this sentence
    </Heading>
  );
};

export default Title;