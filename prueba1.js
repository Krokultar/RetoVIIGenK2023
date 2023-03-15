'use strict';

const testForm = document.getElementById('testForm');
const username = document.getElementById('name');
const nameWithoutVocals = document.getElementById('nameWithoutVocals');
const date = document.getElementById('date');
const days = document.getElementById('days');

function calculateIntervalDays(fromDate, toDate = '10/03/2023') {
  fromDate = fromDate.split('/');
  const temp = fromDate[0];
  fromDate[0] = fromDate[1];
  fromDate[1] = temp;
  fromDate = fromDate.join('/');

  fromDate = new Date(fromDate).toLocaleDateString('en-US');
  toDate = new Date(toDate).toLocaleDateString('en-GB');
  const unixFromDate = Date.parse(fromDate);
  const unixToDate = Date.parse(toDate);
  const numberOfDays = Math.round(
    (unixToDate - unixFromDate) / 1000 / 60 / 60 / 24
  );
  days.value = numberOfDays;
  return numberOfDays;
}

function removeVocalsAndSpaces(name) {
  const vocals = 'aAáÁàÀâÂäÄeEéÉèÈêÊëËiIíÍìÌîÎïÏoOóÓòÒôÔöÖuUúÚùÙûÛüÜ ';
  let word = '';
  for (const letter of name) {
    if (!vocals.includes(letter)) word += letter;
  }
  nameWithoutVocals.value = word;
  return word;
}

function handleInputName(e) {
  removeVocalsAndSpaces(e.target.value);
}

function handleInputDate(e) {
  let date = e.target.value.split('-');
  const temp = date[0];
  date[0] = date[2];
  date[2] = temp;
  date = date.join('/');
  console.log('return', typeof calculateIntervalDays(date));
  calculateIntervalDays(date);
}

testForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

username.addEventListener('blur', handleInputName);

date.addEventListener('blur', handleInputDate);
