var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "html/text"});
    
    var contents = fs.readFileSync('index.html');
        console.log(contents);
    
    
    response.write("hello");
    response.end();
}).listen(process.env.PORT);