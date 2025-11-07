const { argv } = require('node:process');
const args = process.argv.slice(2);
args.forEach(function(item) {
  console.log(item);
  if (item[0] === undefined){
    console.log("No argument")
  }
});

if (args[0] === undefined) {
  console.log("No argument");
}
