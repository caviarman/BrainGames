# Brain games
[![Maintainability](https://api.codeclimate.com/v1/badges/45e89edb030ad1dbe350/maintainability)](https://codeclimate.com/github/caviarman/BrainGames/maintainability)
[![Build Status](https://travis-ci.org/caviarman/BrainGames.svg?branch=master)](https://travis-ci.org/caviarman/BrainGames)
## Описание
Набор консольных игр-викторин, где игроку предлагается ответить на три вопроса. Ответив на все правильно, игрок побеждает. Ошибка в ответе на любой вопрос завершает игру. 

#### Пример игры brain-calc

[игра brain-calc](https://asciinema.org/a/XG7U9e4W8WT18uPLdjxmAXv9T)

## Установка
```
npm install project-lvl1-vi -g
```
## Список игр:

### brain-even
запуск игры:
```
brain-even
```
Игроку нужно ответить "yes" если число чётное и "no" если нет.
```
Question: 15
Your answer: no
Correct!
```


### brain-calc
запуск игры:
```
brain-calc
```
Игрок должен вычислить результат выражения?
```
Question: 4 + 10
Your answer: 14
Correct!
```
### brain-gcd
запуск игры:
```
brain-gcd
```
Игроку предлагается найти наибольший общий делитель двух чисел.
```
Question: 25 50
Your answer: 25
Correct!
```

### brain-balance
запуск игры:
```
brain-balance
```
Игроку нужно "сбалансировать" число. При балансировке числа "большие" цифры отдают излишки "меньшим" так, чтобы в итоге число стало сбалансированным. В случае с числом 123 цифра 3 должна отдать единицу цифре 1, и в итоге получим число 222.
Порядок цифр в сбалансированном числе – по возрастанию. Например, вместо 322 и 232 нужно указывать 223.
```
Question: 215
Your answer: 233
Correct!
```
### brain-progression
запуск игры:
```
brain-progression
```
Игроку предлагается вычислить пропущенное число прогрессии
```
Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 15
Correct!
```
### brain-prime
запуск игры:
```
brain-prime
```
Игрок должен определить, является ли число простым.
```
Question: 7
Your answer: yes
Correct!
