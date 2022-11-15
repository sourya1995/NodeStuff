const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path');

router.get('/', (req, res, next) => {

    res.sendFile(path.join(rootDir, 'views', 'shop.html'));

}); //middleware, executed for every request

module.exports = router;