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

var MenuController =
/*#__PURE__*/
function () {
  function MenuController() {
    _classCallCheck(this, MenuController);
  }

  _createClass(MenuController, [{
    key: "getAll",
    value: function getAll() {
      var meal = new _MealsService.default();
      return function (req, res) {
        res.status(200).send(meal.getAll());
      };
    }
  }, {
    key: "setMenuOfTheDay",
    value: function setMenuOfTheDay() {
      var meal = new _MealsService.default();
      return function (req, res) {
        var _req$body = req.body,
            id = _req$body.id,
            name = _req$body.name,
            size = _req$body.size,
            price = _req$body.price,
            currency = _req$body.currency,
            caterer_id = _req$body.caterer_id,
            active_today = _req$body.active_today,
            active = _req$body.active;
        var newMenu = {
          id: id,
          name: name,
          size: size,
          price: price,
          currency: currency,
          caterer_id: caterer_id,
          active_today: active_today,
          active: active,
          rating: 0,
          created_at: new Date()
        };
        res.status(200).send(meal.addMeal(newMenu));
      };
    }
  }, {
    key: "getMeal",
    value: function getMeal() {
      var meal = new _MealsService.default();
      return function (req, res) {
        res.status(200).send(meal.getMeal(req.body.id));
      };
    }
  }, {
    key: "getMenuOfTheDay",
    value: function getMenuOfTheDay() {
      var meal = new _MealsService.default();
      return function (req, res) {
        res.status(200).send(meal.getMealsOfTheDay());
      };
    }
  }, {
    key: "getMenuByUser",
    value: function getMenuByUser(user_id) {
      return this.getAll().filter(function (menu) {
        return menu.user_id == user_id;
      });
    }
  }, {
    key: "updateMenu",
    value: function updateMenu(user_id, menu_id, update) {
      var pendingOrders = this.getAllPendingOrderByUser(user_id);
      var thisOrder = pendingOrders.filter(function (order) {
        return order.id == order_id;
      });
      pendingOrders.splice(pendingOrders.indexOf(thisOrder), 1, update);
      return pendingOrders;
    }
  }]);

  return MenuController;
}();

exports.default = MenuController;