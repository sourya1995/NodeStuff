const express = require('express');

const router = express.Router();

router.get('/',(req, res, next) => {
    
    res.send('<h1>Hello From Express</h1>');

}); //middleware, executed for every request

module.exports = router;