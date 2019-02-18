"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _OrdersController = _interopRequireDefault(require("../controllers/OrdersController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ordersController = new _OrdersController.default();

var router = _express.default.Router();

router.get('/', ordersController.getAll());
router.post('/', ordersController.createOrder());
router.put('/:id', ordersController.updateOrder());
var _default = router;
exports.default = _default;