
const fs = require('fs');
// import fs from 'fs';

fs.readFile('my.txt', 'utf8', function(err, data) {
    console.log(data);
    // console.log(data.toString());
});
