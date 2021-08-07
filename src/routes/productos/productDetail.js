var express = require('express');
var router = express.Router();

/* Detalle del producto */
router.get('/', function(req, res, next) {
  res.render('productDetail', { title: 'productDetail' });
});

module.exports = router;
