import chai from 'chai';
import chaiHttp from 'chai-http';
import { app } from '../index';

const expect = chai.expect;
// const assert = chai.assert;
const should = chai.should();

chai.use(chaiHttp);
describe('Meals', () => {
  describe('/GET Meal', () => {
    it('It should GET all all available meal options', done => {
      chai.request(app)
        .get('/api/v1/meals/')
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body).to.be.an('object');
          done();
        })
    });
  });

  describe('/POST Meal', () => {
    it('It should add a new meal option', done => {
      const new_meal = {
        name: 'Dodo and Egg',
        size: 'plates',
        price: 1000,
        currency: 'NGN',
        caterer_id: 1,
        active: 1,
        image: 'testtest.png',
        updated_at: new Date(),
        updated_by: 0,
        created_at: new Date(),
      };
      chai.request(app)
        .post('/api/v1/meals/')
        .send(new_meal)
        .end((err, res) => {
          expect(new_meal).to.have.property('name');
          expect(new_meal).to.have.property('size');
          expect(new_meal).to.have.property('price');
          expect(new_meal).to.have.property('caterer_id');
          expect(new_meal).to.have.property('image');
          // console.log(res.body);
          res.should.have.status(200);
          expect(res.body).to.be.an('object');
          done();
        });
    });
  });

  describe('/PUT Meal', () => {
    it('It should update a meal option', done => {
      const meal_update = {
        "active": 0
      }
      chai.request(app)
        .put('/api/v1/meals/1')
        .send(meal_update)
        .end((err, res) => {
          expect(meal_update).to.have.property('active');
          console.log(res.body);
          res.should.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body.data[1][0]).to.have.property('id');
          done();
        });
    });
  });

  describe('/DELETE Meal', () => {
    it('It should delete a meal from a list of available options', done => {
      const meal_item = {
        active: -1
      };
      chai.request(app)
        .delete('/api/v1/meals/1')
        .send(meal_item)
        .end((err, res) => {
          expect(meal_item).to.have.property('active');
          // console.log(res.body);
          res.should.have.status(200);
          expect(res.body).to.be.an('object');
          res.body.data[0].should.equal(1);
          expect(res.body.data[1][0]).to.have.property('id');
          done();
        });
    });
  });

});