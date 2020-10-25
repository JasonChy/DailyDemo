const http = require('http');
const url = require('url');

const app = http.createServer();
app.on('request', function(req, res) {
    // url.parse(req.url);
    const queryObject = url.parse(req.url, true).query;
    console.log(queryObject);
    res.end('hello node');
});
 
app.listen(7777, function() {
    console.log('服务已经启动');
});