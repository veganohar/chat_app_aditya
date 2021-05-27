const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.customer = require("./customers.model");

module.exports = db;