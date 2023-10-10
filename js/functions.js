// Функция для проверки длины строки
const isLengthValid = (string, maxLength) => string.length <= maxLength;

// Проверка работы функции
console.log('Ожидаю true, получаю - ', isLengthValid('Hello!', 20));
console.log('Ожидаю true, получаю - ', isLengthValid('Hello', 444444));
console.log('Ожидаю false, получаю - ', isLengthValid('Hello', 4));
console.log('Ожидаю false, получаю - ', isLengthValid('Hellooooooo', 4));

// Функция для проверки, является ли строка палиндромом
const isPalindrome = (sequence) => {
  sequence = sequence.toString().toLowerCase().replaceAll(' ', '');
  let reversed = '';

  for (let i = sequence.length - 1; i >= 0; i--) {
    reversed += sequence.at(i);
  }

  return reversed === sequence;
};

// Без использования цикла
// const isPalindrome = (sequence) => {
//   sequence = sequence.toString().toLowerCase().replaceAll(' ', '');
//   return sequence.split().reverse().join();
// };

// Проверка работы функции
console.log('Ожидаю true, получаю - ', isPalindrome('А лис он умен крыса сыр к нему носила'));
console.log('Ожидаю true, получаю - ', isPalindrome('ДовОд'));
console.log('Ожидаю true, получаю - ', isPalindrome('а р о з а упала на л а п у   аз о ра'));
console.log('Ожидаю false, получаю - ', isPalindrome('Кекс'));
console.log('Ожидаю false, получаю - ', isPalindrome('горошек'));
console.log('Ожидаю true, получаю - ', isPalindrome(12321));

// Функция извлечения чисел из строк
const pullingDigits = (value) => {
  value = value.toString();
  let result = '';

  for (let i = 0; i < value.length; i++) {
    if (!Number.isNaN(parseInt(value[i], 10))) {
      result += value[i];
    }
  }

  return parseInt(result, 10);
};

// Без использования цикла
// const pullingDigits = (value) => {
//   value = value.toString();
//   const result = value.replace(/\D/g, '');
//   return parseInt(result, 10);
// };

// Проверка работы функции
console.log(pullingDigits(2023));
console.log(pullingDigits('ECMAScript 2022'));
console.log(pullingDigits('1 кефир, 0.5 батона'));
console.log(pullingDigits('агент 007'));
console.log(pullingDigits('а я томат'));
console.log(pullingDigits(-1));
