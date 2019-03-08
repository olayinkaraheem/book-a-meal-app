import express from 'express';
import UserController from '../controllers/UserController';

const userController = new UserController();

const router = express.Router();
router.get('/', userController.getAll());
// router.post('/', mealsController.addMeal());
// router.put('/:id', mealsController.updateMeal());
// router.delete('/:id', mealsController.deleteMeal());
// router.get('/:id', mealsController.getMeal());

// router.get('/:id', MealsController.getMeal);

// router.get('/', (req, res) => {
//   res.status(200).send(mealsService.getAll());
// });
// router.get('/', (req, res) => MealsController.getAll(req, res));
// router.get('/', (req, res) => {
//   res.status(200).send("OK");
// });

export default router;