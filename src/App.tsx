import React, { FC } from 'react'
import Title from './components/Title'
import Subscribe from './components/Subscribe'
import styled from 'styled-components'
import Human from './components/Human'
import Tasks from './components/Tasks'
import {phraseToTranslate} from './mocks/Strings'

const Wrapper = styled.div
`
  background: #F5F5F5;
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
          <Subscribe
            phrase={phraseToTranslate.russian}
          />
        </Dialog>
        <Tasks/>
      </Container>
    </Wrapper>
  )
}

export default App;



