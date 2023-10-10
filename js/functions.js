// Функция для проверки длины строки
const isLengthValid = (string, maxLength) => string.length <= maxLength;

isLengthValid('Hello!', 20); // true
isLengthValid('Hello', 444444); // true
isLengthValid('Hello', 4); // false
isLengthValid('Hellooooooo', 4); // false

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

isPalindrome('А лис он умен крыса сыр к нему носила'); // true
isPalindrome('ДовОд'); // true
isPalindrome('а р о з а упала на л а п у   аз о ра'); // true
isPalindrome(12321); // true
isPalindrome('Кекс'); // false
isPalindrome('горошек'); // false

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

pullingDigits(2023); // 2023
pullingDigits('ECMAScript 2022'); // 2022
pullingDigits('1 кефир, 0.5 батона'); // 105
pullingDigits('агент 007'); // 7
pullingDigits('а я томат'); // NaN
pullingDigits(-1); // 1
