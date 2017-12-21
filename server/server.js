// Library imports
var express = require('express');
var bodyParser = require('body-parser');

// Local imports
var {mongoose} = require('./db/mongoose.js');
// Pull off the Mongoose property using ES6 destructuring
// creating a local variable called mongoose equal to the
// mongoose property of the object which is the return
// result of the require statement
//
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos}); //ES6
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

module.exports = {app}; // ES6
