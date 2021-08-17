// read
const fs = require('fs');
fs.readFile('./readfile.txt', (err, data) => {
   if (err) {
        console.log(err);
    }
    console.log(data.toString());
});
console.log('last line');

// write
fs.writeFile('./readfile.txt', 'adding this line to file', () => {
    console.log('file was written');
});

fs.writeFile('./readfile2.txt', 'adding this line to new file', () => {
    console.log('file was written');
});

// directories
if (!fs.existsSync('./newfolder')) {

fs.mkdir('./newfolder', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('folder created');
});
} else {
    fs.rmdir('./newfolder', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    })
}

// delete
if (fs.existsSync('./deleteme.txt')) {
    fs.unlink('./deleteme.txt', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('file deleted');
    })
}