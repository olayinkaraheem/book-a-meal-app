import OrdersService from '../services/OrdersService';

export default class OrdersController {
  constructor() {
  }

  getAll() {
    const orders = new OrdersService();
    return (req, res) => {
      res.status(200).send(orders.getAll());
    }
  }

  createOrder() {
    const order = new OrdersService();
    return (req, res) => {
      const selectedMeal = order.getAllMealOptions().filter( meal => req.body.id == meal.id);
      res.status(200).send(selectedMeal);
    }
  }

  updateOrder() {
    //const caterer_id = caterer_id || 3;  this will be the id of the logged in caterer or admin 
    const order = new OrdersService();
    return (req, res) => {
      const { user_id, meal_title, meal_size, price, currency, quantity, total, caterer_id, status} = req.body;
      const update = {
        meal_title,
        user_id,
        meal_size,
        quantity,
        price,
        total,
        currency,
        caterer_id,
        status,
        created_at: new Date()
      };
      res.status(200).send(order.updateOrderItem(user_id, parseInt(req.params.id, Number), update));
    }
  }

  deleteMeal() {
    const meal = new OrdersService();
    return (req, res) => {
      res.status(200).send(meal.deleteMeal(req.body.caterer_id, req.params.id));
    }
  }
}