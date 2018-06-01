import gameEngine from '..';
import getRandomNum from '../utils';

const task = 'Balance the given number.';
const arrFromNumber = number => ((String(number)).split('')).map(item => Number(item));
const getBalancedNum = (number) => {
  const arr = arrFromNumber(number);
  let points = arr.reduce((sum, item) => sum + item);
  const zeroArr = arr.map(item => item - item);
  while (points !== 0) {
    for (let i = 0; i < arr.length; i += 1) {
      zeroArr[i] += 1;
      points -= 1;
      if (points === 0) break;
    }
  }
  const balancedArr = zeroArr.reverse();
  const balancedNum = balancedArr.join('');
  return balancedNum;
};
const gameBalance = () => {
  const number = getRandomNum(100, 9999);
  const question = `${number}`;
  const rightAnswer = getBalancedNum(number);
  return { question, rightAnswer };
};
export default () => gameEngine(gameBalance, task);

