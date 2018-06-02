import gameEngine from '..';
import getRandomNum from '../utils';

const task = 'Is this number prime?';
const isPrime = (number) => {
  const iter = (item, acc) => {
    if (acc === item) return true;
    if (number % acc === 0) return false;
    return iter(item, acc + 1);
  };
  return iter(number, 2);
};
const gamePrime = () => {
  const question = getRandomNum(2, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, rightAnswer };
};
export default () => gameEngine(gamePrime, task);
