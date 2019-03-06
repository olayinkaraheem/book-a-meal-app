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
        id: 100,
        name: 'Dodo and Egg',
        size: 'plate',
        price: 1000,
        currency: 'NGN',
        caterer_id: 21,
        active_today: 1,
        active: 1,
        rating: 0,
        updated_at: 0,
        updated_by: 0,
        created_at: new Date(),
      };
      chai.request(app)
        .post('/api/v1/meals/')
        .send(new_meal)
        .end((err, res) => {
          expect(new_meal).to.have.property('id');
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
        "name": "Ofada Rice 1",
        "size": "plate",
        "price": "500",
        "currency": "NGN",
        "caterer_id": 3,
        "active_today": 1,
        "rating": 5,
        "active": 0
      }
      chai.request(app)
        .put('/api/v1/meals/4')
        .send(meal_update)
        .end((err, res) => {
          expect(meal_update).to.have.property('caterer_id');
          // console.log(res.body);
          res.should.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body.data).to.have.property('id');
          done();
        });
    });
  });

  describe('/DELETE Meal', () => {
    it('It should delete a meal from a list of available options', done => {
      const meal_item = {
        caterer_id: 3
      };
      chai.request(app)
        .delete('/api/v1/meals/1')
        .send(meal_item)
        .end((err, res) => {
          expect(meal_item).to.have.property('caterer_id');
          // console.log(res.body);
          res.should.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body.data).to.have.property('id');
          done();
        });
    });
  });

});