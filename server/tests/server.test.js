const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server.js');
const {Todo} = require('./../models/todo');

// beforeEach((done) => {
//   Todo.remove({}).then(() => {
//     done()
//   })
// });
// the above using the expressionb syntax
beforeEach((done) => { // empty db
  Todo.remove({}).then(() => done());
});

describe('POST /todos', () => {
  it('Should create a new todo', (done) => {
      var text = 'Test todo text';
      request(app)
        .post('/todos') // the route
        .send({text}) // {text} ES6 syntax
        .expect(200) // status
        .expect ((res) => { // expect a response
          expect(res.body.text).toBe(text); // expect response to be
        })
        .end((err, res) => {
          if (err) {
            return done(err); // stops execution
          }
          Todo.find().then((todos) => {
            expect(todos.length).toBe(1);
            expect(todos[0].text).toBe(text);
            done();
          }).catch((e) => done(e));
        });
  });
  it('Should not create todo with invalid body data', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        Todo.find().then((todos) => {
          expect(todos.length).toBe(0);
          done();
        }).catch((e) => done(e));
      });
  });
});
