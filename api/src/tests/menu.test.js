import chai from 'chai';
import chaiHttp from 'chai-http';
import { app } from '../index';

const expect = chai.expect;
// const assert = chai.assert;
const should = chai.should();

chai.use(chaiHttp);
describe('Menu', () => {
  describe('/GET Menu', () => {
    it('It should GET all menu for the day', done => {
      chai.request(app)
        .get('/api/v1/menu/')
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body).to.be.an('object');
          done();
        })
    });
  });

  describe('/POST Menu', () => {
    it('It should set a meal option as menu of the day', done => {
      const new_menu_item = {
        meal_id: 1,
        caterer_id: 3,
      };
      chai.request(app)
        .post('/api/v1/menu/')
        .send(new_menu_item)
        .end((err, res) => {
          expect(new_menu_item).to.have.property('meal_id');
          // console.log(res.body);
          res.should.have.status(200);
          expect(res.body).to.be.an('object');
          // expect(res.body).to.have.lengthOf('object');
          // res.length.should.be.eql(2)
          done();
        });
    });
  });
  
  describe('/DELETE Menu', () => {
    it('It should delete a meal from menu', done => {
      const menu_item = {
        caterer_id: 3
      };
      chai.request(app)
        .delete('/api/v1/menu/1')
        .send(menu_item)
        .end((err, res) => {
          expect(menu_item).to.have.property('caterer_id');
          // console.log(res.body);
          res.should.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body.data).to.have.property('id');
          done();
        });
    });
  });
});