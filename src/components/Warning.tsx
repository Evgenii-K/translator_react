import React, { FC } from 'react';
import styled from 'styled-components';

const WarningMessage = styled.div
`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #FF0000;
  text-shadow: -1px -2px 2px #FFFFFF, 1px 2px 2px rgba(91, 13, 13, 0.5);
  text-align: center;
  margin-bottom: 27px;
`

interface WarningMessageProps {
  message: string
}

const Warning:FC<WarningMessageProps> = ({message}) => {
  return (
    <WarningMessage>
      {message}
    </WarningMessage>
  );
};

export default Warning;