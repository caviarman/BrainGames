#!/usr/bin/env node
import { greetingUser, isEven, randomIndex, question } from '..';
console.log("Welcome to the Brain Games!");
console.log(`Answer "yes" if number even otherwise answer "no".`);
const userName = greetingUser();
const numbersForQuestions = [39, 4, 383, 290, 23, 42, 76, 189, 312, 777, 505, 226, 98, 99, 101, 302, 43, 45, 68, 88];
let index;
let numOfRightAnswers = 0;
while (numOfRightAnswers < 3) {
    index = randomIndex(numbersForQuestions);
    const userAnswer = question(numbersForQuestions, index);
    const rightAnswer = isEven(numbersForQuestions[index]) ? "yes" : "no";
    if (userAnswer === rightAnswer) {
        console.log("Correct!");
        numOfRightAnswers++;
    }
    else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
        console.log (`Let's try again, ${userName}`);
        break;
    } 
}
if (numOfRightAnswers === 3) {
    console.log(`Congratulations, ${userName}!`);
}