var url= require('url'); //in build library/module
var adr = 'http://127.0.0.1:5500/loop.html?year=2023&month=february';
var q= url.parse(adr,true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; // returns an object: {year:2017 , month: 'february'}
console.log(qdata.month); //returns 'february'