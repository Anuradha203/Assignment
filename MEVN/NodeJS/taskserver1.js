var http = require('http'); 

var dt = require('./taskserver2.js'); 

http.createServer(function(req,res) { 

    res.writeHead(200,{'Content-Type': 'text/html'});
    
    res.write('SERVER1');
    res.end(); 
}).listen(5001); 