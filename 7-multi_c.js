const { argv } = require('node:process');
const args = process.argv.slice(2);

if (!isNaN(Number(args[0]))){
  for (let i = 1; i <= args[0]; i++){
    console.log("C is fun");
  }}
else{
  console.log("Missing number of occurrences”);
}
