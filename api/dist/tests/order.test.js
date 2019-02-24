"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai.default.expect;
var assert = _chai.default.assert;

var should = _chai.default.should();

_chai.default.use(_chaiHttp.default);

describe('Orders', function () {
  describe('/GET Orders', function () {
    it('It should GET all orders', function (done) {
      _chai.default.request(_index.app).get('/api/v1/orders/').end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
    });
  });
  describe('/POST Order', function () {
    it('It should create an order', function (done) {
      var new_order = {
        id: 3,
        quantity: 2
      };

      _chai.default.request(_index.app).post('/api/v1/orders/').send(new_order).end(function (err, res) {
        expect(new_order).to.have.property('quantity'); // console.log(res.body);

        res.should.have.status(200);
        expect(res.body).to.be.an('object'); // expect(res.body).to.have.lengthOf('object');
        // res.length.should.be.eql(2)

        done();
      });
    });
  });
  describe('/PUT Order', function () {
    it('It should update an order', function (done) {
      var updated_order = {
        // id: 3,
        meal_title: 'Test title',
        user_id: 21,
        meal_size: 'plates',
        quantity: 4,
        price: 500,
        total: 2000,
        currency: 'NGN',
        caterer_id: 3,
        status: 1,
        created_at: new Date()
      };

      _chai.default.request(_index.app).put('/api/v1/orders/4').send(updated_order).end(function (err, res) {
        expect(updated_order).to.have.property('quantity'); // console.log(res.body);

        res.should.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.data).to.have.property('id');
        done();
      });
    });
  });
  describe('/DELETE Order', function () {
    it('It should delete an order', function (done) {
      var delete_order_request_body = {
        user_id: 21
      };

      _chai.default.request(_index.app).delete('/api/v1/orders/4').send(delete_order_request_body).end(function (err, res) {
        expect(delete_order_request_body).to.have.property('user_id'); // console.log(res.body);

        res.should.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.data).to.have.property('id');
        expect(res.body.data.status).to.equal(-1);
        done();
      });
    });
  });
});