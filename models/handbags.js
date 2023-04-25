const mongoose = require("mongoose")
const handbagsSchema = mongoose.Schema({
brand: String,
model: String,
color: {
    type: String,
    required: true,
    match: /^[a-zA-Z]+$/
  },
price:{
    type:Number,
    min: 1000,
    max: 8000 } 

})
module.exports = mongoose.model("handbags",handbagsSchema)