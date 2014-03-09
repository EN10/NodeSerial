var com = require("serialport");
var serialPort = new com.SerialPort("/dev/cu.usbmodemfd121", {
    baudrate: 9600,
    parser: com.parsers.raw
  });

serialPort.on("open", function () {
  console.log('open');
  serialPort.on('data', function(data) {
    console.log('data received: ' + data);
  });
  serialPort.write("ls\n", function(err, results) {
    console.log('err ' + err);
    console.log('results ' + results);
  });
});

serialPort.write("OMG IT WORKS\r");

serialPort.on('data', function(data) {
  console.log(data);
});

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1234, '192.168.1.5');

console.log('Server running at http://192.168.1.5:1234');