import React, { createContext, FC, useCallback, useState } from 'react';
import { WordTypes, ITasks } from '../models/WordTypes'
import styled from 'styled-components'
import TaskCard from './TaskCard';
import { useDrop } from 'react-dnd';
import TaskDone from './TaskDone';
import update from 'immutability-helper'
import { lang, fraz } from '../mocks/Strings'

const Container = styled.div
`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 10px;
  margin-bottom: 30px;
  border: 2px solid red; 
  padding: 20px;
  transition: all 1s;
`

export const CardContext = createContext({ 
  markAsDone: (_id: string, type: string, order: string): void => undefined 
})


const Tasks:FC = () => {

  const fraza = 'She eat apple'
  const [show, setShow] = useState('')

  const [taskList, setTaskList] = useState(lang)

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

  const [{isOver}, drop] = useDrop({
    accept: WordTypes.WORD,
    drop: (item: ITasks, monitor) => {
      if(item.board === 'sorted') return
      const lastOrder = taskList
        .filter(item => item.board === 'sorted')
        .length.toString()
      markAsDone(item._id, 'sorted', lastOrder)
      
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
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
    if(checkedWord !== fraz) {
      setShow('Не правильно!')
    } else {
      setShow('Верно!')
    }
  }

  return (
    <CardContext.Provider value={{markAsDone}}>
      <Container
        ref={drop}
      >
        <h3>Сортированные</h3>
        {taskList
          .filter(task => task.board === 'sorted')
          .map(task => (
            <TaskCard
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
      </Container>
      <TaskDone>
        {taskList
          .filter(task => task.board === 'random')
          .sort(sortWordsByIndex)
          .map(task => (
            <TaskCard
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
      </TaskDone>
      <h3>
        {show}
      </h3>
      <button
        onClick={check}
      >
        Проверить
      </button>
    </CardContext.Provider>

  );
};

export default Tasks;