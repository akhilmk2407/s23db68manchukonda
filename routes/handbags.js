var express = require('express');
const handbags_controlers= require('../controllers/handbags');
var router = express.Router();

/* GET home page. */
router.get('/', handbags_controlers.handbags_view_all_Page );

module.exports = router;
