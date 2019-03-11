import express from 'express';
import auth from '../middlewares/auth';
import MenuAuth from '../middlewares/menu.auth';
import MenuController from '../controllers/MenuController';

const menuController = new MenuController();

const router = express.Router();

router.get('/all', auth.verifyToken, MenuAuth.getAll, menuController.getAll());
router.get('/', auth.verifyToken, MenuAuth.getMenu, menuController.getMenuOfTheDay());
router.post('/', auth.verifyToken, MenuAuth.createMenu, menuController.setMenuOfTheDay());
router.delete('/:id', auth.verifyToken, MenuAuth.deleteMenu, menuController.removeMealFromMenu());

export default router;