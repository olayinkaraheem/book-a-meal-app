"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _MealsController = _interopRequireDefault(require("../controllers/MealsController"));

var _MenuController = _interopRequireDefault(require("../controllers/MenuController"));

var _MealsService = _interopRequireDefault(require("../services/MealsService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const mealsService = new MealsService();
var mealsController = new _MealsController.default();
var menuController = new _MenuController.default();

var router = _express.default.Router();

router.get('/', mealsController.getAll());
router.post('/', mealsController.addMeal());
router.put('/:id', mealsController.updateMeal());
router.delete('/:id', mealsController.deleteMeal());
router.get('/:id', mealsController.getMeal()); // router.get('/:id', MealsController.getMeal);
// router.get('/', (req, res) => {
//   res.status(200).send(mealsService.getAll());
// });
// router.get('/', (req, res) => MealsController.getAll(req, res));
// router.get('/', (req, res) => {
//   res.status(200).send("OK");
// });

var _default = router;
exports.default = _default;