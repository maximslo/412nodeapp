var express = require('express');
var router = express.Router();

// GET route that returns a fixed string
router.get('/', function(req, res, next) {
    res.render('index', { string: 'Hey now' }); // Assuming 'index' is your Pug template
});

// POST route that returns a JSON object with original string and its length
router.post('/', function(req, res, next) {
    let inputString = req.body.string; // Make sure to use body-parser middleware to parse body
    res.render('index', { string: inputString, length: inputString.length });
});

// GET route that reads a named value from the URL
router.get('/:name', function(req, res, next) {
    res.render('index', { string: req.params.name });
});

module.exports = router;
