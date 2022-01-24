import {ITasks} from '../models/WordTypes'

export const fraz = 'She is eating apple and they are eating bread'

export const lang = fraz
  .split(' ')
  .map((item, key) => {
    return {
      _id: (Math.random()*100).toFixed() + key.toString(),
      board: 'random',
      index: key.toString(),
      order: '0',
      text: item
    }
  }) as ITasks[]