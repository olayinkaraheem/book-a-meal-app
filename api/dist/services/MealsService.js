"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MealModel = _interopRequireDefault(require("../models/MealModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
        updated_at: "20-01-2019 12:34:25",
        updated_by: 1,
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
        updated_at: "20-01-2019 12:34:25",
        updated_by: 1,
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
        updated_at: "20-01-2019 12:34:25",
        updated_by: 1,
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
        updated_at: "20-01-2019 12:34:25",
        updated_by: 1,
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
        meal.status = data.status;
        meal.updated_at = data.updated_at;
        meal.active = data.active;
        meal.updated_by = data.updated_by;
        meal.created_at = data.created_at;
        return meal;
      });
    }
  }, {
    key: "getAll",
    value: function getAll() {
      // This will be a call to our ORM
      // And some manipulations to make the data presentable.
      return this.fetchAllMeals();
    }
  }, {
    key: "getMealsOfTheDay",
    value: function getMealsOfTheDay() {
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
    key: "addMeal",
    value: function addMeal(meal) {
      return [].concat(_toConsumableArray(this.fetchAllMeals()), [meal]);
    }
  }, {
    key: "getAllByCaterer",
    value: function getAllByCaterer(caterer_id) {
      // This will be a call to our ORM
      // And some manipulations to make the data presentable.
      return this.fetchAllMeals().filter(function (meal) {
        return meal.caterer_id == caterer_id;
      });
    }
  }, {
    key: "updateMeal",
    value: function updateMeal(caterer_id, meal_id, update) {
      var meals = this.getAllByCaterer(caterer_id);
      var thisMeal = meals.filter(function (meal) {
        return meal.id == meal_id;
      });

      var updated_meal = _objectSpread({
        id: meal_id
      }, update, {
        caterer_id: caterer_id,
        updated_by: caterer_id
      });

      console.log(updated_meal);
      meals.splice(meals.indexOf(thisMeal), 1, updated_meal);
      return meals;
    }
  }, {
    key: "deleteMeal",
    value: function deleteMeal(caterer_id, meal_id) {
      var meals = this.getAllByCaterer(caterer_id);
      return meals.filter(function (meal) {
        return meal.id != meal_id;
      });
    }
  }]);

  return MealsService;
}();

exports.default = MealsService;