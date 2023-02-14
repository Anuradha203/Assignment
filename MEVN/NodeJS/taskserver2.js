var http = require('http'); 

var dt = require('./taskserver3.js'); 

http.createServer(function(req,res) { 

    res.writeHead(200,{'Content-Type': 'text/html'});
    
    res.write('SERVER');
    res.end(); 
}).listen(5002); 