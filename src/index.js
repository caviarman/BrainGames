import readlineSync from 'readline-sync';

const greetingUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
const question = (num) => {
  const answer = readlineSync.question(`Question: ${num}\n`);
  console.log(`Your answer: ${answer}`);
  return answer;
};
const isEven = num => num % 2 === 0;

const randomNum = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;
const brainEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = greetingUser();
  const numOfRightAnswers = 3;
  let counter = 0;
  while (counter < numOfRightAnswers) {
    const numberForQuestion = randomNum(3, 301);
    const userAnswer = question(numberForQuestion);
    const rightAnswer = isEven(numberForQuestion) ? 'yes' : 'no';
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}`);
      break;
    }
  }
  if (numOfRightAnswers === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
export default brainEvenGame;
