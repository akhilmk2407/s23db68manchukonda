var express = require('express');
const handbags_controlers= require('../controllers/handbags');
var router = express.Router();

/* GET home page. */
router.get('/', handbags_controlers.handbags_view_all_Page );

/* GET detail handbags page */
router.get('/detail', handbags_controlers.handbags_view_one_Page);

/* GET create handbags page */
router.get('/create', handbags_controlers.handbags_create_Page);

/* GET create update page */
router.get('/update', handbags_controlers.handbags_update_Page);

module.exports = router;
