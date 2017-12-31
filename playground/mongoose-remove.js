const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({_id: '5a48e285c20c57e0fa2ec983'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('5a48e285c20c57e0fa2ec983').then((todo) => {
  console.log(todo);
});
