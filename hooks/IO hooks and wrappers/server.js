var expressExtension = require('express-integrator-extension');

var functions = require('./extension functions');

var systemToken = 'ac22cae960924c2f805ac7bf3be41fa8'; 
var options = {
  diy: functions,
  systemToken: systemToken,
  port:7001
};
console.log('starting server')
expressExtension.createServer(options, function (err) {
    if(err)
    {
        console.log('server is not started');
        throw err
    }
 console.log('server started');
});