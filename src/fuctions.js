function getLargerInt(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

// Saber si es PAR o IMP
function isEvenOrOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

// Promedio de numero deacuerdo al Array
function calculateAverage(array) {
  var sumaArray = 0;
  for (i = 0; i < array.length; i++) {
    sumaArray += array[i];
  }
  return sumaArray / array.length;
}

module.exports = {
  getLargerInt,
  isEvenOrOdd,
  calculateAverage
};
