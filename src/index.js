import readlineSync from 'readline-sync';

const getRandomNum = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;
const attempt = 3;
const gameEngine = (gameLogic, task) => {
  console.log('Welcome to the Brain Games!');
  console.log(task);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < attempt; i += 1) {
    const gameData = gameLogic();
    const userAnswer = readlineSync.question(`Question: ${gameData.question}\n`);
    console.log(`Your answer: ${userAnswer}`);
    if (String(userAnswer) === String(gameData.rightAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameData.rightAnswer}'.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export { gameEngine, getRandomNum, attempt };
