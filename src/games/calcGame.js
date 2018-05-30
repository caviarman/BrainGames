import readlineSync from 'readline-sync';
import { getRandomNum, ATTEMPT } from '../lib';

const startCalculatorGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  let userAnswer;
  let rightAnswer;
  for (let i = 0; i < ATTEMPT; i += 1) {
    const num1 = getRandomNum(1, 10);
    const num2 = getRandomNum(1, 10);
    const operator = getRandomNum(1, 3);
    switch (operator) {
      case 1:
        userAnswer = readlineSync.question(`Question: ${num1} + ${num2}\n`);
        rightAnswer = num1 + num2;
        break;
      case 2:
        userAnswer = readlineSync.question(`Question: ${num1} - ${num2}\n`);
        rightAnswer = num1 - num2;
        break;
      case 3:
        userAnswer = readlineSync.question(`Question: ${num1} * ${num2}\n`);
        rightAnswer = num1 * num2;
        break;
      default:
        break;
    }
    console.log(`Your answer: ${userAnswer}`);
    if (Number(userAnswer) === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default startCalculatorGame;
