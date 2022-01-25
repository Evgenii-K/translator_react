import React, { createContext, FC, useCallback, useState } from 'react';
import { WordTypes, ITasks } from '../models/WordTypes'
import styled from 'styled-components'
import WordCard from './WordCard';
import { useDrop } from 'react-dnd';
import BoardRandom from './BoardRandom';
import update from 'immutability-helper'
import { randomPhraseToTranslate, phraseToTranslate } from '../mocks/Strings'
import Shadow from './Shadow';
import Warning from './Warning';
import CheckButton from './CheckButton';

const BoardSorted = styled.div
`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 9px;
  margin-bottom: 46px;
  padding: 6px;
  background: linear-gradient( #4B4B4B, transparent 1px);
  background-size: 46px 44px;
  background-position: top;
  height: 77px;
  position: relative;
`

export const CardContext = createContext({ 
  markAsDone: (_id: string, type: string, order: string): void => undefined 
})


const Tasks:FC = () => {

  const synth = window.speechSynthesis;

  const [show, setShow] = useState('')

  const [taskList, setTaskList] = useState(randomPhraseToTranslate)

  const markAsDone = (_id:string, type: string, order: string): void => {
    setShow('')
    const task: ITasks[] = taskList.filter(task => task._id === _id)
    task[0].board = type
    task[0].order = order
    setTaskList(taskList.filter(task => task._id !== _id).concat(task[0]))
  }

  const findCard = useCallback(
    (id: string) => {
      const card = taskList.filter((c) => c._id === id)[0]
      return {
        card,
        index: taskList.indexOf(card),
      }
    },
    [taskList],
  )

  const moveCard = useCallback(
    (id: string, atIndex: number) => {
      const { card, index } = findCard(id)
      setTaskList(
        update(taskList, {
          $splice: [
            [index, 1],
            [atIndex, 0, card],
          ],
        }),
      )
    },
    [findCard, taskList, setTaskList],
  )

  const [, drop] = useDrop({
    accept: WordTypes.WORD,
    drop: (item: ITasks, monitor) => {
      if(item.board === 'sorted') return
      const lastOrder = taskList
        .filter(item => item.board === 'sorted')
        .length.toString()
      markAsDone(item._id, 'sorted', lastOrder)
    },
  })

  const sortWordsByIndex = (a: ITasks, b: ITasks) => {
    if (a.index > b.index) {
      return 1
    }
    return -1
  }

  const check = () => {
    const checkedWord = taskList
      .filter(item => item.board === 'sorted')
      .map(item => item.text).join(' ')
    if(checkedWord !== phraseToTranslate.english) {
      setShow('Something wrong!')
    } else {
      const textToSpeech = new SpeechSynthesisUtterance(checkedWord)
      synth.speak(textToSpeech)
    }
  }

  return (
    <CardContext.Provider value={{markAsDone}}>
      <BoardSorted
        ref={drop}
      >
        {taskList
          .filter(task => task.board === 'sorted')
          .map(task => (
            <WordCard
              key={task._id}
              _id={task._id}
              board={task.board}
              index={task.index}
              order={task.order}
              text={task.text}
              findCard={findCard}
              moveCard={moveCard}
            />
          ))
        }
      </BoardSorted>
      <BoardRandom>
        <Shadow
          count={randomPhraseToTranslate.length}
        />
        {taskList
          .filter(task => task.board === 'random')
          .sort(sortWordsByIndex)
          .map(task => (
            <WordCard
              key={task._id}
              _id={task._id}
              board={task.board}
              index={task.index}
              order={task.order}
              text={task.text}
              findCard={findCard}
              moveCard={moveCard}
            />
          ))
        }
      </BoardRandom>
      <Warning
        message={show}
      />
      <CheckButton
        onClick={check}
      />
    </CardContext.Provider>
  );
};

export default Tasks;