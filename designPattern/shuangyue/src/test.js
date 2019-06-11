// const tdist = require('https://division-data.alicdn.com/simple/addr_3_111_1.js');
// import tdist from "https://division-data.alicdn.com/simple/addr_3_111_1.js";
const url = require('url');
const http = require('http');
const address = url.parse('https://division-data.alicdn.com/simple/addr_3_111_1.js');
const content = http.data(address);

console.log(content);
