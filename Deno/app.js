const fs = require('fs').promises;
const text = 'this is some text that should be in a file';
fs.writeFile('node-message.txt', text)
.then(() => {
    console.log('wrote file');
})