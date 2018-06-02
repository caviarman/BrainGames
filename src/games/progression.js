import gameEngine from '..';
import getRandomNum from '../utils';

const task = 'What number is missing in this progression?';
const size = 10;
const sum = (num1, num2) => num1 + num2;
const minus = (num1, num2) => num1 - num2;
const multi = (num1, num2) => num1 * num2;
const actions = [sum, minus, multi];
const getQuestion = (arr, index) => {
  const newArr = arr;
  newArr[index] = '..';
  return arr;
};
const indexForAction = getRandomNum(0, 2);
const indexForArr = getRandomNum(0, 9);
const arr = [];

const gameBalance = () => {
  const modifier1 = getRandomNum(2, 50);
  const modifier2 = getRandomNum(10, 99);
  for (let i = 1; i < size + 1; i += 1) {
    arr[i - 1] = actions[indexForAction]((modifier1 * i), modifier2);
  }
  const rightAnswer = String(arr[indexForArr]);
  const question = (getQuestion(arr, indexForArr)).join(' ');
  return { question, rightAnswer };
};
export default () => gameEngine(gameBalance, task);
