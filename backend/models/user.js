const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true},
    tel: { type: Number, unique: true},
    pwd: String,
    gender: String,
    role: String,
    status: String,
});
userSchema.plugin(uniqueValidator);
const user = mongoose.model("User", userSchema);
module.exports = user;