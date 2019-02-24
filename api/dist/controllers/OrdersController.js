"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _OrdersService = _interopRequireDefault(require("../services/OrdersService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var OrdersController =
/*#__PURE__*/
function () {
  function OrdersController() {
    _classCallCheck(this, OrdersController);
  }

  _createClass(OrdersController, [{
    key: "getAll",
    value: function getAll() {
      var orders = new _OrdersService.default();
      return function (req, res) {
        res.status(200).send(orders.getAll());
      };
    }
  }, {
    key: "createOrder",
    value: function createOrder() {
      var order = new _OrdersService.default();
      return function (req, res) {
        var selectedMeal = order.getAllMealOptions().filter(function (meal) {
          return req.body.id == meal.id;
        }); // console.log(selectedMeal);

        var new_order = order.placeOrder(selectedMeal[0], req.body); // console.log(new_order);

        var response = {
          message: 'Request submitted successfully',
          data: new_order
        };
        res.status(200).send(response);
      };
    }
  }, {
    key: "updateOrder",
    value: function updateOrder() {
      //const caterer_id = caterer_id || 3;  this will be the id of the logged in caterer or admin 
      var order = new _OrdersService.default();
      return function (req, res) {
        var _req$body = req.body,
            user_id = _req$body.user_id,
            meal_title = _req$body.meal_title,
            meal_size = _req$body.meal_size,
            price = _req$body.price,
            currency = _req$body.currency,
            quantity = _req$body.quantity,
            total = _req$body.total,
            caterer_id = _req$body.caterer_id,
            status = _req$body.status;
        var update = {
          meal_title: meal_title,
          user_id: user_id,
          meal_size: meal_size,
          quantity: quantity,
          price: price,
          total: total,
          currency: currency,
          caterer_id: caterer_id,
          status: status,
          created_at: new Date()
        };
        var updated_order = order.updateOrderItem(user_id, parseInt(req.params.id, Number), update);
        var response_status = 404;
        var message = "Order with id ".concat(req.params.id, " does not exist");

        if (updated_order.id) {
          response_status = 200;
          message = 'Order updated successfully';
        }

        res.status(response_status).send({
          message: message,
          data: updated_order
        });
      };
    }
  }, {
    key: "deleteOrder",
    value: function deleteOrder() {
      var order = new _OrdersService.default();
      return function (req, res) {
        var deleted_order = order.deleteOrderItem(req.body.user_id, req.params.id);
        var response_status = 404;
        var message = "Order with id ".concat(req.params.id, " does not exist"); // console.log(deleted_order);

        if (deleted_order.id) {
          response_status = 200;
          message = 'Order deleted successfully';
        }

        res.status(response_status).send({
          message: message,
          data: deleted_order
        });
      };
    }
  }]);

  return OrdersController;
}();

exports.default = OrdersController;