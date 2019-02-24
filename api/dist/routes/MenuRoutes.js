"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _MenuController = _interopRequireDefault(require("../controllers/MenuController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menuController = new _MenuController.default();

var router = _express.default.Router();

router.get('/', menuController.getMenuOfTheDay());
router.post('/', menuController.setMenuOfTheDay());
router.delete('/:meal_id', menuController.removeMealFromMenu());
var _default = router;
exports.default = _default;