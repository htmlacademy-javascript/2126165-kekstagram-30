// Функция для проверки длины строки
const stringLengthCheck = (string, maxLength) => string.length <= maxLength;

// Проверка работы функции
console.log('Ожидаю true, получаю - ', stringLengthCheck('Hello!', 20));
console.log('Ожидаю true, получаю - ', stringLengthCheck('Hello', 444444));
console.log('Ожидаю false, получаю - ', stringLengthCheck('Hello', 4));
console.log('Ожидаю false, получаю - ', stringLengthCheck('Hellooooooo', 4));

// Функция для проверки, является ли строка палиндромом
const isPalindrome = (string) => {
  const normalised = string.toLowerCase().replaceAll(' ', '');
  let reversed = '';

  for (let i = normalised.length - 1; i >= 0; i--) {
    reversed += normalised.at(i);
  }

  return reversed === normalised;
};

// Проверка работы функции
console.log('Ожидаю true, получаю - ', isPalindrome('А лис он умен крыса сыр к нему носила'));
console.log('Ожидаю true, получаю - ', isPalindrome('ДовОд'));
console.log('Ожидаю true, получаю - ', isPalindrome('а р о з а упала на л а п у   аз о ра'));
console.log('Ожидаю false, получаю - ', isPalindrome('Кекс'));
console.log('Ожидаю false, получаю - ', isPalindrome('горошек'));

// Функция извлечения чисел из строк
const pullingNumber = (value) => {
  const valueString = value.toString();
  let number = '';

  for (let i = 0; i < valueString.length; i++) {
    if (!Number.isNaN(parseInt(valueString[i], 10))) {
      number += valueString[i];
    }
  }

  return parseInt(number, 10);
};

// Проверка работы функции
console.log(pullingNumber(2023));
console.log(pullingNumber('ECMAScript 2022'));
console.log(pullingNumber('1 кефир, 0.5 батона'));
console.log(pullingNumber('агент 007'));
console.log(pullingNumber('а я томат'));
console.log(pullingNumber(-1));
