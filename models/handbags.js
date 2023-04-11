const mongoose = require("mongoose")
const handbagsSchema = mongoose.Schema({
brand: String,
model: String,
color: String,
price: Number

})
module.exports = mongoose.model("handbags",handbagsSchema)