"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MealsService = _interopRequireDefault(require("../services/MealsService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MealsController =
/*#__PURE__*/
function () {
  function MealsController() {// this.mealsService = new MealsService();

    _classCallCheck(this, MealsController);
  }

  _createClass(MealsController, [{
    key: "getAll",
    value: function getAll() {
      var meal = new _MealsService.default();
      console.log("got here", meal);
      return function (req, res) {
        res.status(200).send(meal.getAll());
      };
    }
  }, {
    key: "getMeal",
    value: function getMeal() {
      var meal = new _MealsService.default();
      return function (req, res) {
        var status = meal.getMeal(req.params.id).length ? 200 : 400;
        res.status(status).send(meal.getMeal(req.params.id));
      };
    }
  }, {
    key: "addMeal",
    value: function addMeal() {
      var meal = new _MealsService.default();
      var lastMealInDatabase = meal.getAll()[meal.getAll().length - 1];
      return function (req, res) {
        var _req$body = req.body,
            name = _req$body.name,
            size = _req$body.size,
            price = _req$body.price,
            currency = _req$body.currency,
            caterer_id = _req$body.caterer_id,
            active_today = _req$body.active_today,
            active = _req$body.active;
        var newMeal = {
          id: lastMealInDatabase.id + 1,
          name: name,
          size: size,
          price: price,
          currency: currency,
          caterer_id: caterer_id,
          active_today: active_today,
          active: active,
          rating: 0,
          updated_at: 0,
          updated_by: 0,
          created_at: new Date()
        };
        res.status(200).send(meal.addMeal(newMeal));
      };
    }
  }, {
    key: "updateMeal",
    value: function updateMeal() {
      //const caterer_id = caterer_id || 3;  this will be the id of the logged in caterer or admin 
      var meal = new _MealsService.default();
      return function (req, res) {
        var _req$body2 = req.body,
            name = _req$body2.name,
            size = _req$body2.size,
            price = _req$body2.price,
            currency = _req$body2.currency,
            caterer_id = _req$body2.caterer_id,
            active_today = _req$body2.active_today,
            active = _req$body2.active,
            rating = _req$body2.rating;
        var update = {
          name: name,
          size: size,
          price: price,
          currency: currency,
          caterer_id: caterer_id,
          active_today: active_today,
          active: active,
          rating: rating,
          updated_at: new Date(),
          updated_by: caterer_id
        };
        res.status(200).send(meal.updateMeal(caterer_id, parseInt(req.params.id, Number), update));
      };
    }
  }, {
    key: "deleteMeal",
    value: function deleteMeal() {
      var meal = new _MealsService.default();
      return function (req, res) {
        res.status(200).send(meal.deleteMeal(req.body.caterer_id, req.params.id));
      };
    }
  }]);

  return MealsController;
}();

exports.default = MealsController;