
export const getRandomNum = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;
export const attempt = 3;
export const isEven = number => number % 2 === 0;
export const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

