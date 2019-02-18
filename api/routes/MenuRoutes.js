import express from 'express';
import MenuController from '../controllers/MenuController';

const menuController = new MenuController();

const router = express.Router();

router.get('/', menuController.getMenuOfTheDay());
router.post('/', menuController.setMenuOfTheDay());

export default router;