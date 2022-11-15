const path = require('path');

module.exports = path.dirname(require.main.filename); //same as
                //path.dirname(process.mainModule.filename);
