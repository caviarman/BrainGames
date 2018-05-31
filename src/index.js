import readlineSync from 'readline-sync';
import { attempt } from '../src/utils';

export default (gameLogic, task) => {
  console.log('Welcome to the Brain Games!');
  console.log(task);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < attempt; i += 1) {
    const { question, rightAnswer } = gameLogic();
    const userAnswer = readlineSync.question(`Question: ${question}\n`);
    console.log(`Your answer: ${userAnswer}`);
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

