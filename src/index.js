import readlineSync from 'readline-sync';

const greetingUser = () => {
    const userName = readlineSync.question("May I have your name? ");
    console.log(`Hello, ${userName}!`);
    return userName;
}
const question = (arr, index) => {
    const answer = readlineSync.question(`Question: ${arr[index]}\n`);
    console.log(`Your answer: ${answer}`);
    return answer;
}
const isEven = num => num % 2 === 0 ? true : false;
const randomIndex = arr => Math.floor(Math.random() * arr.length);

export { greetingUser, isEven, randomIndex, question };