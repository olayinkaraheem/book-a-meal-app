import OrdersService from '../services/OrdersService';

export default class OrdersController {
  constructor() {
  }

  getAll() {
    return async (req, res) => {
      const orders = new OrdersService();
      const all_orders = await orders.getAll();
      const message = all_orders.message;
      const status = all_orders.code;
      if(!all_orders.error){
        res.status(status).send({ message, data: all_orders.orders });
      } else {
        res.status(status).send({ message });
      }
    }
  }

  createOrder() {
    return async (req, res) => {
      const order = new OrdersService();    
      const newOrder = req.body;
      // const { meal_id } = req.body;
      const order_response = await order.placeOrder(newOrder);
      const message = order_response.message;
      const status = order_response.code;
      if (!order_response.error) {
        res.status(status).send({ message, data: order_response.order });
      } else {
        res.status(status).send({ message });
      }
    }
  }

  updateOrder() {
    const order = new OrdersService();
    return async (req, res) => {
      const id = parseInt(req.params.id, Number);
      const { user_id } = req.body;
      const pending_order = await order.getOrderById(id);
      const pending_order_message = pending_order.message;
      const pending_order_status = pending_order.code;
      // console.log(!pending_order.error && pending_order.order.user_id == user_id, !pending_order.error, pending_order.order.user_id, pending_order.order, user_id)
      if(!pending_order.error && pending_order.order.user_id == user_id ) {
        const updated_order = await order.updateOrder(id, req.body);
        const message = updated_order.message;
        const status = updated_order.code;
        if (!updated_order.error) {
          res.status(status).send({ message, data: updated_order.order });
        } else {
          res.status(status).send({ message });
        }
      } else {
        res.status(pending_order_status).send({ message: pending_order_message+' but you do not have permision to modify this order' });
      }  
    }
  }

  deleteOrder() {
    const order = new OrdersService();
    return async (req, res) => {
      const id = parseInt(req.params.id, Number);
      const { user_id } = req.body;
      const pending_order = await order.getOrderById(id);
      const pending_order_message = pending_order.message;
      const pending_order_status = pending_order.code;
      if(!pending_order.error && pending_order.order.user_id == user_id ) {
        const deleted_order = await order.deleteAnOrderItem(id);
        const message = deleted_order.message;
        const status = deleted_order.code;
        if (!deleted_order.error) {
          res.status(status).send({ message, data: deleted_order.order });
        } else {
          res.status(status).send({ message });
        }
      } else {
        res.status(pending_order_status).send({ message: pending_order_message });
      }  
    }
  }

  // getAll() {
  //   const orders = new OrdersService();
  //   return (req, res) => {
  //     res.status(200).send(orders.getAll());
  //   }
  // }

  // createOrder() {
  //   const order = new OrdersService();
  //   return (req, res) => {
  //     const selectedMeal = order.getAllMealOptions().filter( meal => req.body.id == meal.id);
  //     // console.log(selectedMeal);
  //     const new_order = order.placeOrder(selectedMeal[0], req.body);
  //     // console.log(new_order);
  //     const response = {message: 'Request submitted successfully', data: new_order };
  //     res.status(200).send(response);
  //   }
  // }

  // updateOrder() {
  //   //const caterer_id = caterer_id || 3;  this will be the id of the logged in caterer or admin 
  //   const order = new OrdersService();
  //   return (req, res) => {
  //     const { user_id, meal_title, meal_size, price, currency, quantity, total, caterer_id, status} = req.body;
  //     const update = {
  //       meal_title,
  //       user_id,
  //       meal_size,
  //       quantity,
  //       price,
  //       total,
  //       currency,
  //       caterer_id,
  //       status,
  //       created_at: new Date()
  //     };
  //     const updated_order = order.updateOrderItem(user_id, parseInt(req.params.id, Number), update);
      
  //     let response_status = 404;
  //     let message = `Order with id ${req.params.id} does not exist`;
  //     if(updated_order.id){
  //       response_status = 200;
  //       message = 'Order updated successfully';
  //     }
  //     res.status(response_status).send({message, data: updated_order});
  //   }
  // }

  // deleteOrder() {
  //   const order = new OrdersService();
  //   return (req, res) => {
  //     const deleted_order = order.deleteOrderItem(req.body.user_id, req.params.id)
  //     let response_status = 404;
  //     let message = `Order with id ${req.params.id} does not exist`;
  //     // console.log(deleted_order);
  //     if (deleted_order.id) {
  //       response_status = 200;
  //       message = 'Order deleted successfully';
  //     }
  //     res.status(response_status).send({ message, data: deleted_order });
  //   }
  // }
}