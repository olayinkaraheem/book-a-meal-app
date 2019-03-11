import { Order, Meal } from '../../database/models';

export default class OrdersService {
  
  async getAll() {
    try {
      const orders = await Order.findAll({});
      if(orders){
        // console.log(orders);
        return { error: false, code: 200, message: 'Orders fetched successfully', orders };
      }
      return { error: false, code: 200, message: "No meals order history found", orders: {}};
    } catch ( err ) {
      // console.log(err);
      return { error: true, code: 500, message: 'Something went wrong. Please try again.'+err };
    }
  }

  async getAllPendingOrders() {
    try {
      const orders = await Order.findAll({ active: 0 });
      if(orders){
        return { error: false, code: 200, message: 'Pending orders fetched successfully', orders };
      }
      return { error: false, code: 200, message: "No peding meal order(s) found", orders: {}};
    } catch ( err ) {
      return { error: true, code: 500, message: 'Something went wrong. Please try again.' };
    }
  }
  
  async getAllPendingOrdersByUser(user_id) {
    try {
      const orders = await Order.findAll({ where: { active: 0, user_id } });
      if(orders){
        return { error: false, code: 200, message: 'Pending orders fetched successfully', orders };
      }
      return { error: false, code: 200, message: "No pending meal order(s) found", orders: {}};
    } catch ( err ) {
      return { error: true, code: 500, message: 'Something went wrong. Please try again.' };
    }
  }

  async getOrderById(id) {
    try {
      const order = await Order.findOne({where: { id } });
      if(order){
        // console.log(order);
        return { error: false, code: 200, message: 'Order fetched successfully', order };
      }
      return { error: false, code: 200, message: `Order with id ${id} not found`, order: {}};
    } catch ( err ) {
      // console.log(err);
      return { error: true, code: 500, message: 'Something went wrong. Please try again.' };
    }
  }

  async placeOrder(order) {

    try {
      // const meals = new MealsService();
      // console.log(Order.getMeal());
      // return
      const { quantity, meal_id } = order;
      const meal_detail = await Meal.findOne({ where: { id: meal_id }});
      const amount = meal_detail.price*quantity;
      // console.log('amount: '+amount, 'quantity: '+meal_detail.price);
      const newOrder = await Order.create({ amount, ...order });
      if(newOrder){
        return { error: false, code: 200, message: `New order with id ${newOrder.id} added successfully`, order: newOrder };
      }
      return { error: false, code: 403, message: 'New order could not be created. Please try again', order: {} };
    } catch ( err ) {
      return { error: true, code: 500, message: "Something is not right "+err };
    }
  }

  async updateOrder(id, order) {
    try {
      const { quantity, meal_id } = order;
      const meal_detail = await Meal.findOne({ where: { id: meal_id } });
      const amount = meal_detail.price * quantity;
      const updated_order = await Order.update( {amount, ...order}, { where: { id }, returning: true });
      if(updated_order){
        return { error: false, code: 200, message: `Order with id ${id} updated successfully`, order: updated_order }
      }
      return { error: false, code: 200, message: `Order with id ${id} update failed`, order  }
    } catch ( err ) {
      return { error: true, code: 500 , message: 'Something went wrong. Please try again.'}
    }
  }
  
  async deleteAnOrderItem(id) {
    try {
      const deleted_order = await Order.update( { status: -1 }, { where: { id }, returning: true });
      if(deleted_order){
        return { error: false, code: 200, message: `Order with id ${id} deleted successfully`, order: deleted_order }
      }
      return { error: false, code: 200, message: `Order with id ${id} failed to delete`, order  }
    } catch ( err ) {
      return { error: true, code: 500 , message: 'Something went wrong. Please try again.'}
    }
  }

  async cancelAllOrder(user_id) {
    try {
      const cancelled_orders = await Order.updateAll( { status: -2 }, {where: {
                                  user_id: { 
                                    $and: { 
                                      status: 0 
                                    } 
                                  } 
                                } });
      if(cancelled_orders){
        return { error: false, code: 200, message: `Orders cancelled successfully`, orders: cancelled_orders }
      }
      return { error: false, code: 200, message: `Orders with id ${id} failed to delete`, orders: {}  }
    } catch ( err ) {
      return { error: true, code: 500 , message: 'Something went wrong. Please try again.'}
    }
  }
  
  // getOrdersOfTheDay() {
  //   const date = new Date();
  //   const date_today = date.getDate();
  //   const month = date.getMonth();
  //   const year = date.getFullYear();
  //   const full_date = year+'-'+month+'-'+date_today;
  //   return this.fetchAllOrders().filter((order) => {
  //     // const full_date = order.created_at.split(' ')[0].split('-');
  //     // return full_date[0] == year && full_date[1] == month && full_date[2] == date_today; // This will a date object comparison
  //     // OR
  //     const created_date = order.created_at.split(' ')[0];
  //     return created_date == full_date;
  //   })
  // }

  
  // getOrderByUser(user_id) {
  //   return this.fetchAllOrders().filter((order) => {
  //     return order.user_id == user_id;
  //   })
  // }
  // This won't be used/shown to the users.
  // getAllCancelledOrderByUser(user_id) {
  //   return this.fetchAllOrders().filter((order) => {
  //     return order.user_id == user_id && order.status == -1;
  //   })
  // }
  // This will be for the user's order history
  // getAllCompletedOrderByUser(user_id) {
  //   return this.fetchAllOrders().filter((order) => {
  //     return order.user_id == user_id && order.status == 1;
  //   })
  // }
}
