var express = require('express');
var router = express.Router();

/* GET registro page. */
router.get('/', function(req, res, next) {
  res.render('productCart', { title: 'productCart' });
});

module.exports = router;