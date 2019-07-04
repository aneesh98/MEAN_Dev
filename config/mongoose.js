var config = require('../config/env/development');
var mongoose = require('mongoose');
var user = require('../app/models/user.server.model')
module.exports = function() {
    var db = user.db;
    require('../app/models/user.server.model');
    return db;
};