var express = require('express');
var router = express.Router();

/* createProduct */
router.get('/', function(req, res, next) {
  res.render('createProduct', { title: 'createProduct' });
});


module.exports = router;