import {ITasks} from '../models/WordTypes'

export const phraseToTranslate = {
  english: 'She is eating apple and they are eating bread', 
  russian: 'Она ест яблоко, а они едят хлеб'
}

export const randomPhraseToTranslate = (function (phrase: string) {
  return shuffle(phrase.split(' '))  
  .map((item, key) => {
    return {
      _id: (Math.random()*100).toFixed() + key.toString(),
      board: 'random',
      index: key.toString(),
      order: '0',
      text: item
    }
  }) as ITasks[]
})(phraseToTranslate.english)

function shuffle<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}
