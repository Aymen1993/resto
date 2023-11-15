const mongoose = require("mongoose");
const platSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    photo:String
});
const plat = mongoose.model("Plat", platSchema);
module.exports = plat;