"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;

var _express = _interopRequireDefault(require("express"));

var _MealsRoutes = _interopRequireDefault(require("./routes/MealsRoutes"));

var _MenuRoutes = _interopRequireDefault(require("./routes/MenuRoutes"));

var _OrdersRoutes = _interopRequireDefault(require("./routes/OrdersRoutes"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
exports.app = app;

require('dotenv').config(); // const db = require('db');
// db.connect({
// host: process.env.DB_HOST,
// user: process.env.DB_USER,
// pass: process.env.DB_PASSWORD,
// });
// const result = dotenv.config();
// if(result.error) {
//   throw result.error
// }


console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
app.use(_bodyParser.default.json());
app.use('/api/v1/meals', _MealsRoutes.default);
app.use('/api/v1/menu', _MenuRoutes.default);
app.use('/api/v1/orders', _OrdersRoutes.default);
var PORT = 8080;
var server = app.listen(PORT, function () {
  console.log("server started on port ".concat(PORT));
});