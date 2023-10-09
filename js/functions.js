/*
1. проанализируйте условие задачи и определите, какой код требуется написать;
2. создайте функцию с подходящим именем и опишите её параметры;
3. выпишите все варианты её использования;
4. создайте проверки для каждого варианта: вызовите функцию с соответствующими аргументами и сразу
опишите ожидаемый результат;
5. реализуйте простые варианты;
6. реализуйте сложные варианты, при необходимости пробуя разные подходы и создавая вспомогательные функции;
7. убедитесь, что все тесты проходят, и приступайте к рефакторингу;
8. удалите лишний и повторяющийся код;
9. упростите тот код, что остался;
10. ещё раз убедитесь, что тесты проходят.
*/

// Функция для проверки длины строки
const stringLengthCheck = (string, maxLength) => {
  const check = string.length <= maxLength;
  return check;
};

// Проверки работы функции
console.log('Ожидаю true, получаю - ', stringLengthCheck('Hello!', 20));
console.log('Ожидаю true, получаю - ', stringLengthCheck('Hello', 444444));
console.log('Ожидаю false, получаю - ', stringLengthCheck('Hello', 4));
console.log('Ожидаю false, получаю - ', stringLengthCheck('Hellooooooo', 4));

// Функция для проверки, является ли строка палиндромом
const isPalindrome = (string) => {
  const normalised = string.toLowerCase().replaceAll(' ', '');
  let newString = '';
  for (let i = normalised.length - 1; i >= 0; i--) {
    newString += normalised.at(i);
  }
  const result = newString === normalised;
  return result;
};

console.log('Ожидаю true, получаю - ', isPalindrome('А лис он умен крыса сыр к нему носила'));
console.log('Ожидаю true, получаю - ', isPalindrome('ДовОд'));
console.log('Ожидаю true, получаю - ', isPalindrome('а р о з а упала на л а п у   аз о ра'));
console.log('Ожидаю false, получаю - ', isPalindrome('Кекс'));
console.log('Ожидаю false, получаю - ', isPalindrome('горошек'));
