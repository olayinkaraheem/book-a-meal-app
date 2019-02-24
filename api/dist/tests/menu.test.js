"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai.default.expect; // const assert = chai.assert;

var should = _chai.default.should();

_chai.default.use(_chaiHttp.default);

describe('Menu', function () {
  describe('/GET Menu', function () {
    it('It should GET all menu for the day', function (done) {
      _chai.default.request(_index.app).get('/api/v1/menu/').end(function (err, res) {
        res.should.have.status(200);
        expect(res.body).to.be.an('object');
        done();
      });
    });
  });
  describe('/POST Menu', function () {
    it('It should set a meal option as menu of the day', function (done) {
      var new_menu_item = {
        meal_id: 1,
        caterer_id: 3
      };

      _chai.default.request(_index.app).post('/api/v1/menu/').send(new_menu_item).end(function (err, res) {
        expect(new_menu_item).to.have.property('meal_id'); // console.log(res.body);

        res.should.have.status(200);
        expect(res.body).to.be.an('object'); // expect(res.body).to.have.lengthOf('object');
        // res.length.should.be.eql(2)

        done();
      });
    });
  });
  describe('/DELETE Menu', function () {
    it('It should delete a meal from menu', function (done) {
      var menu_item = {
        caterer_id: 3
      };

      _chai.default.request(_index.app).delete('/api/v1/menu/1').send(menu_item).end(function (err, res) {
        expect(menu_item).to.have.property('caterer_id'); // console.log(res.body);

        res.should.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.data).to.have.property('id');
        done();
      });
    });
  });
});