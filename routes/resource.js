var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var handbags_controller = require('../controllers/handbags');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// handbags ROUTES ///
// POST request for creating a handbags.
router.post('/handbags', handbags_controller.handbags_create_post);
// DELETE request to delete handbags.
router.delete('/handbags/:id', handbags_controller.handbags_delete);
// PUT request to update handbags.
router.put('/handbags/:id', handbags_controller.handbags_update_put);
// GET request for one handbags.
router.get('/handbags/:id', handbags_controller.handbags_detail);
// GET request for list of all handbags items.
router.get('/handbags', handbags_controller.handbags_list);
module.exports = router;