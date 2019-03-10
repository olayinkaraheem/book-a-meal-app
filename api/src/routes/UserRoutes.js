import express from 'express';
import UserController from '../controllers/UserController';

const userController = new UserController();

const router = express.Router();

router.get('/users', userController.getAll());
router.post('/signup', userController.signupUser());
router.post('/login', userController.login());
router.get('/users/:id', userController.getUser());

export default router;