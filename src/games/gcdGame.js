import gameEngine from '..';
import { getRandomNum, gcd } from '../utils';

const task = 'Find the greatest common divisor of given numbers.';
const gameGcd = () => {
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);
  const question = `${num1} ${num2}`;
  const rightAnswer = gcd(num1, num2);
  return { question, rightAnswer };
};
export default () => gameEngine(gameGcd, task);
