import express from 'express';
import MenuController from '../controllers/MenuController';

const menuController = new MenuController();

const router = express.Router();

router.get('/all', menuController.getAll());
router.get('/', menuController.getMenuOfTheDay());
router.post('/', menuController.setMenuOfTheDay());

router.delete('/:id', menuController.removeMealFromMenu());

export default router;