import gameEngine from '..';
import getRandomNum from '../utils';

const task = 'What number is missing in this progression?';
const size = 10;
const gameBalance = () => {
  const indexForArr = getRandomNum(0, 9);
  const arr = [];
  let startPoint = getRandomNum(-10, 99);
  const stepOfProgression = getRandomNum(-99, 99);
  for (let i = 0; i < size; i += 1) {
    arr[i] = startPoint + (stepOfProgression * i);
    startPoint += stepOfProgression;
  }
  const rightAnswer = String(arr[indexForArr]);
  arr[indexForArr] = '..';
  const question = arr.join(' ');
  return { question, rightAnswer };
};
export default () => gameEngine(gameBalance, task);
