const moduleB = require('./moduleB');
const fs = require('fs');

function que1() {
  console.log('Module A is calling Module B...');
  moduleB();
  
 
}

module.exports = que1;
// var data =   moduleB();
// fs.writeFile('./demofile.txt', data, (err) => {
//     if (err) throw err;
//     console.log('Data written to file!');
//   });


fs.readFile('./demo.txt', (err, inputD) => {
   if (err) throw err;
      console.log(inputD.toString());
})
