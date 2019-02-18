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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var OrdersService =
/*#__PURE__*/
function () {
  function OrdersService() {
    _classCallCheck(this, OrdersService);

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
        meal_title: 'Jollof Rice and chicken',
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
        meal_title: 'Jollof Rice and chicken',
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
        meal_title: 'Jollof Rice,salad and chicken',
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
        meal_title: 'Jollof Rice,salad and chicken',
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
        meal_title: 'Ice cream and chips',
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
        order.meal_title = data.meal_title;
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
    key: "updateOrderItem",
    value: function updateOrderItem(user_id, order_id, update) {
      var pendingOrders = this.getAllPendingOrderByUser(user_id);
      var thisOrder = pendingOrders.filter(function (order) {
        return order.id == order_id;
      });

      var updated_order = _objectSpread({
        id: parseInt(order_id, Number)
      }, update);

      pendingOrders.splice(pendingOrders.indexOf(thisOrder), 1, updated_order);
      return pendingOrders;
    } // TODO

  }, {
    key: "getOrdersOfTheDay",
    value: function getOrdersOfTheDay() {
      return this.fetchAllOrders().filter(function (order) {
        return order.created_at == 'Today'; // This will a date object comparison
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