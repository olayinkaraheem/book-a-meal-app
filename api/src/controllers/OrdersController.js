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
      // console.log(selectedMeal);
      const new_order = order.placeOrder(selectedMeal[0], req.body);
      // console.log(new_order);
      const response = {message: 'Request submitted successfully', data: new_order };
      res.status(200).send(response);
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
      const updated_order = order.updateOrderItem(user_id, parseInt(req.params.id, Number), update);
      
      let response_status = 404;
      let message = `Order with id ${req.params.id} does not exist`;
      if(updated_order.id){
        response_status = 200;
        message = 'Order updated successfully';
      }
      res.status(response_status).send({message, data: updated_order});
    }
  }

  deleteOrder() {
    const order = new OrdersService();
    return (req, res) => {
      const deleted_order = order.deleteOrderItem(req.body.user_id, req.params.id)
      let response_status = 404;
      let message = `Order with id ${req.params.id} does not exist`;
      // console.log(deleted_order);
      if (deleted_order.id) {
        response_status = 200;
        message = 'Order deleted successfully';
      }
      res.status(response_status).send({ message, data: deleted_order });
    }
  }
}