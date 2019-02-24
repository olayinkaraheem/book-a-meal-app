"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _OrderModel = _interopRequireDefault(require("../models/OrderModel"));

var _MealsService = _interopRequireDefault(require("../services/MealsService"));

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

var OrdersService =
/*#__PURE__*/
function () {
  function OrdersService() {
    _classCallCheck(this, OrdersService);

    // test comment to check what is wrong with merge after assignment submission
    var meals = new _MealsService.default();
    this.meals = meals.getAll();
  }

  _createClass(OrdersService, [{
    key: "fetchAllOrders",
    value: function fetchAllOrders() {
      // This is the data we will have in our database
      this.orders = [{
        id: 1,
        user_id: 23,
        meal_id: 1,
        meal_name: 'Jollof Rice and chicken',
        meal_size: 'plates',
        price: '500',
        quantity: '3',
        currency: 'NGN',
        total: '1500',
        caterer_id: 3,
        status: 1,
        // updated_at: "20-01-2019 12:34:25",
        updated_by: 1,
        created_at: "20-01-2019 12:34:25"
      }, {
        id: 2,
        user_id: 3,
        meal_id: 2,
        meal_name: 'Jollof Rice and chicken',
        meal_size: 'plates',
        price: '500',
        quantity: 1,
        currency: 'NGN',
        total: '500',
        caterer_id: 12,
        status: 1,
        // updated_at: "20-01-2019 12:34:25",
        updated_by: 1,
        created_at: "20-01-2019 12:34:25"
      }, {
        id: 3,
        user_id: 21,
        meal_id: 3,
        meal_name: 'Jollof Rice,salad and chicken',
        meal_size: 'plates',
        price: '500',
        quantity: 4,
        currency: 'NGN',
        total: '2000',
        caterer_id: 12,
        status: 1,
        // updated_at: "20-01-2019 12:34:25",
        updated_by: 1,
        created_at: "20-01-2019 12:34:25"
      }, {
        id: 4,
        user_id: 21,
        meal_id: 5,
        meal_name: 'Jollof Rice,salad and chicken',
        meal_size: 'plates',
        price: '500',
        quantity: 4,
        currency: 'NGN',
        total: '2000',
        caterer_id: 12,
        status: 0,
        // updated_at: "20-01-2019 12:34:25",
        updated_by: 1,
        created_at: "20-01-2019 12:34:25"
      }, {
        id: 5,
        user_id: 21,
        meal_id: 4,
        meal_name: 'Ice cream and chips',
        meal_size: 'plates',
        price: '750',
        quantity: 2,
        currency: 'NGN',
        total: '1500',
        caterer_id: 12,
        status: 0,
        // updated_at: "20-01-2019 12:34:25",
        updated_by: 1,
        created_at: "20-01-2019 12:34:25"
      }]; // When we retrieve the data, it will be of type Means
      // Hence, this simulation here.

      return this.orders.map(function (data) {
        var order = new _OrderModel.default();
        order.id = data.id;
        order.user_id = data.user_id;
        order.meal_id = data.meal_id;
        order.meal_name = data.meal_name;
        order.meal_size = data.meal_size;
        order.price = data.price;
        order.currency = data.currency;
        order.caterer_id = data.caterer_id;
        order.status = data.status;
        order.quantity = data.quantity;
        order.total = data.total; // order.updated_at = data.updated_at;
        // order.updated_by = data.updated_by;

        order.created_at = data.created_at;
        return order;
      });
    }
  }, {
    key: "getAll",
    value: function getAll() {
      // This will be a call to our ORM
      // And some manipulations to make the data presentable.
      return this.fetchAllOrders();
    }
  }, {
    key: "getAllMealOptions",
    value: function getAllMealOptions() {
      // select from a list of available meals;
      // const Meal = new Meal();
      return this.meals;
    }
  }, {
    key: "placeOrder",
    value: function placeOrder(meal, order_info) {
      var lastOrderInDatabase = this.getAll()[this.getAll().length - 1]; // console.log('order service', meal, meal.id, meal.name, meal.size, meal.price);

      var new_order = new _OrderModel.default();
      new_order.id = lastOrderInDatabase.id + 1;
      new_order.meal_id = meal.id;
      new_order.user_id = 23; // this will be the current loggedin user id

      new_order.meal_name = meal.name;
      new_order.meal_size = meal.size;
      new_order.price = meal.price;
      new_order.quantity = order_info.quantity;
      new_order.currency = meal.currency;
      new_order.total = meal.price * order_info.quantity;
      new_order.caterer_id = meal.caterer_id;
      new_order.status = meal.status;
      new_order.updated_by = 23; // this will be the current loggedin user id

      new_order.created_at = "20-01-2019 12:34:25"; // current date time

      this.orders = [].concat(_toConsumableArray(this.orders), [new_order]);
      return new_order;
    }
  }, {
    key: "updateOrderItem",
    value: function updateOrderItem(user_id, order_id, update) {
      var pendingOrders = this.getAllPendingOrderByUser(user_id); // const thisOrder = pendingOrders.filter( order => order.id == order_id);

      var updated_order = _objectSpread({
        id: parseInt(order_id, Number)
      }, update);

      if (pendingOrders) {
        var thisOrderIndex = pendingOrders.map(function (order) {
          return order.id;
        }).indexOf(order_id); // console.log(thisOrderIndex);

        if (thisOrderIndex >= 0) {
          pendingOrders.splice(thisOrderIndex, 1, updated_order); // console.log(updated_order);

          return updated_order;
        }
      }

      return {};
    }
  }, {
    key: "deleteOrderItem",
    value: function deleteOrderItem(user_id, order_id) {
      var pendingOrders = this.getAllPendingOrderByUser(user_id);

      if (pendingOrders) {
        var thisOrderIndex = pendingOrders.map(function (order) {
          return order.id;
        }).indexOf(parseInt(order_id, Number));
        var thisOrder = pendingOrders[thisOrderIndex];

        if (thisOrderIndex >= 0) {
          thisOrder.status = -1;
          thisOrder.updated_at = new Date();
          var deleted_order = thisOrder;
          pendingOrders.splice(thisOrderIndex, 1, deleted_order);
          return deleted_order;
        }
      }

      return {};
    }
  }, {
    key: "getOrdersOfTheDay",
    value: function getOrdersOfTheDay() {
      var date = new Date();
      var date_today = date.getDate();
      var month = date.getMonth();
      var year = date.getFullYear();
      var full_date = year + '-' + month + '-' + date_today;
      return this.fetchAllOrders().filter(function (order) {
        // const full_date = order.created_at.split(' ')[0].split('-');
        // return full_date[0] == year && full_date[1] == month && full_date[2] == date_today; // This will a date object comparison
        // OR
        var created_date = order.created_at.split(' ')[0];
        return created_date == full_date;
      });
    }
  }, {
    key: "getOrderById",
    value: function getOrderById(id) {
      // -1 because we have our data in an array which starts at 0
      return this.fetchAllOrders()[id - 1];
    }
  }, {
    key: "getOrderByUser",
    value: function getOrderByUser(user_id) {
      return this.fetchAllOrders().filter(function (order) {
        return order.user_id == user_id;
      });
    } // This won't be used/shown to the users.

  }, {
    key: "getAllCancelledOrderByUser",
    value: function getAllCancelledOrderByUser(user_id) {
      return this.fetchAllOrders().filter(function (order) {
        return order.user_id == user_id && order.status == -1;
      });
    } // This will be for the user's order history

  }, {
    key: "getAllCompletedOrderByUser",
    value: function getAllCompletedOrderByUser(user_id) {
      return this.fetchAllOrders().filter(function (order) {
        return order.user_id == user_id && order.status == 1;
      });
    }
  }, {
    key: "getAllPendingOrderByUser",
    value: function getAllPendingOrderByUser(user_id) {
      return this.fetchAllOrders().filter(function (order) {
        return order.user_id == user_id && order.status == 0;
      });
    }
  }]);

  return OrdersService;
}();

exports.default = OrdersService;