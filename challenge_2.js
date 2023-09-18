/*****************************************************************
Part 4: Extra not required 🌶️🌶️🌶️
******************************************************************/
/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
function print(x) {
  console.log(x);
}

const logger = function (_array) {
  logger.forEach(print);
};

let newArray = [1, 2, 3, 4, 5, 707070, 8080987, 8888888];
console.log(newArray);

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
function convert(x) {
  return (x - 32) * (5 / 9);
}

const toCelsius = function (temperatures) {
  const newArray = temperatures.map(convert);
  return newArray;
};

let z = toCelsius([1, 2, 3]);
console.log(z);

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/
//function filterout() {

const hottestDays = function (temperatures, threshhold) {
  const newTemp = temperatures.filter((x) => x > threshhold);
  return newTemp;
};

let result = hottestDays([34, 35, 80], 37);
console.log(result);
/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 *
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * -
 * Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
const logHottestDays = function (temperatures, threshhold) {
  const newTemp = toCelsius(temperatures.filter((x) => x > threshhold));

  return newTemp;
};

let result2 = logHottestDays([34, 35, 80, 20], 37);
console.log(result2);
