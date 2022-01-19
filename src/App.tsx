import React, { FC, useState } from 'react'
import Title from './components/Title/Title'
import Subscribe from './components/Subscribe/Subscribe'
import styled from 'styled-components'
import Human from './components/Human/Human'
import Board from './components/Board/Board'

const Wrapper = styled.div
`
  background: #E5E5E5;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

const Container = styled.div
`
  width: 482px;
`

const Dialog = styled.div
`
  display: flex;
  grid-gap: 20px;
  padding: 50px 0;
`

const WordsContainer = styled.div
`
  display: flex;
  flex-wrap: wrap;
`


const App:FC = () => {
  return (
    <Wrapper>
      <Container>
        <Title/>
        <Dialog>
          <Human/>
          <Subscribe/>
        </Dialog>
        <Board/>
        <WordsContainer>
        </WordsContainer>
      </Container>
    </Wrapper>

  )
}

export default App;



