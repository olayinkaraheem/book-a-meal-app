import express from 'express';
import auth from '../middlewares/auth';
import MealAuth from '../middlewares/meals.auth';
import MealsController from '../controllers/MealsController';

// const mealsService = new MealsService();
const mealsController = new MealsController();

const router = express.Router();
router.get('/', auth.verifyToken, MealAuth.getMeal, mealsController.getAll());
router.post('/', auth.verifyToken, MealAuth.addMeal, mealsController.addMeal());
router.put('/:id', auth.verifyToken, MealAuth.updateMeal, mealsController.updateMeal());
router.delete('/:id', auth.verifyToken, MealAuth.deleteMeal, mealsController.deleteMeal());
router.get('/:id', auth.verifyToken, MealAuth.getMeal, mealsController.getMeal());

// router.get('/:id', MealsController.getMeal);

// router.get('/', (req, res) => {
//   res.status(200).send(mealsService.getAll());
// });
// router.get('/', (req, res) => MealsController.getAll(req, res));
// router.get('/', (req, res) => {
//   res.status(200).send("OK");
// });

export default router;