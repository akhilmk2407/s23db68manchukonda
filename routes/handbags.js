var express = require('express');
const handbags_controlers= require('../controllers/handbags');
var router = express.Router();


// A little function to check if we have an authorized user and continue on 
// or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET home page. */
router.get('/', handbags_controlers.handbags_view_all_Page );

/* GET detail handbags page */
router.get('/detail', handbags_controlers.handbags_view_one_Page);

/* GET create handbags page */
router.get('/create',secured, handbags_controlers.handbags_create_Page);

/* GET create update page */
router.get('/update',secured,handbags_controlers.handbags_update_Page);

/* GET delete handbags page */
router.get('/delete',secured, handbags_controlers.handbags_delete_Page);

/* GET update handbags page */
router.get('/update',secured, handbags_controlers.handbags_update_Page);


  

module.exports = router;
