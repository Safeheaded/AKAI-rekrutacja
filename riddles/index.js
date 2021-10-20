// 1. odwróć liczbę
// np dla 12345, funkcja powinna zwrócić 54321
function reverseNumber(number) {
  const results = [];

  if (number === 0) {
    results.push(0);
  }

  while (number % 10 !== 0) {
    const temp = number % 10;
    results.push(temp);

    number = Math.floor(number / 10);
  }

  return results.join("");
}

console.log("1.", reverseNumber(12345));

// 2. doodaj do siebie wszystkie wartości z tablicy, które są parzyste
// dla tablicy tab powinniśmy otrzymać 2 + 4 + 6 + 8 = 20
const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function addEven(array) {
  return array.reduce((sum, value) => (value % 2 === 0 ? sum + value : sum), 0);
}

console.log("2.", addEven(tab));
