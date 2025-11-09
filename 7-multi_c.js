const { argv } = require('node:process');
const args = process.argv.slice(2);

if (!isNaN(Number(args[0]))){
  for (let occurences = 0; occurences >= args[0]; occurences ++){
  console.log("C is fun");
  }
else{
  console.log("Missing number of occurrences”);
}
