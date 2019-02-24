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
  function MealsController() {
    _classCallCheck(this, MealsController);

    this.mealsService = new _MealsService.default();
  }

  _createClass(MealsController, [{
    key: "getAll",
    value: function getAll() {
      var meal = new _MealsService.default();
      return function (req, res) {
        var all_meals = meal.getAll();
        var message = 'No meal option available';
        var status = 201;

        if (all_meals.length) {
          message = 'Meals fetched successfully';
          status = 200;
        }

        res.status(status).send({
          message: message,
          data: all_meals
        });
      };
    }
  }, {
    key: "getMeal",
    value: function getMeal() {
      var meals = new _MealsService.default();
      return function (req, res) {
        var meal = meals.getMeal(req.params.id);
        var message = "Cannot get meal with id ".concat(req.params.id);
        var response_status = 403;

        if (meal.id) {
          message = 'Meal fetch request processed successfully';
          response_status = 200;
        }

        res.status(response_status).send({
          message: message,
          data: meal
        });
      };
    }
  }, {
    key: "addMeal",
    value: function addMeal() {
      return function (req, res) {
        var meal = new _MealsService.default(); // const { name, size, price, currency, caterer_id, active_today, active } = req.body;
        // const newMeal = {
        //   id: lastMealInDatabase.id + 1,
        //   name ,
        //   size ,
        //   price ,
        //   currency ,
        //   caterer_id ,
        //   active_today ,
        //   active ,
        //   rating: 0,
        //   updated_at: 0,
        //   updated_by: 0,
        //   created_at: new Date(),
        // };

        var newMeal = req.body;
        var meal_response = meal.addMeal(newMeal);
        var message = "New meal failed to add to list of available meal options";
        var response_status = 400;

        if (meal_response.id) {
          message = "New meal with id ".concat(meal_response.id, " added successfully");
          response_status = 200;
        }

        res.status(response_status).send({
          message: message,
          data: meal_response
        });
      };
    }
  }, {
    key: "updateMeal",
    value: function updateMeal() {
      //const caterer_id = caterer_id || 3;  this will be the id of the logged in caterer or admin 
      var meal = new _MealsService.default();
      return function (req, res) {
        var updated_meal = meal.updateMeal(parseInt(req.params.id, Number), req.body);
        var message = "Meal with id ".concat(req.params.id, " could not be updated");
        var response_status = 403;

        if (updated_meal.id) {
          message = "Meal with id ".concat(req.params.id, " updated successfully");
          response_status = 200;
        }

        res.status(response_status).send({
          message: message,
          data: updated_meal
        });
      };
    }
  }, {
    key: "deleteMeal",
    value: function deleteMeal() {
      var meal = new _MealsService.default();
      return function (req, res) {
        var deleted_meal = meal.deleteMeal(req.body.caterer_id, req.params.id);
        var message = "Meal with id ".concat(req.params.id, " could not be deleted");
        var response_status = 403;

        if (deleted_meal.id) {
          message = "Meal with id ".concat(req.params.id, " deleted successfully");
          response_status = 200;
        }

        res.status(response_status).send({
          message: message,
          data: deleted_meal
        });
      };
    }
  }]);

  return MealsController;
}();

exports.default = MealsController;