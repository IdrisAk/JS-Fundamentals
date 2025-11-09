const { argv } = require('node:process');
const args = process.argv.slice(2);

if (!isNaN(Number(args[0]))){
 /* for (let i = 1; i <= args[0]; i++){
    console.log("x"); */
    let x = " ";
    for (let i = 1; i <= args[0]; i++){
    
      x += "x";
       }
     console.log(x);
  }
else{
  console.log("Missing size");
}
