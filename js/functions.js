// Функция для проверки длины строки
const validateMaxLength = (string, maxLength) => string.length <= maxLength;

validateMaxLength('Hello!', 20); // true
validateMaxLength('Hello', 444444); // true
validateMaxLength('Hello', 4); // false
validateMaxLength('Hellooooooo', 4); // false

// Функция для проверки, является ли строка палиндромом
const isPalindrome = (sequence) => {
  sequence = String(sequence).toLowerCase().replaceAll(' ', '');
  let reversed = '';

  for (let i = sequence.length - 1; i >= 0; i--) {
    reversed += sequence.at(i);
  }

  return reversed === sequence;
};

isPalindrome('А лис он умен крыса сыр к нему носила'); // true
isPalindrome('ДовОд'); // true
isPalindrome('а р о з а упала на л а п у   аз о ра'); // true
isPalindrome(12321); // true
isPalindrome('Кекс'); // false
isPalindrome('горошек'); // false

// Функция извлечения чисел из строк
const parseDigits = (value) => {
  value = String(value);
  let result = '';

  for (let i = 0; i < value.length; i++) {
    if (!Number.isNaN(parseInt(value[i], 10))) {
      result += value[i];
    }
  }

  return parseInt(result, 10);
};

parseDigits(2023); // 2023
parseDigits('ECMAScript 2022'); // 2022
parseDigits('1 кефир, 0.5 батона'); // 105
parseDigits('агент 007'); // 7
parseDigits('а я томат'); // NaN
parseDigits(-1); // 1
