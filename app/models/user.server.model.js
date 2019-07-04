var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    username: String,
    password: String
});
module.exports = {conn: mongoose.model('User', UserSchema)}