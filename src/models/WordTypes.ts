export const WordTypes = {
  WORD: 'word',
}

export interface IWords {
  id: number,
  // board: number,
  // order: number,
  text: string
}

export interface WordProps extends IWords {
  moveCard: (id: string, to: number) => void
  findCard: (id: string) => { index: number }
}

export interface ITasks {
  _id: string,
  board: string,
  index: string,
  order: string,
  text: string,
}

export interface ITasksProps extends ITasks {
  moveCard: (id: string, to: number) => void
  findCard: (id: string) => { index: number }
}
