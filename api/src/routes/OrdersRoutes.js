import express from 'express';
import OrdersController from '../controllers/OrdersController';

const ordersController = new OrdersController();

const router = express.Router();

router.get('/', ordersController.getAll());
router.post('/', ordersController.createOrder());
router.put('/:id', ordersController.updateOrder());
router.delete('/:id', ordersController.deleteOrder());

export default router;