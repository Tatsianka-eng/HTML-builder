const { createWriteStream } = require('fs');
const { stdin, stdout } = require('process');
const path = require('path');
const { createInterface } = require('readline');

const fileName = 'text.txt';
const writeStream = createWriteStream(path.join(__dirname, fileName));
const lineRead = createInterface({
    input: stdin, 
    output: stdout,
});
lineRead.write('Please enter your text\n');
lineRead.on('SIGINT',() => {
    console.log('Goodbye');
    lineRead.close();
})
lineRead.on('line', text => {
  if (text === 'exit') {
    console.log('Goodbye');
    lineRead.close();
  } else writeStream.write(text + '\n');
});