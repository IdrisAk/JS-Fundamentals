const args = process.argv.slice(2);
const inputNumber = Number(args);
function factorial(n) {
  if (isNaN(n) || n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
const result = factorial(inputNumber);
console.log(result);
