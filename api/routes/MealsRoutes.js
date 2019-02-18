import express from 'express';
import MealsController from '../controllers/MealsController';
import MenuController from '../controllers/MenuController';
import MealsService from '../services/MealsService';

// const mealsService = new MealsService();
const mealsController = new MealsController();
const menuController = new MenuController();

const router = express.Router();
router.get('/', mealsController.getAll());
router.post('/', mealsController.addMeal());
router.put('/:id', mealsController.updateMeal());
router.delete('/:id', mealsController.deleteMeal());
router.get('/:id', mealsController.getMeal());

// router.get('/:id', MealsController.getMeal);

// router.get('/', (req, res) => {
//   res.status(200).send(mealsService.getAll());
// });
// router.get('/', (req, res) => MealsController.getAll(req, res));
// router.get('/', (req, res) => {
//   res.status(200).send("OK");
// });

export default router;