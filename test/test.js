process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('todo', function(){
    it('should return a 200 response', function(done){
        chai.request(server)
            .get('/api/todo')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
              done();
            });
    });

    it('it should not POST a todo', (done) => {
        let todo = {
            title: "The Lord of the Rings",
        }
        chai.request(server)
            .post('/api/todos')
            .send(todo)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
              done();
            });
      });
});