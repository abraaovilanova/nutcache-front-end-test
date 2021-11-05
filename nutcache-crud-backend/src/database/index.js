const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/nutcache-crud')
mongoose.Promise = global.Promise

module.exports = mongoose