const http = require('http');

const app = http.createServer();
app.on('request', function(req, res) {
    if (req.url == '/') {
        res.end('shouye page');
    } else if (req.url == '/index.html') {
        res.end('index page');
    } else if (req.url == '/goods.html') {
        res.end('goods page');
    } else {
        res.end('err');
    }
})
app.listen('7777', function() {
    console.log('server start');
});