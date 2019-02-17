// id = ;
// order_title = ;
// user_id = ;
// order_size = ;
// quantity = ;
// price = ;
// currency = ;
// caterer_id = ;
// status = ; // deleleted/cancelled, delivered/closed, in_cart
// updated_at = ;
// updated_by = ;
// created_at = ;

import Order from '../models/OrderModel';

export default class OrdersService {
  fetchAllOrders() {
    // This is the data we will have in our database
    this.orders = [
      {
        id: 1,
        user_id: 23,
        order_title: 'Jollof Rice and chicken',
        order_size: 'plates',
        price: '500',
        quantity: '3',
        currency: 'NGN',
        total: '1500',
        caterer_id: 3,
        status: 1,
        updated_at: "20-01-2019 12:34:25",
        updated_by: 1,
        created_at: "20-01-2019 12:34:25",
      },
      {
        id: 2,
        name: 'Fried Rice',
        size: 'plates',
        price: '200',
        currency: 'NGN',
        caterer_id: 3,
        active_today: 1,
        rating: 5,
        status: 1,
        updated_at: "20-01-2019 12:34:25",
        updated_by: 1,
        created_at: "20-01-2019 12:34:25",
      },
      {
        id: 3,
        name: 'Coconut Rice',
        size: 'plates',
        price: '500',
        currency: 'NGN',
        caterer_id: 3,
        active_today: 1,
        rating: 5,
        status: 1,
        updated_at: "20-01-2019 12:34:25",
        updated_by: 1,
        created_at: "20-01-2019 12:34:25",
      },
      {
        id: 4,
        name: 'Apache Rice',
        size: 'plates',
        price: '750',
        currency: 'NGN',
        caterer_id: 3,
        active_today: 0,
        rating: 5,
        status: 1,
        updated_at: "20-01-2019 12:34:25",
        updated_by: 1,
        created_at: "20-01-2019 12:34:25",
      },
      {
        id: 5,
        name: 'Node Rice',
        size: 'plates',
        price: '750',
        currency: 'NGN',
        caterer_id: 3,
        active_today: 1,
        rating: 5,
        status: 1,
        updated_at: "20-01-2019 12:34:25",
        updated_by: 1,
        created_at: "20-01-2019 12:34:25",
      },
    ];

    // When we retrieve the data, it will be of type Means
    // Hence, this simulation here.
    return this.orders.map((data) => {
      const order = new Order();
      order.id = data.id;
      order.name = data.name;
      order.size = data.size;
      order.price = data.price;
      order.currency = data.currency;
      order.caterer_id = data.caterer_id;
      order.active_today = data.active_today;
      order.rating = data.rating;
      order.status = data.status;
      order.updated_at = data.updated_at;
      order.active = data.active;
      order.updated_by = data.updated_by;
      order.created_at = data.created_at;
      return order;
    });
  }

  getAll() {
    // This will be a call to our ORM
    // And some manipulations to make the data presentable.
    return this.fetchAllorders();
  }

  getOrdersOfTheDay() {
    return this.fetchAllOrders().filter((order) => {
      return order.active_today == 1;
    })
  }

  getOrderById(id) {
    // -1 because we have our data in an array which starts at 0
    return this.fetchAllOrders()[id - 1];
  }
  
  getOrderByUser(user_id) {
    return this.fetchAllOrders().filter((order) => {
      return order.user_id == user_id;
    })
  }
  // This won't be used/shown to the users.
  getAllCancelledOrderByUser(user_id) {
    return this.fetchAllOrders().filter((order) => {
      return order.user_id == user_id && status == -1;
    })
  }
  // This will be for the user's ordre history
  getAllCompletedOrderByUser(user_id) {
    return this.fetchAllOrders().filter((order) => {
      return order.user_id == user_id && status == 1;
    })
  }
  
  getAllPendingOrderByUser(user_id) {
    return this.fetchAllOrders().filter((order) => {
      return order.user_id == user_id && status == 0;
    })
  }

  updateOrder(user_id, order_id, update){
    const pendingOrders = this.getAllPendingOrderByUser(user_id);
    const thisOrder = pendingOrders.filter( order => order.id == order_id);
    pendingOrders.splice(pendingOrders.indexOf(thisOrder), 1, update);
    return pendingOrders;
  }

}
