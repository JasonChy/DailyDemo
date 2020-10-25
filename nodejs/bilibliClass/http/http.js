const http = require('http');

const app = http.createServer();
app.on('request', function(req, res) {
    res.end('OKK');
})
app.listen('7777', function() {
    console.log('server start');
});