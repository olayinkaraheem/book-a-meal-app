import express from 'express';
import auth from '../middlewares/auth';
import OrderAuth from '../middlewares/order.auth';
import OrdersController from '../controllers/OrdersController';

const ordersController = new OrdersController();

const router = express.Router();

router.get('/', auth.verifyToken, OrderAuth.getOrder, ordersController.getAll());
router.post('/', auth.verifyToken, OrderAuth.createOrder, ordersController.createOrder());
router.put('/:id', auth.verifyToken, OrderAuth.updateOrder, ordersController.updateOrder());
router.delete('/:id', auth.verifyToken, OrderAuth.deleteOrder, ordersController.deleteOrder());

export default router;