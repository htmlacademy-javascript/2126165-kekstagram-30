// Функция для проверки длины строки
const validateMaxLength = (text, maxLength) => text.length <= maxLength;

// Функция для проверки, является ли строка палиндромом
const isPalindrome = (sequence) => {
  sequence = String(sequence).toLowerCase().replaceAll(' ', '');
  let reversed = '';

  for (let i = sequence.length - 1; i >= 0; i--) {
    reversed += sequence.at(i);
  }

  return reversed === sequence;
};

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

// Функция перевода часов в минуты
const getHoursToMinutes = (time) => {
  const [hours, minutes] = time.split(':');
  return Number(hours) * 60 + Number(minutes);
};

// Функция проверки, не выходит ли время встречи за пределы рабочего дня
const isMeetingInWorkingTime = (workingStart, workingEnd, meetingStart, meetingDuration) => {
  workingStart = getHoursToMinutes(workingStart);
  workingEnd = getHoursToMinutes(workingEnd);
  meetingStart = getHoursToMinutes(meetingStart);
  return workingStart <= meetingStart && workingEnd >= (meetingStart + meetingDuration);
};

void (validateMaxLength, isPalindrome, parseDigits, isMeetingInWorkingTime);
