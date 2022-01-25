import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div
`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  grid-gap: 9px;
  height: 77px;
  width: 482px;
`

const ShadowBox = styled.div
`
  width: 70px;
  height: 30px;
  background: #E6E6E6;
  box-shadow: inset 0px 8px 4px -6px rgba(0, 0, 0, 0.25);
  border-radius: 13px;
`

const CountOfShadowBox = (count: number) => {
  console.log(Array.from({length: Math.ceil(count/6) * 6}, (v, k) => k).length);
  return Array.from({length: Math.ceil(count/6) * 6}, (v, k) => k)
}

interface PropsShadow {
  count: number
}

const Shadow:FC<PropsShadow> = ({count}) => {
  return (
    <Wrapper>
      {CountOfShadowBox(count).map(key => (
        <ShadowBox
          key={key}
        />
      ))}
    </Wrapper>
  );
};

export default Shadow;