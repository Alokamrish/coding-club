var http = require('http');
var fs = require('fs');

const PORT=800; 

fs.readFile('./task1.html', function (err, html){

    if (err) throw err; 
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});