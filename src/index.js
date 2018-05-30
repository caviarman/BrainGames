import readlineSync from 'readline-sync';

const isEven = num => num % 2 === 0;
const getRandomNum = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;
const ATTEMPT = 3;
let isUserWin = true;
const startEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < ATTEMPT; i += 1) {
    const num = getRandomNum(3, 301);
    const userAnswer = readlineSync.question(`Question: ${num}\n`);
    console.log(`Your answer: ${userAnswer}`);
    const rightAnswer = isEven(num) ? 'yes' : 'no';
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}`);
      isUserWin = false;
      break;
    }
  }
  if (isUserWin) {
    console.log(`Congratulations, ${userName}!`);
  }
};
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
      isUserWin = false;
      break;
    }
  }
  if (isUserWin) {
    console.log(`Congratulations, ${userName}!`);
  }
};
const startMenu = () => {
  let flag = true;
  while (flag) {
    console.log('Choose the game by number:');
    const gameNum = readlineSync.question('1. Brain-Even\n2. Brain-Calculator\n3. Exit\n');
    switch (gameNum) {
      case '1':
        startEvenGame();
        break;
      case '2':
        startCalculatorGame();
        break;
      case '3':
        flag = false;
        break;
      default:
        break;
    }
  }
};
export { startMenu, startEvenGame, startCalculatorGame };
