const getRandomNum = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;
const attempt = 3;
const isEven = number => number % 2 === 0;
export { getRandomNum, attempt, isEven };
