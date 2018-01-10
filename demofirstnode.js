var http = require('http');
var fs = require('fs');
var dt = require('./firstmodule');
http.createServer(function (req, res) {
    fs.readFile('demofile.html', function(err, data) { 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.write(data);
    res.end();
    });
}).listen(process.env.PORT);