const { createReadStream } = require('fs');
const path = require('path');

const fileName = 'text.txt';
const readStream = createReadStream(path.join(__dirname, fileName), 'utf-8');
readStream.on('data', (data) => {
    console.log(data);
});
readStream.on('error', (error) => {
    console.log(error.message);
});