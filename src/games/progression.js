import gameEngine from '..';
import getRandomNum from '../utils';

const task = 'What number is missing in this progression?';
const size = 10;
const sum = (num1, num2) => num1 + num2;
const minus = (num1, num2) => num1 - num2;
const actions = [sum, minus];
const getQuestion = (arr, index) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    newArr[i] = arr[i];
  }
  newArr[index] = '..';
  return newArr.join(' ');
};
const gameBalance = () => {
  const indexForAction = getRandomNum(0, 1);
  const indexForArr = getRandomNum(0, 9);
  const arr = [];
  let startPoint = getRandomNum(-10, 99);
  const stepOfProgression = getRandomNum(-99, 99);
  for (let i = 0; i < size; i += 1) {
    arr[i] = actions[indexForAction](startPoint, stepOfProgression);
    startPoint += stepOfProgression;
  }
  const rightAnswer = String(arr[indexForArr]);
  const question = getQuestion(arr, indexForArr);
  return { question, rightAnswer };
};
export default () => gameEngine(gameBalance, task);
