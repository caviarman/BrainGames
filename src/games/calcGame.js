import { getRandomNum, gameEngine } from '..';

const sum = (num1, num2) => num1 + num2;
const minus = (num1, num2) => num1 - num2;
const multi = (num1, num2) => num1 * num2;
const operator = ['+', '-', '*'];
const action = [sum, minus, multi];
const task = 'What is the result of the expression?';
const logicOfCalculatorGame = () => {
  const num1 = getRandomNum(1, 10);
  const num2 = getRandomNum(1, 10);
  const index = getRandomNum(0, 2);
  const question = `${num1} ${operator[index]} ${num2}`;
  const rightAnswer = action[index](num1, num2);
  return { question, rightAnswer };
};
export default () => gameEngine(logicOfCalculatorGame, task);
