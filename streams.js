const fs = require('fs');
const readStream = fs.createReadStream('./largefile.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./largefile2.txt');

/* readStream.on('data', (chunk) => {
    console.log('--- NEW CHUNK ---');
    console.log(chunk);
    writeStream.write('\nNew Chunk\n');
    writeStream.write(chunk);
}); */

// piping
readStream.pipe(writeStream);