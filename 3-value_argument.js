const { argv } = require('node:process');
const args = process.argv.slice(2);
args.foreach(function(item) {
console.log(item)});
if (args[0] == unidentified){
    console.log("No argument")
};
