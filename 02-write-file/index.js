const fs = require('fs');
const path = require('path');
const { stdin, stdout, exit } = process;

const writeableStream = fs.createWriteStream(`${__dirname}/text.txt`);

stdout.write('write your text');
stdin.on('data', data => {
    if (data.toString().trim() === 'exit') {
        exit()
    }
    writeableStream.write(data.toString());
});
process.on('exit', () => stdout.write('Выполнено!'));
process.on('SIGINT', exit)
