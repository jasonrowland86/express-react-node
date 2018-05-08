const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const PickSchema = new Schema({
  name: String
});

const UserSchema = new Schema({
  name: String,
  picks: [PickSchema]
});

//Create Model
const User = mongoose.model('user', UserSchema);

module.exports = User;
