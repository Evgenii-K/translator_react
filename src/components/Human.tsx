import React, { FC } from 'react';
import styled from 'styled-components'

const Container = styled.div
`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 196px;
  position: relative;
  justify-content: end;
`

const Circle = styled.div
`
  width: 114px; 
  height: 114px;
  background: #6C6C6C;
  border-radius: 50%;
  top: 20px;
  top: 0px;
  position: absolute;
`
const HalfCircle = styled.div
`
  width: 186px;
  height: 83px;
  border-radius: 50% 50% 0 0 / 100% 100% 0 0;
  background: #6C6C6C;
`

const BottomCircle = styled.div
`
  width: 186px;
  height: 10px;
  border-radius: 10px 10px 0 0 / 100% 100% 0 0;
  background: #6C6C6C;
  transform: rotate(180deg);
`

const Human:FC = () => {
  return (
    <Container>
      <Circle/>
      <HalfCircle/>
      <BottomCircle/>
    </Container>
  );
};

export default Human;