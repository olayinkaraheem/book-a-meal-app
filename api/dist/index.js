"use strict";

var _express = _interopRequireDefault(require("express"));

var _MealsRoutes = _interopRequireDefault(require("./src/routes/MealsRoutes"));

var _MenuRoutes = _interopRequireDefault(require("./src/routes/MenuRoutes"));

var _OrdersRoutes = _interopRequireDefault(require("./src/routes/OrdersRoutes"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use(_bodyParser.default.json());
app.use('/api/v1/meals', _MealsRoutes.default);
app.use('/api/v1/menu', _MenuRoutes.default);
app.use('/api/v1/orders', _OrdersRoutes.default);
var PORT = 8080;
app.listen(PORT, function () {
  console.log("server started on port ".concat(PORT));
});