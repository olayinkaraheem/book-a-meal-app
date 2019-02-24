"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MenuService = _interopRequireDefault(require("../services/MenuService"));

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
      var menu = new _MenuService.default();
      return function (req, res) {
        res.status(200).send(menu.getAll());
      };
    }
  }, {
    key: "setMenuOfTheDay",
    value: function setMenuOfTheDay() {
      var menu = new _MenuService.default();
      return function (req, res) {
        var _req$body = req.body,
            meal_id = _req$body.meal_id,
            caterer_id = _req$body.caterer_id;
        var meal = menu.addMealToMenu(caterer_id, meal_id);
        var message = "Meal with id ".concat(meal_id, " not found and could'n not be added to menu");
        var response_status = 403;

        if (meal.id) {
          message = "Meal with id ".concat(meal_id, " added to menu successfully");
          response_status = 200;
        }

        res.status(response_status).send({
          message: message,
          data: meal
        });
      };
    }
  }, {
    key: "getMenuOfTheDay",
    value: function getMenuOfTheDay() {
      var menu = new _MenuService.default();
      return function (req, res) {
        var menu_of_the_day = menu.getMenuOfTheDay();
        var message = 'Today\'s menu not set';
        var response_status = 404;

        if (menu_of_the_day) {
          message = 'Menu of the day fetch request sent successfully';
          response_status = 200;
        }

        res.status(response_status).send({
          message: message,
          data: menu_of_the_day
        });
      };
    }
  }, {
    key: "removeMealFromMenu",
    value: function removeMealFromMenu() {
      var menu = new _MenuService.default();
      return function (req, res) {
        var caterer_id = req.body.caterer_id;
        var meal_id = req.params.meal_id;
        var meal = menu.removeMealFromMenu(caterer_id, meal_id);
        var message = "Meal with id ".concat(meal_id, " not found and could'n not be removed from menu");
        var response_status = 403;

        if (meal.id) {
          message = "Meal with id ".concat(meal_id, " removed from menu of the day successfully");
          response_status = 200;
        }

        res.status(response_status).send({
          message: message,
          data: meal
        });
      };
    } // Extra features

  }, {
    key: "getMeal",
    value: function getMeal() {
      var meal = new _MenuService.default();
      return function (req, res) {
        res.status(200).send(meal.getMeal(req.body.id));
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