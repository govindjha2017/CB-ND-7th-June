var colors = require('colors');
const figlet = require('figlet');
console.log("HELLO".green)

console.log('OMG Rainbows!'.rainbow);

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});


figlet("Coder!!", function(err,data){
    console.log(data.rainbow);
})