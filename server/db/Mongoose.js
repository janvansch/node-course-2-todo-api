var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose}; // ES6 code
// the above ES6 code equals:
//  module.exports = {
//    mongoose: mongoose
//  }
