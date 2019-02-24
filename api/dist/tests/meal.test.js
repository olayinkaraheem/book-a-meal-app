"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai.default.expect; // const assert = chai.assert;

var should = _chai.default.should();

_chai.default.use(_chaiHttp.default);

describe('Meals', function () {
  describe('/GET Meal', function () {
    it('It should GET all all available meal options', function (done) {
      _chai.default.request(_index.app).get('/api/v1/meals/').end(function (err, res) {
        res.should.have.status(200);
        expect(res.body).to.be.an('object');
        done();
      });
    });
  });
  describe('/POST Meal', function () {
    it('It should add a new meal option', function (done) {
      var new_meal = {
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
        created_at: new Date()
      };

      _chai.default.request(_index.app).post('/api/v1/meals/').send(new_meal).end(function (err, res) {
        expect(new_meal).to.have.property('id'); // console.log(res.body);

        res.should.have.status(200);
        expect(res.body).to.be.an('object');
        done();
      });
    });
  });
  describe('/PUT Meal', function () {
    it('It should update a meal option', function (done) {
      var meal_update = {
        "name": "Ofada Rice 1",
        "size": "plate",
        "price": "500",
        "currency": "NGN",
        "caterer_id": 3,
        "active_today": 1,
        "rating": 5,
        "active": 0
      };

      _chai.default.request(_index.app).put('/api/v1/meals/4').send(meal_update).end(function (err, res) {
        expect(meal_update).to.have.property('caterer_id'); // console.log(res.body);

        res.should.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.data).to.have.property('id');
        done();
      });
    });
  });
  describe('/DELETE Meal', function () {
    it('It should delete a meal from a list of available options', function (done) {
      var meal_item = {
        caterer_id: 3
      };

      _chai.default.request(_index.app).delete('/api/v1/meals/4').send(meal_item).end(function (err, res) {
        expect(meal_item).to.have.property('caterer_id'); // console.log(res.body);

        res.should.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.data).to.have.property('id');
        done();
      });
    });
  });
});