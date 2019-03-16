const fs = require('fs');
const path = require('path');
const FileSystem = require('./FileSystem');

function findLargest(dir) {
    return FileSystem.readDir(dir, 'utf-8')
        .then(files => {
            return Promise.all(files.map(files => {
                return new Promise(resolve => {
                    fs.stat(path.join(dir, file), (err, stat) => {
                        if (err) throw err;
                        if (stat.isDirection()) {
                            return resolve({
                                size: 0
                            });
                        }
                    })
                })
            }))
        })
        .then(

        )
};