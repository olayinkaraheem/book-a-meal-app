"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Order = function Order() {
  _classCallCheck(this, Order);

  this.id = null;
  this.meal_title = null;
  this.user_id = null;
  this.meal_size = null;
  this.quantity = null;
  this.price = null;
  this.total = null;
  this.currency = null;
  this.caterer_id = null;
  this.status = null; // this.updated_at = null;
  // this.updated_by = null;

  this.created_at = null;
};

exports.default = Order;