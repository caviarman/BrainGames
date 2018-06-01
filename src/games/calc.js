import gameEngine from '..';
import getRandomNum from '../utils';

const sum = (num1, num2) => num1 + num2;
const minus = (num1, num2) => num1 - num2;
const multi = (num1, num2) => num1 * num2;
const operators = ['+', '-', '*'];
const actions = [sum, minus, multi];
const task = 'What is the result of the expression?';
const gameCalc = () => {
  const num1 = getRandomNum(1, 10);
  const num2 = getRandomNum(1, 10);
  const index = getRandomNum(0, 2);
  const question = `${num1} ${operators[index]} ${num2}`;
  const rightAnswer = String(actions[index](num1, num2));
  return { question, rightAnswer };
};
export default () => gameEngine(gameCalc, task);
