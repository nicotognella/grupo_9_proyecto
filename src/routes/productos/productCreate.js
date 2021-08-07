var express = require('express');
var router = express.Router();

/* createProduct */
router.get('/', function(req, res, next) {
  res.render('productCreate', { title: 'productCreate' });
});


module.exports = router;