const path = require('path');
const fs = require('fs');
const { stdout } = require('process');


fs.readdir(path.join(__dirname, 'secret-folder'), { withFileTypes: true }, (err, files) => {
  if (err) {
    console.log(err);
  }
  files.filter(file => file.isFile()).forEach(file => {
    fs.stat(path.join(path.join(__dirname, 'secret-folder'), file.name), (err, stats) => {
      if (err) {
        console.log(err);
      }
      const array = file.name.split('.');
      stdout.write(`${array[0]} - ${array[1]} - ${stats.size}\n`);
    })
  })
})