import chai from 'chai';
import chaiHttp from 'chai-http';
import { app } from '../index';

const expect = chai.expect;
// const assert = chai.assert;
const should = chai.should();

chai.use(chaiHttp);
describe('Users', () => {

  describe('/POST Caterer Register', () => {
    it('It should sign up a new caterer', done => {
      const new_caterer = {
        firstname: 'first_'+Math.random().toString(36).replace(/[^a-zA-Z0-9]+/g, ''),
        lastname: 'last_'+Math.random().toString(36).replace(/[^a-zA-Z0-9]+/g, ''),
        username: Math.random().toString(36).replace(/[^a-zA-Z0-9]+/g, ''),
        password: 'anothertestpass2',
        email: Math.random().toString(36).replace(/[^a-zA-Z0-9]+/g, '')+'@mail.com',
        role: 2,
        restaurant_name: 'Super2_'+Math.random().toString(36).replace(/[^a-zA-Z0-9]+/g, ''),
        image_url: 'test_super2.png',
        rating: 0,
        updated_at: new Date(),
        updated_by: 0,
        created_at: new Date(),
      };
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send(new_caterer)
        .end((err, res) => {
          expect(new_caterer).to.have.property('firstname');
          expect(new_caterer).to.have.property('lastname');
          expect(new_caterer).to.have.property('username');
          expect(new_caterer).to.have.property('password');
          expect(new_caterer).to.have.property('email');
          expect(new_caterer).to.have.property('role');
          new_caterer.role.should.equal(2);
          expect(new_caterer).to.have.property('restaurant_name');
          expect(new_caterer).to.have.property('image_url');
          // console.log(res.body);
          res.should.have.status(200);
          expect(res.body).to.be.an('object');
          done();
        });
    });
  });
  
  describe('/POST Normal User Register', () => {
    it('It should sign up a new regular user', done => {
      const new_user = {
        firstname: 'first_' + Math.random().toString(36).replace(/[^a-zA-Z0-9]+/g, ''),
        lastname: 'last_' + Math.random().toString(36).replace(/[^a-zA-Z0-9]+/g, ''),
        username: Math.random().toString(36).replace(/[^a-zA-Z0-9]+/g, ''),
        password: 'anothertestpass2',
        email: Math.random().toString(36).replace(/[^a-zA-Z0-9]+/g, '') + '@mail.com',
        role: 3,
        updated_at: new Date(),
        updated_by: 0,
        created_at: new Date(),
      };
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send(new_user)
        .end((err, res) => {
          expect(new_user).to.have.property('firstname');
          expect(new_user).to.have.property('lastname');
          expect(new_user).to.have.property('username');
          expect(new_user).to.have.property('password');
          expect(new_user).to.have.property('email');
          expect(new_user).to.have.property('role');
          new_user.role.should.equal(3);
          // console.log(res.body);
          res.should.have.status(200);
          expect(res.body).to.be.an('object');
          done();
        });
    });
  });
  
  describe('/POST Login A User', () => {
    it('It should log a user in', done => {
      const user = {
        username: 'Caterer1',
        password: 'anothertestpass2',
      };
      chai.request(app)
        .post('/api/v1/auth/login')
        .send(user)
        .end((err, res) => {
          expect(user).to.have.property('username');
          expect(user).to.have.property('password');
          res.should.have.status(200);
          expect(res.body).to.be.an('object');
          done();
        });
    });
  });
});