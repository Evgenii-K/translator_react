import React, { FC } from 'react';
import styled from 'styled-components';

const ButtonBox = styled.div
`
  background: linear-gradient(91.2deg, #FFFFFF 0%, #F2F2F2 100%);
  box-shadow: -2px -4px 12px #FFFFFF, 2px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 88px;
  width: 100%;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #000000;
  padding: 23px;
  box-sizing: border-box;
  cursor: pointer;

  &:active {
    background: linear-gradient(91.2deg, #FFFFFF 0%, #F2F2F2 100%);
    box-shadow: inset -2px -4px 12px #FFFFFF, inset 2px 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 88px;
  }
`

interface CheckButtonProps {
  onClick: () => void
}

const CheckButton:FC<CheckButtonProps> = ({onClick}) => {
  return (
    <ButtonBox
      onClick={onClick}
    >
      Check
    </ButtonBox>
  );
};

export default CheckButton;