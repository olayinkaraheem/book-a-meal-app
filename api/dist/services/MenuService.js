"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MealModel = _interopRequireDefault(require("../models/MealModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MealsService =
/*#__PURE__*/
function () {
  function MealsService() {
    _classCallCheck(this, MealsService);
  }

  _createClass(MealsService, [{
    key: "fetchAllMeals",
    value: function fetchAllMeals() {
      // This is the data we will have in our database
      this.meals = [{
        id: 1,
        name: 'Jollof Rice',
        size: 'plates',
        price: '500',
        currency: 'NGN',
        caterer_id: 3,
        active_today: 0,
        rating: 5,
        status: 1,
        // updated_at: "20-01-2019 12:34:25",
        // updated_by: 1,
        created_at: "20-01-2019 12:34:25"
      }, {
        id: 2,
        name: 'Fried Rice',
        size: 'plates',
        price: '200',
        currency: 'NGN',
        caterer_id: 3,
        active_today: 1,
        rating: 5,
        status: 1,
        // updated_at: "20-01-2019 12:34:25",
        // updated_by: 1,
        created_at: "20-01-2019 12:34:25"
      }, {
        id: 3,
        name: 'Coconut Rice',
        size: 'plates',
        price: '500',
        currency: 'NGN',
        caterer_id: 3,
        active_today: 1,
        rating: 5,
        status: 1,
        // updated_at: "20-01-2019 12:34:25",
        // updated_by: 1,
        created_at: "20-01-2019 12:34:25"
      }, {
        id: 4,
        name: 'Apache Rice',
        size: 'plates',
        price: '750',
        currency: 'NGN',
        caterer_id: 3,
        active_today: 0,
        rating: 5,
        status: 1,
        // updated_at: "20-01-2019 12:34:25",
        // updated_by: 1,
        created_at: "20-01-2019 12:34:25"
      }, {
        id: 5,
        name: 'Node Rice',
        size: 'plates',
        price: '750',
        currency: 'NGN',
        caterer_id: 3,
        active_today: 1,
        rating: 5,
        status: 1,
        // updated_at: "20-01-2019 12:34:25",
        // updated_by: 1,
        created_at: "20-01-2019 12:34:25"
      }]; // When we retrieve the data, it will be of type Means
      // Hence, this simulation here.

      return this.meals.map(function (data) {
        var meal = new _MealModel.default();
        meal.id = data.id;
        meal.name = data.name;
        meal.size = data.size;
        meal.price = data.price;
        meal.currency = data.currency;
        meal.caterer_id = data.caterer_id;
        meal.active_today = data.active_today;
        meal.rating = data.rating;
        meal.status = data.status; // meal.updated_at = data.updated_at;
        // meal.active = data.active;
        // meal.updated_by = data.updated_by;

        meal.created_at = data.created_at;
        return meal;
      });
    }
  }, {
    key: "getAll",
    value: function getAll() {
      // This will be a call to our ORM
      // And some manipulations to make the data presentable.
      return this.fetchAllMeals() || [];
    }
  }, {
    key: "getMenuOfTheDay",
    value: function getMenuOfTheDay() {
      return this.fetchAllMeals().filter(function (meal) {
        return meal.active_today == 1;
      });
    }
  }, {
    key: "getMeal",
    value: function getMeal(id) {
      // -1 because we have our data in an array which starts at 0
      return this.fetchAllMeals()[id - 1] || {};
    }
  }, {
    key: "addMealToMenu",
    value: function addMealToMenu(caterer_id, meal_id) {
      // this should return the meal just added if saved successfully or an error as string then i'll check if response type is an object
      // or a string the controller;
      var meals = this.getAllByCaterer(caterer_id);

      if (meals) {
        var thisMealIndex = meals.map(function (meal) {
          return meal.id;
        }).indexOf(parseInt(meal_id, Number));
        var thisMeal = meals[thisMealIndex];

        if (thisMealIndex >= 0) {
          thisMeal.active_today = 1;
          thisMeal.updated_at = new Date();
          var new_menu_item = thisMeal;
          meals.splice(thisMealIndex, 1, new_menu_item);
          return new_menu_item;
        }
      }

      return {};
    }
  }, {
    key: "removeMealFromMenu",
    value: function removeMealFromMenu(caterer_id, meal_id) {
      // this should return the meal just added if saved successfully or an error as string then i'll check if response type is an object
      // or a string the controller;
      var meals = this.getAllByCaterer(caterer_id);

      if (meals) {
        var thisMealIndex = meals.map(function (meal) {
          return meal.id;
        }).indexOf(parseInt(meal_id, Number));
        var thisMeal = meals[thisMealIndex];

        if (thisMealIndex >= 0) {
          thisMeal.active_today = 0;
          thisMeal.updated_at = new Date();
          var removed_menu_item = thisMeal;
          meals.splice(thisMealIndex, 1, removed_menu_item);
          return removed_menu_item;
        }
      }

      return {};
    }
  }, {
    key: "getAllByCaterer",
    value: function getAllByCaterer(caterer_id) {
      // This will be a call to our ORM
      // And some manipulations to make the data presentable.
      return this.fetchAllMeals().filter(function (meal) {
        return meal.caterer_id == caterer_id;
      });
    } // removeMealFromMenu(caterer_id, meal_id) {
    //   const meals = this.getAllByCaterer(caterer_id);
    //   return meals.filter(meal => meal.id != meal_id)
    // }

  }]);

  return MealsService;
}();

exports.default = MealsService;