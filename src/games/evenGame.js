import { getRandomNum, gameEngine } from '..';

const task = 'Answer "yes" if number even otherwise answer "no".';
const logicOfEvenGame = () => {
  const question = getRandomNum(3, 301);
  const rightAnswer = question % 2 === 0 ? 'yes' : 'no';
  return { question, rightAnswer };
};
export default () => gameEngine(logicOfEvenGame, task);
