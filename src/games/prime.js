import gameEngine from '..';
import getRandomNum from '../utils';

const task = 'Is this number prime?';
const isPrime = (number) => {
  if (number < 2) return false;
  const iter = (acc) => {
    if (acc > number / 2) return true;
    if (number % acc === 0) return false;
    return iter(acc + 1);
  };
  return iter(2);
};
const gamePrime = () => {
  const question = getRandomNum(2, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, rightAnswer };
};
export default () => gameEngine(gamePrime, task);
