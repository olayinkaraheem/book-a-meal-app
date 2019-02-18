"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Meal = function Meal() {
  _classCallCheck(this, Meal);

  this.id = null;
  this.name = null;
  this.size = null;
  this.price = null;
  this.currency = null;
  this.caterer_id = null;
  this.active_today = null;
  this.active = null;
  this.rating = null; // this.updated_at = null;
  // this.updated_by = null;

  this.created_at = null;
};

exports.default = Meal;