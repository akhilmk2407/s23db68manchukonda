var handbags = require('../models/handbags');
// List of all handbagss
// List of all handbags
exports.handbags_list = async function(req, res) {
    try{
    thehandbags = await handbags.find();
    res.send(thehandbags);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// for a specific handbags.
// for a specific handbags.
exports.handbags_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await handbags.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
// Handle handbags create on POST.
// Handle handbags create on POST.
exports.handbags_create_post = async function(req, res) {
    console.log(req.body)
    let document = new handbags();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"handbags_type":"goat", "cost":12, "size":"large"}
    document.brand = req.body.brand;
    document.model = req.body.model;
    document.color = req.body.color;
    document.price = req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};
// Handle handbags delete form on DELETE.
exports.handbags_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: handbags delete DELETE ' + req.params.id);
};
// Handle handbags update form on PUT.
/*exports.handbags_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: handbags update PUT' + req.params.id);
};*/

// VIEWS
// Handle a show all view
    exports.handbags_view_all_Page = async function (req, res) {
        try {
        thehandbags = await handbags.find();
        res.render('handbags', { title: 'handbags handbags Results', results: thehandbags });
        }
        catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
    }

    // Handle handbags update form on PUT.
    exports.handbags_update_put = async function (req, res) {
        console.log(`update on id ${req.params.id} with body 
    ${JSON.stringify(req.body)}`)
        try {
            let toUpdate = await handbags.findById(req.params.id)
            // Do updates of properties 
            if (req.body.brand) toUpdate.brand = req.body.brand;
            if (req.body.brand) toUpdate.model = req.body.model;
            if (req.body.color) toUpdate.color = req.body.color;
            if (req.body.price) toUpdate.price = req.body.price;
            let result = await toUpdate.save();
            console.log("Sucess " + result)
            res.send(result)
        } catch (err) {
            res.status(500)
            res.send(`{"error": ${err}: Update for id ${req.params.id} 
    failed`);
        }
    };