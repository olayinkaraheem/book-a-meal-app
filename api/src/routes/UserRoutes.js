import express from 'express';
import UserController from '../controllers/UserController';

const userController = new UserController();

const router = express.Router();
router.get('/users', userController.getAll());
router.post('/signup', userController.signupUser());
// router.put('/:id', userController.updateMeal());
// router.delete('/:id', userController.deleteMeal());
router.get('/users/:id', userController.getUser());

// router.get('/:id', MealsController.getMeal);

// router.get('/', (req, res) => {
//   res.status(200).send(mealsService.getAll());
// });
// router.get('/', (req, res) => MealsController.getAll(req, res));
// router.get('/', (req, res) => {
//   res.status(200).send("OK");
// });

export default router;