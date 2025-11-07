const { argv } = require('node:process');
const args = process.argv.slice(2);
args.forEach(function(item) {
  console.log(item[0]);
  if (item[0] === undefined){
    console.log("No argument")
  }
});

