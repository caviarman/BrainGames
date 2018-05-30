import readlineSync from 'readline-sync';
import { getRandomNum, attempt, isEven } from '../lib';

const startEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < attempt; i += 1) {
    const question = getRandomNum(3, 301);
    const userAnswer = readlineSync.question(`Question: ${question}\n`);
    console.log(`Your answer: ${userAnswer}`);
    const rightAnswer = isEven(question) ? 'yes' : 'no';
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default startEvenGame;
