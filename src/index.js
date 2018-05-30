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
export default startEvenGame;
